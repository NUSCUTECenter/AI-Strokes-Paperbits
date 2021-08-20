import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { P5CanvasModelBinder } from "./p5CanvasModelBinder";

import { P5Canvas, P5CanvasViewModelBinder } from "./react";

export class P5CanvasModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("clickCounter", P5Canvas);
        injector.bindToCollection("modelBinders", P5CanvasModelBinder);
        injector.bindToCollection("viewModelBinders", P5CanvasViewModelBinder);
    }
}