import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/common/CustomTabBar';
import Home from '../screens/ride flow/Home';
import Booking from '../screens/bookings/Booking';
import Account from '../screens/account/Account';
import Support from '../screens/support/Support';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="History" component={Booking} />
      <Tab.Screen name="Support" component={Support} />
    </Tab.Navigator>
  );
}
