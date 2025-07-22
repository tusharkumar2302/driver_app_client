import React from 'react';
import {
  Modal,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { COLORS } from '../../constants/colors';
import { CustomText } from '../common/CustomText';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/dimensions';

const BookingSuccess = () => {
  return (
    <Modal animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          {/* Image */}
          <Image
            source={require('../../assets/images/illustrations/success2.png')}
            style={styles.modalImage}
            resizeMode="contain"
          />

          {/* Title */}
          <CustomText
            variant="h3"
            color={COLORS.white}
            weight='bold'
            style={styles.titleText}
          >
            {RIDE_STRINGS.bookingDetail.modal.success.title}
          </CustomText>
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
  }
});

export default BookingSuccess;
