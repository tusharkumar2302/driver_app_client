import { View, SafeAreaView, StatusBar, Image } from 'react-native';
import React from 'react';
import { GlobalStyles } from '../../../styles/globalStyles';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { CustomText } from '../../../components/common/CustomText';
import { CustomInput } from '../../../components/common/CustomInput';
import { CustomButton } from '../../../components/common/CustomButton';

const LoginScreen = () => {
  return (
    <>
      <SafeAreaView style={GlobalStyles.baseContainer} />
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {/* {Main Container} */}
      <View style={}>
        <View>
          <Image source={} style={GlobalStyles.img} />
          <CustomText>{AUTH_STRINGS.login.title}</CustomText>
        </View>
        <Image source={} style={GlobalStyles.img} />
        <CustomText>{AUTH_STRINGS.login.enterEmail}</CustomText>
        <CustomInput />
        <CustomText>{AUTH_STRINGS.login.enterPassword}</CustomText>
        <CustomInput />
        <CustomText>{AUTH_STRINGS.login.forgotPassword}</CustomText>
        <CustomButton />
      </View>
    </>
  );
};

export default LoginScreen;
