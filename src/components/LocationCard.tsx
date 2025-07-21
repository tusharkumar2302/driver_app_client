import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CustomText } from './common/CustomText';
import ChevronLeft from '../assets/images/icons/ChevronLeft';
import { COLORS } from '../constants/colors';
import { SCREEN_WIDTH } from '../constants/dimensions';

interface LocationCardProps {
  title: string;
  address: string;
}

const LocationCard = ({ title, address }: LocationCardProps) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.textContainer}>
        <CustomText variant="caption" color={COLORS.disabled}>
          {title}
        </CustomText>
        <CustomText color={COLORS.white}>{address}</CustomText>
      </View>
      <View>
        <Pressable style={styles.button}>
          <ChevronLeft height={12} width={12} />
        </Pressable>
      </View>
    </View>
  );
};

export default LocationCard;

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.backgroundTertiary,
    padding: 15,
    borderRadius: 8,
  },
  textContainer: {
    flexDirection: 'column',
    gap: 7,
    width: SCREEN_WIDTH * 0.65,
  },
  button: {
    backgroundColor: COLORS.backgroundSecondary,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});
