import React from 'react';
import {
  TextInput,
  TextInputProps,
  StyleProp,
  ViewStyle,
  TextStyle,
  View,
} from 'react-native';
import { CustomText } from './CustomText';
import { COLORS } from '../../constants/colors';
// import { View } from './View';
// import { Text } from './Text';
// import { useTheme } from '../../context/ThemeContext';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
}

export const CustomInput: React.FC<InputProps> = ({
  label,
  error,
  leftIcon,
  rightIcon,
  style,
  containerStyle,
  ...props
}) => {
  // const { theme } = useTheme();

  return (
    <View style={containerStyle}>
      {label && (
        <CustomText color={COLORS.white} variant="body" style={{ marginBottom: 10 }}>
          {label}
        </CustomText>
      )}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.backgroundSecondary,
          alignItems: 'center',
          borderWidth: 1,
          borderColor: error ? COLORS.error : 'transparent',
          borderRadius: 8,
          paddingHorizontal: 12,
        }}
      >
        {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
        <TextInput
          style={[
            {
              flex: 1,
              paddingVertical: 12,
              color: COLORS.white,
            },
            style,
          ]}
          placeholderTextColor={COLORS.textDisabled}
          {...props}
        />
        {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
      </View>
      {error && (
        <CustomText
          variant="caption"
          color={COLORS.error}
          style={{ marginTop: 4 }}
        >
          {error}
        </CustomText>
      )}
    </View>
  );
};
