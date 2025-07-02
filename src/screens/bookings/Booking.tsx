import { StyleSheet, View, FlatList } from 'react-native';
import React, { useState, useMemo } from 'react';
import { bookings } from '../../data/bookings';
import { CustomButton } from '../../components/common/CustomButton';
import { GlobalStyles } from '../../styles/globalStyles';
import { COLORS } from '../../constants/colors';
import BookingCard from '../../components/BookingCard';

const Booking = () => {
  const [type, setType] = useState<'Completed' | 'Upcoming'>('Completed');

  const upcomingBookings = useMemo(
    () =>
      bookings.filter(
        b => b.status === 'Allotted' || b.status === 'Not-Allotted',
      ),
    [],
  );

  const completedBookings = useMemo(
    () =>
      bookings.filter(
        b => b.status === 'Cancelled' || b.status === 'Completed',
      ),
    [],
  );

  const data = type === 'Completed' ? completedBookings : upcomingBookings;

  return (
    <View style={{ flex: 1, marginTop: 20 }}>
      <View style={[GlobalStyles.row, BookingStyles.triggerContainer]}>
        <CustomButton
          variant={type === 'Completed' ? 'primary' : 'text'}
          style={BookingStyles.trigger}
          onPress={() => setType('Completed')}
        >
          Completed
        </CustomButton>
        <CustomButton
          variant={type === 'Upcoming' ? 'primary' : 'text'}
          style={BookingStyles.trigger}
          onPress={() => setType('Upcoming')}
        >
          Upcoming
        </CustomButton>
      </View>

      {/* list */}
      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <BookingCard
            address={item.location.address}
            city={item.location.city}
            state={item.location.state}
            slot={item.slot}
            status={item.status}
            price={item.cost.total}
          />
        )}
        contentContainerStyle={{ padding: 12, gap: 20, paddingVertical: 32 }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Booking;

const BookingStyles = StyleSheet.create({
  triggerContainer: {
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundSecondary,
  },
  trigger: {
    flex: 1,
  },
});
