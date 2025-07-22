import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import CustomMap from '../../components/common/CustomMap';
import { CustomText } from '../../components/common/CustomText';
import { COLORS } from '../../constants/colors';
import { SCREEN_HEIGHT } from '../../constants/dimensions';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { CustomButton } from '../../components/common/CustomButton';

const Review = () => {
  const bottomSheetRef = useRef<any>(null);

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  return (
    <View style={styles.container}>
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.9}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <View style={styles.header}>
          <ArrowRight width={30} height={30} />
          <CustomText variant="h3" color={COLORS.white}>
            {RIDE_STRINGS.review.title}
          </CustomText>
          <CustomText variant="h3" color={COLORS.textDisabled}>
            {RIDE_STRINGS.report.skip}
          </CustomText>
        </View>

        <View style={styles.reportCard}>
          <CustomText
            variant="h3"
            color={COLORS.white}
            style={styles.imageText}
          >
            {RIDE_STRINGS.review.question1}
          </CustomText>

          <View style={styles.yesNoRow}>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.yes}
              </CustomText>
            </View>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.no}
              </CustomText>
            </View>
          </View>

          <CustomText
            variant="h3"
            color={COLORS.white}
            style={styles.imageText}
          >
            {RIDE_STRINGS.review.question2}
          </CustomText>

          <View style={styles.yesNoRow}>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.yes}
              </CustomText>
            </View>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.no}
              </CustomText>
            </View>
          </View>

          <CustomText
            variant="h3"
            color={COLORS.white}
            style={styles.imageText}
          >
            {RIDE_STRINGS.review.question3}
          </CustomText>

          <View style={styles.yesNoRow}>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.yes}
              </CustomText>
            </View>
            <View style={styles.yesNoWrapper}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.imageText}
              >
                {RIDE_STRINGS.review.no}
              </CustomText>
            </View>
          </View>
          <View style={styles.describeExperience}>
            <CustomText
              variant="body"
              color={COLORS.white}
              style={styles.imageText}
            >
              {RIDE_STRINGS.review.describeExperience}
            </CustomText>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <CustomButton>{RIDE_STRINGS.review.finish}</CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  reportCard: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 40,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  imageText: {
    marginVertical: 20,
  },
  yesNoRow: {
    flexDirection: 'row',
    height: SCREEN_HEIGHT * 0.1,
  },
  yesNoWrapper: {
    backgroundColor: COLORS.backgroundPrimary,
    borderRadius: 25,
    paddingHorizontal: 25,
    marginRight: 30,
    height: SCREEN_HEIGHT * 0.07,
    alignItems: 'center',
  },
  describeExperience: {
    borderRadius: 8,
    paddingLeft: 10,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: COLORS.backgroundPrimary,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
