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
import Cash from '../../assets/images/icons/Cash';
import { CustomInput } from '../../components/common/CustomInput';
import MagnifyingGlass from '../../assets/images/icons/MagnifyingGlass';
import LocationMark from '../../assets/images/icons/LocationMark';
import Map from '../../assets/images/icons/Map';
import TextDivider from '../../components/Divider';
import Building from '../../assets/images/icons/Building';
import locationData from '../../assets/data/pickupLocations.json';

const PickupLocation = () => {
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
        {/* {Header} */}
        <View style={styles.header}>
          <ArrowRight width={30} height={30} />
          <CustomText variant="h3" color={COLORS.white}>
            {RIDE_STRINGS.booking.selectLocation}
          </CustomText>
          <CustomText variant="h3" color={COLORS.textDisabled}>
            {}
          </CustomText>
        </View>

        {/* {Pickup Location Input} */}
        <View style={styles.inputContainer}>
          <MagnifyingGlass width={16} height={16} style={styles.leftIcon} />
          <TextInput
            style={styles.locationInput}
            placeholder={RIDE_STRINGS.booking.searchLocationPlaceholder}
          />
          <LocationMark width={16} height={16} style={styles.rightIcon} />
        </View>

        {/* {Select on Map} */}
        <View style={styles.selectMapWrapper}>
          <Map width={16} height={16} />
          <CustomText
            variant="caption"
            color={COLORS.white}
            style={styles.selectMapText}
          >
            {RIDE_STRINGS.booking.selectMap}
          </CustomText>
        </View>

        {/* {Divider} */}
        <View style={styles.divider} />

        {/* {Location Data} */}
        {locationData.map((item, index) => (
          <View key={index} style={styles.locationDataContainer}>
            <View style={styles.leftSection}>
              <Building width={20} height={24} />
              <CustomText variant="caption" color={COLORS.textDisabled}>
                {item.distance}
              </CustomText>
            </View>
            <View style={styles.rightSection}>
              <CustomText
                variant="body"
                color={COLORS.white}
                style={styles.selectMapText}
              >
                {item.area}
              </CustomText>
              <CustomText
                variant="caption"
                color={COLORS.textDisabled}
                style={styles.selectMapText}
              >
                {item.address}
              </CustomText>
            </View>
          </View>
        ))}
      </CustomBottomSheet>
    </View>
  );
};

export default PickupLocation;

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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.textDisabled,
    borderRadius: 12,
    paddingHorizontal: 12,
    backgroundColor: COLORS.backgroundPrimary,
    margin: 10,
  },
  locationInput: {
    flex: 1,
    height: 48,
    fontSize: 16,
    marginLeft: 8,
    marginRight: 8,
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
  selectMapWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.textDisabled,
    borderRadius: 50,
    width: '31%',
    marginBottom: 10,
  },
  selectMapText: {
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.textDisabled,
    marginBottom: 10,
  },
  locationDataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    marginHorizontal: 10,
  },
  leftSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
  rightSection: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  },
});
