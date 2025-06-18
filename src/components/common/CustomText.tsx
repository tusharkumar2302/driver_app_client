import React from 'react';
import { Text as RNText, TextStyle, StyleProp } from 'react-native';
import { useTheme } from '../../context/ThemeContext';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'caption' | 'button';
type TextWeight = 'regular' | 'medium' | 'bold';

interface TextProps extends React.ComponentProps<typeof RNText> {
  variant?: TextVariant;
  weight?: TextWeight;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  color?: string;
  style?: StyleProp<TextStyle>;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body',
  weight = 'regular',
  align = 'left',
  color,
  style,
  ...props
}) => {
  const { theme } = useTheme();

  const variantStyles: Record<TextVariant, TextStyle> = {
    h1: { fontSize: 32, lineHeight: 40 },
    h2: { fontSize: 24, lineHeight: 32 },
    h3: { fontSize: 20, lineHeight: 28 },
    body: { fontSize: 16, lineHeight: 24 },
    caption: { fontSize: 12, lineHeight: 16 },
    button: { fontSize: 14, lineHeight: 20 },
  };

  const weightStyles: Record<TextWeight, TextStyle> = {
    regular: { fontWeight: '400' },
    medium: { fontWeight: '500' },
    bold: { fontWeight: '700' },
  };

  return (
    <RNText
      style={[
        variantStyles[variant],
        weightStyles[weight],
        { color: color || theme.colors.text, textAlign: align },
        style,
      ]}
      {...props}
    />
  );
};