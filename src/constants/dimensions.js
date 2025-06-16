import { Dimensions, Platform } from 'react-native';

export const SPACING = {
  none: 0,
  xxs: 2,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
  xxxl: 64,
};

export const BORDER_RADIUS = {
  none: 0,
  sm: 4,
  md: 8,
  lg: 12,
  xl: 20,
  pill: 999,
};

export const BORDER_WIDTH = {
  none: 0,
  hairline: Platform.select({ ios: 0.3, android: 0.5 }),
  thin: 1,
  thick: 2,
};

export const ICON_SIZE = {
  xs: 16,
  sm: 24,
  md: 32,
  lg: 48,
  xl: 64,
};

export const ELEVATION = {
  none: 0,
  low: 2,
  medium: 4,
  high: 8,
};

export const SCREEN_PADDING = SPACING.md;
export const CONTAINER_PADDING = SPACING.lg;

export const SCREEN_HEIGHT = Dimensions.get('screen').height
export const SCREEN_WIDTH = Dimensions.get('screen').width