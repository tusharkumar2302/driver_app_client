import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, ActivityIndicator, StyleProp, ViewStyle } from 'react-native';
import { Text } from './Text';
import { useTheme } from '../../context/ThemeContext';

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

export const Button: React.FC<ButtonProps> = ({
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
  const { theme } = useTheme();

  const variantStyles: Record<ButtonVariant, ViewStyle> = {
    primary: {
      backgroundColor: theme.colors.primary,
      borderWidth: 0,
    },
    secondary: {
      backgroundColor: theme.colors.secondary,
      borderWidth: 0,
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: theme.colors.border,
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
          borderRadius: theme.borderRadius.md,
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
        <ActivityIndicator color={theme.colors.textOnPrimary} />
      ) : (
        <>
          {leftIcon}
          <Text
            variant="button"
            color={
              variant === 'primary'
                ? theme.colors.textOnPrimary
                : theme.colors.text
            }
            style={{ marginHorizontal: 8 }}
          >
            {children}
          </Text>
          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};