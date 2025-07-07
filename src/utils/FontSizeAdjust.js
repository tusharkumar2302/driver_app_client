import { SCREEN_WIDTH } from "../constants/dimensions";

const BASE_WIDTH = 422;

const scale = size => (SCREEN_WIDTH / BASE_WIDTH) * size;

export const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;
