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
import Cash from '../../assets/images/icons/Cash';

const Checkout = () => {
  const bottomSheetRef = useRef<any>(null);

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  return (
    <View style={styles.container}>
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.6}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <View style={styles.header}>
          <ArrowRight width={30} height={30} />
          <CustomText variant="h3" color={COLORS.white}>
            {RIDE_STRINGS.booking.checkout}
          </CustomText>
          <CustomText variant="h3" color={COLORS.textDisabled}>
            {}
          </CustomText>
        </View>

        <View style={styles.checkoutCard}>
          {/* {Total Container} */}
          <View style={styles.totalContainer}>
            <Cash height={24} width={24} />
            <CustomText
              variant="h3"
              color={COLORS.white}
              style={styles.totalText}
            >
              {RIDE_STRINGS.booking.total}
            </CustomText>
            <CustomButton style={styles.priceButton}>₹ 0.00</CustomButton>
          </View>

          {/* {Order Detail Container} */}
          <View style={styles.section1}>
            <View style={styles.leftSection}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.totalText}
              >
                Baithakkhana
              </CustomText>
              <CustomText
                variant="caption"
                color={COLORS.textDisabled}
                style={styles.totalText}
              >
                Kolkata, West Bengal 700009
              </CustomText>
            </View>
            <View style={styles.rightSection}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.totalText}
              >
                HatchBack
              </CustomText>
              <CustomText
                variant="caption"
                color={COLORS.textDisabled}
                style={styles.totalText}
              >
                Automatic
              </CustomText>
            </View>
          </View>

          <View style={styles.section2}>
            <View style={styles.leftSection}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.totalText}
              >
                16 May 2025
              </CustomText>
              <CustomText
                variant="caption"
                color={COLORS.textDisabled}
                style={styles.totalText}
              >
                6:30 PM
              </CustomText>
            </View>
            <View style={styles.rightSection}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.totalText}
              >
                16 May 2025
              </CustomText>
              <CustomText
                variant="caption"
                color={COLORS.textDisabled}
                style={styles.totalText}
              >
                6:30 PM
              </CustomText>
            </View>
          </View>
        </View>

        <View style={styles.buttonWrapper}>
          <CustomButton>{RIDE_STRINGS.booking.proceed}</CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Checkout;

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
  checkoutCard: {
    paddingBottom: 40,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  totalContainer: {
    padding: 30,
    backgroundColor: COLORS.backgroundSecondary,
    borderBottomColor: COLORS.textDisabled,
    borderBottomWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalText: {
    marginLeft: 10,
  },
  priceButton: {
    marginLeft: 70,
    paddingHorizontal: 50,
  },
  section1: {
    padding: 20,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  rightSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  section2: {
    padding: 20,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
