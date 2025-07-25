import React, { useEffect, useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import MagnifyingGlass from '../../assets/images/icons/MagnifyingGlass';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import { CustomInput } from '../../components/common/CustomInput';
import CustomMap from '../../components/common/CustomMap';
import CustomTabBar from '../../components/common/CustomTabBar';
import { CustomText } from '../../components/common/CustomText';
import { COLORS } from '../../constants/colors';
import { SCREEN_HEIGHT } from '../../constants/dimensions';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import Group from '../../assets/images/icons/Group';
import Bookmark from '../../assets/images/icons/Bookmark';
import Calender from '../../assets/images/icons/Calender';
import Map from '../../assets/images/icons/Map';
import StarFill from '../../assets/images/icons/StarFill';

const Home = () => {
  const bottomSheetRef = useRef<any>(null);

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  return (
    <View style={styles.container}>
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.629}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <View>
          <View style={styles.saveDriverContainer}>
            <View style={styles.bookGroupDriver}>
              <Group width={24} height={24} />
              <View>
                <CustomText
                  variant="caption"
                  weight="bold"
                  color={COLORS.white}
                >
                  {RIDE_STRINGS.home.group}
                </CustomText>
                <CustomText
                  variant="caption"
                  weight="regular"
                  color={COLORS.white}
                >
                  {RIDE_STRINGS.home.groupDescription}
                </CustomText>
              </View>
            </View>
            <View style={styles.saveDriver}>
              <Bookmark width={24} height={24} />
              <View>
                <CustomText
                  variant="caption"
                  weight="bold"
                  color={COLORS.white}
                >
                  {RIDE_STRINGS.home.saveDriver}
                </CustomText>
                <CustomText
                  variant="caption"
                  weight="regular"
                  color={COLORS.white}
                >
                  {RIDE_STRINGS.home.saveDriverDescription}
                </CustomText>
              </View>
            </View>
          </View>

          <View style={styles.searchContainer}>
            <CustomInput
              leftIcon={<MagnifyingGlass width={24} height={24} />}
              placeholder={RIDE_STRINGS.home.searchPlaceholder}
            />
            <View style={styles.schedule}>
              <Calender width={24} height={24} />
            </View>
          </View>

          <View style={styles.textContainer}>
            <CustomText variant="h3" weight="bold" color={COLORS.white}>
              {RIDE_STRINGS.home.recentlyVisited} ?
            </CustomText>
            <CustomText variant="body" weight="medium" color={COLORS.white}>
              {RIDE_STRINGS.home.seeAll} ?
            </CustomText>
          </View>

          <View style={styles.cardContainer}>
            <Image style={styles.cardImage} resizeMode="cover" />
            <View style={styles.cardRight}>
              <CustomText variant="h3" weight="bold" color={COLORS.textPrimary}>
                Baithakkhana (1.5km)
              </CustomText>

              <View style={styles.cardRow}>
                <Map
                  width={14}
                  height={14}
                  color={COLORS.textDisabled}
                  style={styles.iconMargin}
                />
                <CustomText variant="body" color={COLORS.textDisabled}>
                  Kolkata, West Bengal 700009
                </CustomText>
              </View>

              <View style={styles.cardRow}>
                <StarFill
                  width={16}
                  height={16}
                  color="#FFD600"
                  style={styles.iconMargin}
                />
                <CustomText
                  variant="caption"
                  weight="regular"
                  color={COLORS.white}
                >
                  2 Drivers available to go!
                </CustomText>
              </View>

              <View style={styles.cardBottomRow}>
                <View style={styles.priceBox}>
                  <CustomText variant="h3" color={COLORS.white}>
                    ₹ 0.00
                  </CustomText>
                </View>
                <View />
                <View style={styles.moreDetailsBox}>
                  <CustomText
                    variant="h3"
                    weight="bold"
                    color={COLORS.textPrimary}
                  >
                    More Details
                  </CustomText>
                </View>
              </View>
            </View>
          </View>

          <CustomTabBar />
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveDriverContainer: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  bookGroupDriver: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  saveDriver: {
    flex: 1,
    height: 60,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  searchContainer: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  schedule: {
    width: '15%',
    height: 50,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardContainer: {
    margin: 20,
    marginBottom: 40,
    padding: 10,
    backgroundColor: COLORS.backgroundSecondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: COLORS.textDisabled,
    borderWidth: 1,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: COLORS.textDisabled,
  },
  cardRight: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  cardBottomRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  iconMargin: {
    marginRight: 4,
  },
  priceBox: {
    borderWidth: 1,
    borderColor: COLORS.textDisabled,
    borderRadius: 10,
    paddingHorizontal: 18,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundSecondary,
  },
  moreDetailsBox: {
    marginLeft: 12,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
