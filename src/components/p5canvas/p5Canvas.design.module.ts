import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { P5CanvasEditor } from "./ko/p5CanvasEditor";
import { P5CanvasHandlers } from "./p5CanvasHandlers";
import { P5CanvasModelBinder } from "./p5CanvasModelBinder";

import { P5Canvas, P5CanvasViewModelBinder } from "./react";

export class P5CanvasEditorModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("p5CanvasEditor", P5CanvasEditor);
        injector.bindToCollection("widgetHandlers", P5CanvasHandlers);
        injector.bind("p5Canvas", P5Canvas);
        injector.bindToCollection("modelBinders", P5CanvasModelBinder);
        injector.bindToCollection("viewModelBinders", P5CanvasViewModelBinder);
    }
}