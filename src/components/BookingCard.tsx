import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { BookingCardTypes } from '../types/components';
import { CustomText } from './common/CustomText';
import { COLORS } from '../constants/colors';
import { dateFormatter, timeFormatter } from '../utils/formatters';
import { CustomButton } from './common/CustomButton';
import ChevronDown from '../assets/images/icons/ChevronDown';
import { GlobalStyles } from '../styles/globalStyles';

const BookingCard = ({
  address,
  city,
  state,
  slot,
  status,
  price,
}: BookingCardTypes) => {
  return (
    <View style={BookingCardStyles.container}>
      <View style={BookingCardStyles.row}>
        <View style={BookingCardStyles.content}>
          <View>
            <CustomText color={COLORS.white} variant="body">
              {address}
            </CustomText>
            <CustomText color={COLORS.disabled} variant="caption">
              {city}, {state}
            </CustomText>
          </View>
          <View>
            <CustomText color={COLORS.white} variant="body">
              {dateFormatter(slot)}
            </CustomText>
            <CustomText color={COLORS.disabled} variant="caption">
              {timeFormatter(slot)}
            </CustomText>
          </View>
        </View>
        <View style={BookingCardStyles.rebook}>
          <CustomText color={COLORS.white} weight="bold" align="center">
            ₹ {price}.00
          </CustomText>
          <CustomButton size="sm">Re-book</CustomButton>
        </View>
      </View>
      <View style={[GlobalStyles.line, { marginTop: 10 }]} />
      <View style={BookingCardStyles.row}>
        <CustomText color="red" style={BookingCardStyles.status}>
          {status}
        </CustomText>
        <CustomButton
          variant="text"
          rightIcon={<ChevronDown height={20} width={19} strokeWidth={1.2} />}
        >
          <CustomText color={COLORS.disabled}>More details</CustomText>
        </CustomButton>
      </View>
    </View>
  );
};

export default BookingCard;

export const BookingCardStyles = StyleSheet.create({
  container: {
    paddingTop: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundTertiary,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  content: {
    flexDirection: 'column',
    gap: 20,
  },
  rebook: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: COLORS.backgroundSecondary,
    padding: 10,
    borderRadius: 9,
  },
  status: {
    alignSelf: 'center',
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 50,
    paddingHorizontal: 28,
    paddingVertical: 4,
  },
});
