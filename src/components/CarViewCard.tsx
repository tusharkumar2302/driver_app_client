import { StyleSheet, View } from 'react-native';
import React, { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import { CustomText } from './common/CustomText';
import { COLORS } from '../constants/colors';

interface CarViewCardProps {
  Icon: ComponentType<SvgProps>;
  car: string;
  transmission: string;
  isSelected?: boolean;
}

const CarViewCard = ({
  Icon,
  car,
  transmission,
  isSelected = false,
}: CarViewCardProps) => {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.card}>
        <View>
          <Icon width={80} height={80} />
        </View>
        <View style={styles.textContainer}>
          <CustomText color={COLORS.white} variant="h3" weight="bold">
            {car}
          </CustomText>
          <CustomText color={COLORS.disabled} variant="caption">
            {transmission}
          </CustomText>
        </View>
      </View>
      {isSelected && (
        <CustomText color={COLORS.white} style={styles.selectedText}>
          Selected 
        </CustomText>
      )}
    </View>
  );
};

export default CarViewCard;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: COLORS.success,
    borderRadius: 8,
  },
  card: {
    flexDirection: 'row',
    gap: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  selectedText: {
    margin: 5,
  },
  textContainer: {
    flexDirection: 'column',
  },
});
