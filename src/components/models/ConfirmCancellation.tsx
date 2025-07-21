import React from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { CustomText } from '../common/CustomText';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import { CustomButton } from '../common/CustomButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/dimensions';

const ConfirmCancellation = () => {
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Title */}
          <CustomText
            variant="h3"
            color={COLORS.white}
            weight="bold"
            style={styles.titleText}
          >
            {RIDE_STRINGS.bookingDetail.modal.cancellation.title}
          </CustomText>

          {/* Message */}
          <CustomText
            variant="body"
            color={COLORS.textDisabled}
            style={styles.messageText}
          >
            {RIDE_STRINGS.bookingDetail.modal.cancellation.message}
          </CustomText>

          {/* Cancellation Button */}
          <View style={styles.cancellationButtonContainer}>
            <CustomButton variant='outline' style={styles.cancellationButton}>
              {RIDE_STRINGS.bookingDetail.modal.cancellation.yesCancel}
            </CustomButton>
          </View>

          {/* Close button - Full width */}
          <View style={styles.buttonContainer}>
            <CustomButton style={styles.fullWidthButton}>
              {RIDE_STRINGS.bookingDetail.modal.cancellation.back}
            </CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
    padding: 20,
    paddingVertical: 40,
    width: '90%',
    alignItems: 'center',
  },
  modalImage: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.2,
    marginBottom: 24,
  },
  titleText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  messageText: {
    textAlign: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    width: '100%',
  },
  fullWidthButton: {
    width: '100%',
  },
  cancellationButtonContainer: {
    width: '100%',
    marginBottom: 20,
  },
  cancellationButton: {
    width: '100%',
  },
});

export default ConfirmCancellation;
