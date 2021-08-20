import { IInjector, IInjectorModule } from "@paperbits/common/injection";

import { P5CanvasRuntime } from "./react/runtime";

export class P5CanvasRuntimeModule implements IInjectorModule {
    public register(injector: IInjector): void {
        injector.bind("p5CanvasRuntime", P5CanvasRuntime);
    }
}