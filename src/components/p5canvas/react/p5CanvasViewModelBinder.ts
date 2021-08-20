import { Bag } from "@paperbits/common";
import { WidgetBinding } from "@paperbits/common/editing";
import { EventManager } from "@paperbits/common/events";
import { StyleCompiler } from "@paperbits/common/styles";
import { ViewModelBinder } from "@paperbits/common/widgets";
import { P5CanvasModel } from "../p5CanvasModel";
import { P5Canvas } from "./p5Canvas";


export class P5CanvasViewModelBinder implements ViewModelBinder<P5CanvasModel, P5Canvas>  {
    constructor(
        private readonly eventManager: EventManager,
        private readonly styleCompiler: StyleCompiler
    ) { }

    public async createWidgetBinding(model: P5CanvasModel, bindingContext: Bag<any>): Promise<WidgetBinding<P5CanvasModel, P5Canvas>> {
        const binding = new WidgetBinding<P5CanvasModel, P5Canvas>();
        binding.framework = "react";
        binding.model = model;
        binding.name = "p5-canvas";
        binding.editor = "p5-canvas-editor";
        binding.readonly = false;
        binding.flow = "block";
        binding.draggable = true;
        binding.displayName = "P5 canvas";
        binding.viewModelClass = P5Canvas;
        binding.applyChanges = async () => {
            await this.modelToViewModel(model, binding.viewModel, bindingContext);
            this.eventManager.dispatchEvent("onContentUpdate");
        };
        binding.onCreate = async () => {
            await this.modelToViewModel(model, binding.viewModel, bindingContext);
        };
        binding.onDispose = async () => {
            if (model.styles?.instance) {
                bindingContext.styleManager.removeStyleSheet(model.styles.instance.key);
            }
        };

        return binding;
    }

    public async modelToViewModel(model: P5CanvasModel, viewModel: P5Canvas, bindingContext?: Bag<any>): Promise<P5Canvas> {
        let classNames = null;

        if (model.styles) {
            const styleModel = await this.styleCompiler.getStyleModelAsync(model.styles, bindingContext?.styleManager);

            if (styleModel.styleManager) {
                styleModel.styleManager.setStyleSheet(styleModel.styleSheet);
            }

            classNames = styleModel.classNames;
        }

        viewModel.setState(state => ({
            initialCount: model.initialCount,
            classNames: classNames
        }));

        return viewModel;
    }

    public canHandleModel(model: P5CanvasModel): boolean {
        return model instanceof P5CanvasModel;
    }
}