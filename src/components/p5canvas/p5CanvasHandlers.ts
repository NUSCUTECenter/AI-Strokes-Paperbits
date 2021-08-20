/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IWidgetOrder, IWidgetHandler } from "@paperbits/common/editing";
import { P5CanvasModel } from "./p5CanvasModel";


export class P5CanvasHandlers implements IWidgetHandler {
    public async getWidgetOrder(): Promise<IWidgetOrder> {
        const widgetOrder: IWidgetOrder = {
            name: "p5Canvas",
            displayName: "P5 canvas",
            iconClass: "widget-icon widget-icon-component",
            requires: ["html", "js"],
            createModel: async () => {
                return new P5CanvasModel();
            }
        };

        return widgetOrder;
    }
}