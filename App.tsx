import React, { useEffect, useState } from 'react';
import { AuthProvider } from './src/context/AuthContext';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/auth/Splash Screen/SplashScreen';
import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from './src/constants/colors';
import Checkout from './src/screens/rideFlow/Checkout';
import PickupLocation from './src/screens/rideFlow/PickupLocation';
import Slot from './src/screens/rideFlow/Slot';
import BookingSuccess from './src/components/models/BookingSuccess';
import SomethingWentWrong from './src/components/models/SomethingWentWrong';
import ThanksForContacting from './src/components/models/ThanksForContacting';
import BookingFailed from './src/components/models/BookingFailed';
import ConfirmCancellation from './src/components/models/ConfirmCancellation';
import Report from './src/screens/rideFlow/Report';
import Review from './src/screens/rideFlow/Review';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <AuthProvider>
        {showSplash ? <SplashScreen /> : <AppNavigator />}
      </AuthProvider> */}
      <Review />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
    // borderWidth: 2,
    // borderColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 50,
  },
});
