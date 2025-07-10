import React, { useEffect, useRef, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import CustomMap from '../../components/common/CustomMap';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/dimensions';
import { COLORS } from '../../constants/colors';
import CustomHeader from '../../components/common/CustomHeader';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import CarViewCard from '../../components/CarViewCard';

// Icons
import Sedan from '../../assets/images/icons/Sedan';
import SUV from '../../assets/images/icons/SUV';
import Pickup from '../../assets/images/icons/Pickup';
import Hatchback from '../../assets/images/icons/Hatchback';

// Types
import { SvgProps } from 'react-native-svg';
import { carTypes } from '../../data/carType';
import { CustomButton } from '../../components/common/CustomButton';
import { CustomText } from '../../components/common/CustomText';
import CarSelector from '../../components/CarSelector';

const CarType: React.FC = () => {
  const bottomSheetRef = useRef<any>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  const carIcons: Record<string, React.FC<SvgProps>> = {
    Sedan,
    SUV,
    Pickup,
    Hatchback,
  };

  const AddCarFooter = () => {
    return (
      <CustomButton
        variant="outline"
        size="lg"
        style={{
          borderStyle: 'dashed',
          borderWidth: 2.5,
          borderColor: COLORS.disabled,
          borderRadius: 12,
        }}
        onPress={() => {
          setIsVisible(true);
        }}
      >
        <CustomText variant="h2" weight="bold">
          Add Car +
        </CustomText>
      </CustomButton>
    );
  };

  return (
    <View style={styles.container}>
      <CarSelector isVisible={isVisible} setIsVisible={setIsVisible} />
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.629}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <View style={styles.sheetContent}>
          <CustomHeader text={RIDE_STRINGS.booking.selectCar} />
          <FlatList
            data={carTypes}
            keyExtractor={(item, index) => item.name + index}
            contentContainerStyle={styles.listContent}
            renderItem={({ item }) => {
              const Icon = carIcons[item.name] || Sedan;
              return (
                <View style={styles.cardWrapper}>
                  <CarViewCard
                    Icon={Icon}
                    car={item.name}
                    transmission={item.transmission}
                    isSelected={item.isSelected}
                  />
                </View>
              );
            }}
            ListFooterComponent={AddCarFooter}
            showsVerticalScrollIndicator={false}
          />
        </View>
        <View style={styles.continueContainer}>
          <CustomButton>
            <CustomText variant="h3" weight="bold">
              {RIDE_STRINGS.booking.continue}
            </CustomText>
          </CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default CarType;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sheetContent: {
    flex: 1,
    position: 'relative',
  },
  listContent: {
    paddingBottom: 120,
    paddingTop: 25,
  },
  cardWrapper: {
    marginBottom: 20,
  },
  continueContainer: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: -10,
    right: 0,
    padding: 16,
    paddingHorizontal: 12,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
