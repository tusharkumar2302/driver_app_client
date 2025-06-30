import React from 'react';
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { CustomText } from './CustomText';
import { COLORS } from '../../constants/colors';
// import { Text } from './Text';
// import { useTheme } from '../../context/ThemeContext';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const CustomButton: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  style,
  disabled,
  ...props
}) => {
  // const { theme } = useTheme();

  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: {
      backgroundColor: COLORS.white,
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: COLORS.backgroundSecondary,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: COLORS.white,
    },
    text: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
  };

  const sizeStyles: Record<ButtonSize, ViewStyle> = {
    sm: { paddingVertical: 8, paddingHorizontal: 12 },
    md: { paddingVertical: 12, paddingHorizontal: 16 },
    lg: { paddingVertical: 16, paddingHorizontal: 24 },
  };

  return (
    <TouchableOpacity
      style={[
        {
          borderRadius: 8,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: disabled ? 0.6 : 1,
          width: fullWidth ? '100%' : undefined,
        },
        variantStyles[variant],
        sizeStyles[size],
        style,
      ]}
      disabled={disabled || loading}
      activeOpacity={0.8}
      {...props}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {leftIcon}
          <CustomText
            variant="button"
            color={
              variant === 'primary'
                ? "black"
                : "white"
            }
            weight='medium'
            style={{ marginHorizontal: 8 }}
          >
            {children}
          </CustomText>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};
