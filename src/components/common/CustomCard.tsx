import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from './View';
import { useTheme } from '../../context/ThemeContext';

interface CardProps {
  children: React.ReactNode;
  elevation?: number;
  style?: StyleProp<ViewStyle>;
}

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 1,
  style,
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.card,
          borderRadius: theme.borderRadius.md,
          padding: theme.spacing.md,
          ...(elevation > 0 && {
            shadowColor: theme.colors.shadow,
            shadowOffset: { width: 0, height: elevation },
            shadowOpacity: 0.2,
            shadowRadius: elevation * 2,
            elevation,
          }),
        },
        style,
      ]}
    >
      {children}
    </View>
  );
};