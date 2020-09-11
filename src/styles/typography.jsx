import { scaleFont } from './mixins';
import { Platform } from 'react-native';

// FONT FAMILY
let device = Platform.OS==="ios"

export const FONT_FAMILY_REGULAR = device?"Arial":'Roboto';
export const FONT_FAMILY_BOLD = device?"Arial":'Roboto';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_H1 = scaleFont(22);
export const FONT_SIZE_H2 = scaleFont(20);
export const FONT_SIZE_H3 = scaleFont(18);
export const FONT_SIZE_H4 = scaleFont(16);
export const FONT_SIZE_H5 = scaleFont(14);
export const FONT_SIZE_H6 = scaleFont(12);
export const FONT_SIZE_P  = scaleFont(12);

export const FONT_SIZE_INFO  = scaleFont(14);

export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

//Input Font
export const FONT_SIZE_INPUT = 20;

//Menu fonts
export const FONT_SIZE_MENU = scaleFont(16)

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};