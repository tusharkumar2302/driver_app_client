import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomTabBar from '../components/common/CustomTabBar';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={} />
      <Tab.Screen name="Account" component={} />
      <Tab.Screen name="History" component={} />
      <Tab.Screen name="Profile" component={} />
    </Tab.Navigator>
  );
}
