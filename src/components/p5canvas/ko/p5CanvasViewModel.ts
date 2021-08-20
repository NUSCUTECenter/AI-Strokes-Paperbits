import * as ko from "knockout";
import template from "./p5Canvas.html";
import { Component } from "@paperbits/common/ko/decorators";

@Component({
    selector: "p5-canvas",
    template: template
})
export class P5Canvas {
    public readonly runtimeConfig: ko.Observable<string>;

    constructor() {
        this.runtimeConfig = ko.observable();
    }
}
