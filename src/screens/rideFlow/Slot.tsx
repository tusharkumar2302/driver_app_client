import React, { useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import CustomMap from '../../components/common/CustomMap';
import { CustomText } from '../../components/common/CustomText';
import { COLORS } from '../../constants/colors';
import { SCREEN_HEIGHT } from '../../constants/dimensions';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { CustomButton } from '../../components/common/CustomButton';
import DateTimePicker, {
  DateType,
  useDefaultStyles,
} from 'react-native-ui-datepicker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const Slot = () => {
  const bottomSheetRef = useRef<any>(null);
  const defaultStyles = useDefaultStyles();
  const [startDate, setStartDate] = useState<DateType>(new Date(2025, 6, 6));
  const [endDate, setEndDate] = useState<DateType>(new Date(2025, 6, 15));
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View style={styles.container}>
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.705}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <View style={styles.header}>
          <ArrowRight width={30} height={30} />
          <CustomText variant="h3" color={COLORS.white}>
            {RIDE_STRINGS.booking.selectSlot}
          </CustomText>
          <CustomText variant="h3" color={COLORS.textDisabled}>
            {}
          </CustomText>
        </View>

        <View style={styles.dateTime}>
          <CustomText variant="caption" color={COLORS.white}>
            06 May, 6:30 PM - 15 May, 6:30 PM
          </CustomText>
        </View>

        {/* {Date Picker} */}
        <View style={styles.datePickerContainer}>
          <DateTimePicker
            mode="range"
            startDate={startDate}
            endDate={endDate}
            onChange={({ startDate, endDate }) => {
              setStartDate(startDate);
              setEndDate(endDate);
            }}
            styles={defaultStyles}
          />
        </View>

        <View style={styles.timeContainer}>
          <Pressable style={styles.startTime} onPress={showDatePicker}>
            <CustomText variant="body" color={COLORS.textDisabled}>
              {RIDE_STRINGS.booking.startTime}
            </CustomText>
          </Pressable>
          <Pressable style={styles.endTime} onPress={showDatePicker}>
            <CustomText variant="body" color={COLORS.textDisabled}>
              {RIDE_STRINGS.booking.endTime}
            </CustomText>
          </Pressable>
        </View>
        
        {/* {Time Picker} */}
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <View style={styles.buttonWrapper}>
          <CustomButton>{RIDE_STRINGS.booking.continue}</CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default Slot;

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
  datePickerContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
  },
  dateTime: {
    alignItems: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    gap: 10,
  },
  startTime: {
    flex: 1,
    backgroundColor: COLORS.backgroundSecondary,
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
  },
  endTime: {
    flex: 1,
    backgroundColor: COLORS.backgroundSecondary,
    alignItems: 'center',
    padding: 20,
    borderRadius: 8,
  },
  buttonWrapper: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
