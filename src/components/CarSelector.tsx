import React, { useRef, useState, useCallback } from 'react';
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  TouchableOpacity,
  FlatList as RNFlatList,
  Pressable,
} from 'react-native';
import { COLORS } from '../constants/colors';
import { SCREEN_WIDTH } from '../constants/dimensions';
import { CustomText } from './common/CustomText';
import { CAR_TYPE_STRINGS } from '../constants/carTypeStrings';
import { CustomButton } from './common/CustomButton';
import XMark from '../assets/images/icons/XMark';
import { CarTypes } from '../constants/carTypes';
import { CustomModal } from './common/CustomModal';

type CarName = (typeof CarTypes)[number]['name'];

const ITEM_SIZE = 100;
const GAP = 12;
const NON_SELECTED_SCALE = 0.6;
const STEP = ITEM_SIZE + GAP;
const SPACER = (SCREEN_WIDTH - ITEM_SIZE) / 2;

interface CarSelectorProps {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CarSelector = ({ isVisible, setIsVisible }: CarSelectorProps) => {
  const [selected, setSelected] = useState<CarName>(
    CAR_TYPE_STRINGS.carType.sedan,
  );
  const [transmission, setTransmission] = useState<string>(
    CAR_TYPE_STRINGS.carType.automatic,
  );
  const listRef = useRef<RNFlatList>(null);

  const onScrollEnd = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const index = Math.round(e.nativeEvent.contentOffset.x / STEP);
      setSelected(CarTypes[index]?.name);
    },
    [],
  );

  const scrollTo = (index: number) =>
    listRef.current?.scrollToOffset({ offset: index * STEP, animated: true });

  const renderItem = ({
    item,
    index,
  }: {
    item: (typeof CarTypes)[number];
    index: number;
  }) => {
    const isPicked = item.name === selected;
    const iconSize = isPicked ? ITEM_SIZE : ITEM_SIZE * NON_SELECTED_SCALE;
    const color = isPicked ? COLORS.white : COLORS.disabled;
    const labelSty = isPicked ? styles.labelPicked : styles.label;

    const topShift = isPicked ? 0 : 20;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => {
          setSelected(item.name);
          scrollTo(index);
        }}
      >
        <View style={styles.item}>
          <View style={{ marginTop: topShift }}>
            <item.Icon size={iconSize} color={color} />
          </View>
          <Text style={labelSty}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <CustomModal visible={isVisible} onClose={() => setIsVisible(false)}>
      <CustomText
        color={COLORS.white}
        weight="medium"
        variant="h3"
        style={styles.heading}
        align="center"
      >
        {CAR_TYPE_STRINGS.carType.selectCarType}
      </CustomText>
      <View>
        <FlatList
          ref={listRef}
          data={CarTypes}
          horizontal
          showsHorizontalScrollIndicator={false}
          decelerationRate="fast"
          bounces={false}
          overScrollMode="never"
          contentContainerStyle={{
            paddingHorizontal: SPACER,
            flexDirection: 'row',
            alignItems: 'center',
            gap: 30,
          }}
          onMomentumScrollEnd={onScrollEnd}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
          keyExtractor={item => item.name}
          getItemLayout={(_, i) => ({
            length: STEP,
            offset: STEP * i,
            index: i,
          })}
        />
      </View>
      <View style={styles.buttons}>
        <CustomButton
          variant={
            transmission == CAR_TYPE_STRINGS.carType.automatic
              ? 'primary'
              : 'outline'
          }
          onPress={() => {
            setTransmission(CAR_TYPE_STRINGS.carType.automatic);
          }}
          style={styles.button}
        >
          {CAR_TYPE_STRINGS.carType.automatic}
        </CustomButton>
        <CustomButton
          variant={
            transmission == CAR_TYPE_STRINGS.carType.manual
              ? 'primary'
              : 'outline'
          }
          onPress={() => {
            setTransmission(CAR_TYPE_STRINGS.carType.manual);
          }}
          style={styles.button}
        >
          {CAR_TYPE_STRINGS.carType.manual}
        </CustomButton>
      </View>
      <View style={styles.addButton}>
        <CustomButton>{CAR_TYPE_STRINGS.carType.add}</CustomButton>
      </View>
    </CustomModal>
  );
};

export default CarSelector;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    padding: 5,
    backgroundColor: COLORS.disabled,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    top: -10,
    right: -10,
  },
  heading: {
    marginBottom: 10,
  },
  wrapper: {
    alignSelf: 'center',
    backgroundColor: COLORS.backgroundTertiary,
    width: SCREEN_WIDTH * 0.9,
    padding: 20,
    borderRadius: 8,
    gap: 10,
  },

  itemsContainer: {},
  item: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    marginTop: 6,
    fontSize: 14,
    color: COLORS.disabled,
  },
  labelPicked: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.white,
  },
  buttons: {
    flexDirection: 'row',
    gap: 15,
    marginVertical: 24,
  },
  button: {
    borderRadius: 50,
    paddingVertical: 7,
  },
  addButton: {
    width: '50%',
    alignSelf: 'center',
  },
});
