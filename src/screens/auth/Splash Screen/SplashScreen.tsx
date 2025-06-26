import { View, Image } from 'react-native';
import React, { useEffect } from 'react';
import { resetAndNavigate } from '../../../utils/NavigationUtil';
import { GlobalStyles } from '../../../styles/globalStyles';

const SplashScreen = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      resetAndNavigate('Auth');
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={GlobalStyles.container}>
      <Image
        source={} // Need to add the logo
        style={GlobalStyles.img}
      />
    </View>
  );
};

export default SplashScreen;
