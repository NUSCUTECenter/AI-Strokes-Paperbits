/**
 * @license
 * Copyright Paperbits. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file and at https://paperbits.io/license/mit.
 */

import { IModelBinder } from "@paperbits/common/editing";
import { P5CanvasModel } from "./p5CanvasModel";
import { Contract } from "@paperbits/common";
import { P5CanvasContract } from "./p5CanvasContract";

export class P5CanvasModelBinder implements IModelBinder<P5CanvasModel> {
    public canHandleContract(contract: Contract): boolean {
        return contract.type === "click-counter";
    }

    public canHandleModel(model: P5CanvasModel): boolean {
        return model instanceof P5CanvasModel;
    }

    public async contractToModel(contract: P5CanvasContract): Promise<P5CanvasModel> {
        const model = new P5CanvasModel();
        model.initialCount = contract.initialCount;
        model.styles = contract.styles;
        return model;
    }

    public modelToContract(model: P5CanvasModel): Contract {
        const contract: P5CanvasContract = {
            type: "click-counter",
            initialCount: model.initialCount,
            styles: model.styles
        };

        return contract;
    }
}
