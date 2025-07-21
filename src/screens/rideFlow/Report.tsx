import React, { useEffect, useRef } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import CustomMap from '../../components/common/CustomMap';
import { CustomText } from '../../components/common/CustomText';
import { COLORS } from '../../constants/colors';
import { SCREEN_HEIGHT } from '../../constants/dimensions';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { CustomButton } from '../../components/common/CustomButton';
import UploadImage from '../../assets/images/icons/UploadImage';

const Report = () => {
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
            {RIDE_STRINGS.report.title}
          </CustomText>
          <CustomText variant="h3" color={COLORS.textDisabled}>
            {RIDE_STRINGS.report.skip}
          </CustomText>
        </View>

        <View style={styles.reportCard}>
          <View style={styles.dropdown}>
            {/* <DropDownArrow
              width={SCREEN_HEIGHT * 0.1}
              height={SCREEN_HEIGHT * 0.1} /> */}
          </View>
          <TextInput
            style={styles.description}
            placeholder={RIDE_STRINGS.report.describeIssue}
            multiline
          />
          <CustomText
            variant="h3"
            color={COLORS.white}
            style={styles.imageText}
          >
            {RIDE_STRINGS.report.uploadPictures}
          </CustomText>
          <View style={styles.uploadImages}>
            <UploadImage
              width={SCREEN_HEIGHT * 0.1}
              height={SCREEN_HEIGHT * 0.1}
            />
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <CustomButton>{RIDE_STRINGS.report.report}</CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Report;

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
  dropdown: {
    marginVertical: 30,
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.07,
    backgroundColor: COLORS.backgroundPrimary,
  },
  description: {
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: COLORS.backgroundPrimary,
    textAlignVertical: 'top',
  },
  imageText: {
    marginVertical: 30,
  },
  uploadImages: {
    borderRadius: 8,
    height: SCREEN_HEIGHT * 0.17,
    backgroundColor: COLORS.backgroundPrimary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
