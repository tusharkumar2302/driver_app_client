import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Booking from '../screens/bookings/Booking';
import BookingDetails from '../screens/bookings/BookingDetails';
const Stack = createNativeStackNavigator();

export default function BookingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, animation: 'fade' }}
      initialRouteName="Booking"
    >
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="BookingDetail" component={BookingDetails} />
    </Stack.Navigator>
  );
}
