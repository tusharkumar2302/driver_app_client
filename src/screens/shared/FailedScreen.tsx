import { View, Image, StyleSheet } from 'react-native';
import React from 'react';
import { fail_img } from '../../constants/images';
import { CustomText } from '../../components/common/CustomText';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import { COLORS } from '../../constants/colors';
import { CustomButton } from '../../components/common/CustomButton';
import { SCREEN_WIDTH } from '../../constants/dimensions';

const FailedScreen = () => {
  return (
    <View style={styles.centerContainer}>
      <View style={styles.innerContainer}>
        <Image source={fail_img} style={styles.failureImage} />

        <CustomText
          variant="h2"
          weight="bold"
          color={COLORS.error}
          style={styles.failureText}
        >
          {RIDE_STRINGS.booking.failure}
        </CustomText>

        <CustomText
          variant="body"
          weight="regular"
          color={COLORS.textDisabled}
          style={styles.descriptionText}
        >
          {RIDE_STRINGS.booking.failureDescription}
        </CustomText>
      </View>

      <View style={styles.buttonWrapper}>
        <CustomButton>{RIDE_STRINGS.booking.tryAgain}</CustomButton>
      </View>
    </View>
  );
};

export default FailedScreen;

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
  failureImage: {
    width: SCREEN_WIDTH * 0.5,
    height: SCREEN_WIDTH * 0.5,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  failureText: {
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
