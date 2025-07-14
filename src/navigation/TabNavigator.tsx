import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/common/CustomTabBar';
import Account from '../screens/account/Account';
import Booking from '../screens/bookings/Booking';
import Home from '../screens/rideFlow/Home';
import Support from '../screens/support/Support';
import BookingNavigator from './BookingNavigator';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="History" component={BookingNavigator} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
}
