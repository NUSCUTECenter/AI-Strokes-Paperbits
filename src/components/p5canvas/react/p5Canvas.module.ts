import { IInjectorModule, IInjector } from "@paperbits/common/injection";
import { P5Canvas } from "./p5Canvas";
import { P5CanvasModelBinder } from "../p5CanvasModelBinder";
import { P5CanvasViewModelBinder } from "./p5CanvasViewModelBinder";


export class P5CanvasModule implements IInjectorModule {
    public register(injector: IInjector): void {        
        injector.bind("p5Canvas", P5Canvas);
        injector.bindToCollection("modelBinders", P5CanvasModelBinder);
        injector.bindToCollection("viewModelBinders", P5CanvasViewModelBinder);
    }
}