import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { View } from './View';
import { Text } from './Text';
import { useTheme } from '../../context/ThemeContext';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  style,
  containerStyle,
  ...props
}) => {
  const { theme } = useTheme();

  return (
    <View style={containerStyle}>
      {label && (
        <Text variant="caption" style={{ marginBottom: 4 }}>
          {label}
        </Text>
      )}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: error ? theme.colors.error : theme.colors.border,
          borderRadius: theme.borderRadius.sm,
          paddingHorizontal: 12,
        }}
      >
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
        <TextInput
          style={[
            {
              flex: 1,
              paddingVertical: 12,
              color: theme.colors.text,
            },
            style,
          ]}
          placeholderTextColor={theme.colors.textSecondary}
          {...props}
        />
        {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </View>
      {error && (
        <Text
          variant="caption"
          color={theme.colors.error}
          style={{ marginTop: 4 }}
        >
          {error}
        </Text>
      )}
    </View>
  );
};
