import React, { ReactNode } from 'react';
import { Modal, TouchableWithoutFeedback, View, StyleSheet, ViewStyle, Dimensions } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { Text } from './Text';

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
  animationType?: 'none' | 'slide' | 'fade';
  position?: 'center' | 'bottom';
  avoidKeyboard?: boolean;
  backdropOpacity?: number;
  containerStyle?: ViewStyle;
}

export const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  children,
  animationType = 'fade',
  position = 'center',
  avoidKeyboard = true,
  backdropOpacity = 0.5,
  containerStyle,
}) => {
  const { theme } = useTheme();

  const positionStyles = {
    center: {
      justifyContent: 'center',
      padding: 20,
    },
    bottom: {
      justifyContent: 'flex-end',
    },
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType={animationType}
      onRequestClose={onClose}
      supportedOrientations={['portrait', 'landscape']}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View
          style={[
            styles.backdrop,
            { backgroundColor: `rgba(0,0,0,${backdropOpacity})` },
          ]}
        />
      </TouchableWithoutFeedback>

      <View
        style={[styles.modalContainer, positionStyles[position]]}
        pointerEvents="box-none"
      >
        <View
          style={[
            styles.modalContent,
            {
              backgroundColor: theme.colors.card,
              borderRadius: theme.borderRadius.lg,
            },
            position === 'bottom' && { width: '100%', borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
            containerStyle,
          ]}
        >
          {title && (
            <Text variant="h3" style={styles.modalHeader}>
              {title}
            </Text>
          )}
          {children}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    ...StyleSheet.absoluteFillObject,
  },
  modalContainer: {
    flex: 1,
  },
  modalContent: {
    marginHorizontal: 20,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    marginBottom: 16,
    textAlign: 'center',
  },
});