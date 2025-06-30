import React from 'react';
import { View, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface TextDividerProps {
  label?: string;
  containerStyle?: ViewStyle;
  lineStyle?: ViewStyle;
  textStyle?: TextStyle;
}

const TextDivider: React.FC<TextDividerProps> = ({
  label = 'hello',
  containerStyle,
  lineStyle,
  textStyle,
}) => (
  <View style={[styles.container, containerStyle]}>
    <View style={[styles.line, lineStyle]} />
    <Text style={[styles.text, textStyle]}>{label}</Text>
    <View style={[styles.line, lineStyle]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#C4C4C4',
  },
  text: {
    marginHorizontal: 8,
    color: '#333',
    fontWeight: '600',
  },
});

export default TextDivider;
