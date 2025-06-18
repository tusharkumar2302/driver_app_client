import React from 'react';
import { View, StyleSheet, ActivityIndicator, Animated, Easing } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Text } from './Text';

interface CustomLoadingProps {
  visible: boolean;
  size?: 'small' | 'large';
  color?: string;
  text?: string;
  overlay?: boolean;
  fullscreen?: boolean;
}

export const CustomLoading: React.FC<CustomLoadingProps> = ({
  visible,
  size = 'large',
  color,
  text,
  overlay = true,
  fullscreen = false,
}) => {
  const { theme } = useTheme();
  const spinValue = new Animated.Value(0);

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  if (!visible) return null;

  return (
    <View
      style={[
        styles.container,
        overlay && { backgroundColor: 'rgba(0,0,0,0.3)' },
        fullscreen && StyleSheet.absoluteFill,
      ]}
      pointerEvents={overlay ? 'auto' : 'none'}
    >
      <View style={styles.loadingContainer}>
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
          <ActivityIndicator
            size={size}
            color={color || theme.colors.primary}
          />
        </Animated.View>
        {text && (
          <Text style={[styles.loadingText, { color: theme.colors.text }]}>
            {text}
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,
  },
  loadingContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  loadingText: {
    marginTop: 12,
    fontSize: 16,
  },
});