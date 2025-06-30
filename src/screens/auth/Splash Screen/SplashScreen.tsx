import { View, Image } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../styles/globalStyles';
import { logo_img } from '../../../constants/images';

const SplashScreen = () => {
  return (
    <View style={GlobalStyles.container}>
      <Image source={logo_img} style={GlobalStyles.img} />
    </View>
  );
};

export default SplashScreen;
