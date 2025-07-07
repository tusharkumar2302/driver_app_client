import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { success2_img } from '../../constants/images';
import { CustomText } from '../../components/common/CustomText';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import { COLORS } from '../../constants/colors';
import { CustomButton } from '../../components/common/CustomButton';
import { SCREEN_WIDTH } from '../../constants/dimensions';

const SuccessScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <View style={styles.innerContainer}>
        <Image source={success2_img} style={styles.successImage} />

        <CustomText
          variant="h2"
          weight="bold"
          color={COLORS.success}
          style={styles.successText}
        >
          {RIDE_STRINGS.booking.success}
        </CustomText>

        <CustomText
          variant="body"
          weight="regular"
          color={COLORS.textDisabled}
          style={styles.descriptionText}
        >
          {RIDE_STRINGS.booking.successDescription}
        </CustomText>
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton>{RIDE_STRINGS.booking.backToHome}</CustomButton>
      </View>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: COLORS.backgroundPrimary,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_WIDTH * 0.5,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  successText: {
    marginTop: 10,
    textAlign: 'center',
  },
  descriptionText: {
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 15,
  },
  buttonWrapper: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 20,
  },
});
