import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
// Import your icons
import HistoryIcon from '../../assets/images/icons/History';
import HomeIcon from '../../assets/images/icons/Home';
import SupportIcon from '../../assets/images/icons/Support';
import UserIcon from '../../assets/images/icons/User';
import { navigate } from '../../utils/NavigationUtil';

const tabs = [
  { name: 'Home', route: 'HomeScreen' },
  { name: 'Account', route: 'AccountScreen' },
  { name: 'History', route: 'HistoryScreen' },
  { name: 'Support', route: 'SupportScreen' },
];

// Map tab names to icon components
const tabIcons: Record<string, React.ComponentType<{ color: string }>> = {
  Home: HomeIcon,
  Account: UserIcon,
  History: HistoryIcon,
  Support: SupportIcon,
};

export default function CustomTabBar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <View style={styles.container}>
      {tabs.map(tab => {
        const Icon = tabIcons[tab.name];
        const color = activeTab === tab.name ? '#FFF' : '#BDBDBD';
        return (
          <Pressable
            key={tab.name}
            onPress={() => {
              setActiveTab(tab.name);
              navigate(tab.name);
            }}
            style={styles.tabButton}
          >
            <Icon color={color} width={24} height={24} />
            <Text style={[styles.tabText, { color }]}>{tab.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#212121',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontSize: 12,
    marginTop: 2,
  },
});
