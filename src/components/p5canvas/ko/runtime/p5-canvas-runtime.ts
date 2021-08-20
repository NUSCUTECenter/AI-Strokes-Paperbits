import * as ko from "knockout";
import template from "./p5-canvas-runtime.html";
import { Component, RuntimeComponent, Param, OnMounted, OnDestroyed } from "@paperbits/common/ko/decorators";


@RuntimeComponent({
    selector: "p5-canvas-runtime"
})
@Component({
    selector: "p5-canvas-runtime",
    template: template
})
export class P5CanvasRuntime {
    public readonly clickCount: ko.Observable<number>;

    constructor() {
        this.clickCount = ko.observable(0);
        this.initialCount = ko.observable(0);
    }

    @Param()
    public readonly initialCount: ko.Observable<number>;

    @OnMounted()
    public async initialize(): Promise<void> {
        // Your initialization logic
        this.clickCount(this.initialCount());
    }

    @OnDestroyed()
    public async dispose(): Promise<void> {
        // Your cleanup widget logic
    }

    public increaseCount(): void {
        this.clickCount(this.clickCount() + 1);
    }
}