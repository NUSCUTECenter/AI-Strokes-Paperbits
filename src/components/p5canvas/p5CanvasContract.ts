import { Contract } from "@paperbits/common";
import { LocalStyles } from "@paperbits/common/styles";

export interface P5CanvasContract extends Contract {
    /**
     * Initial count.
     */
    initialCount: number;

    /**
     * Widget local styles.
     */
    styles?: LocalStyles;
}