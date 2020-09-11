import { scaleSize, scaleSizeH ,WINDOW_HEIGHT,WINDOW_WIDTH } from "./mixins";

export const NAV_HEIGHT = scaleSizeH(60);
export const BOTTOM_TAB = scaleSizeH(100);

export const W_HEIGHT = WINDOW_HEIGHT
export const W_WIDTH = WINDOW_WIDTH

export const INPUT_TEXT_RADIUS = 15
export const INPUT_ELEVATION = 4

export const ICON_SIZE = scaleSize(40);

export const ScaleHeight = (value) => {
    return scaleSizeH(value)
}

export const ScaleWidth = (value) => {
    return scaleSize(value)
}
