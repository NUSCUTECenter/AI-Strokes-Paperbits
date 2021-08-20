import { Bag } from "@paperbits/common";
import { IWidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { P5CanvasModel } from "../p5CanvasModel";
import { P5Canvas } from "./p5CanvasViewModel";

export class P5CanvasViewModelBinder implements ViewModelBinder<P5CanvasModel, P5Canvas>  {
    constructor(private readonly eventManager: EventManager) { }

    public async modelToViewModel(model: P5CanvasModel, viewModel?: P5Canvas, bindingContext?: Bag<any>): Promise<P5Canvas> {
        if (!viewModel) {
            viewModel = new P5Canvas();
        }

        viewModel.runtimeConfig(JSON.stringify({ initialCount: model.initialCount }));

        const binding: IWidgetBinding<P5CanvasModel, P5Canvas> = {
            name: "click-counter",
            displayName: "Click counter",
            readonly: bindingContext ? bindingContext.readonly : false,
            model: model,
            flow: "block",
            draggable: true,
            editor: "click-counter-editor",
            applyChanges: async () => {
                await this.modelToViewModel(model, viewModel, bindingContext);
                this.eventManager.dispatchEvent("onContentUpdate");
            }
        };

        viewModel["widgetBinding"] = binding;

        return viewModel;
    }

    public canHandleModel(model: P5CanvasModel): boolean {
        return model instanceof P5CanvasModel;
    }
}