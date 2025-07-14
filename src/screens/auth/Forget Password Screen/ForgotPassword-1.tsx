import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomText } from '../../../components/common/CustomText';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { COLORS } from '../../../constants/colors';
import { ForgotPassword1_img } from '../../../constants/images';
import { CustomInput } from '../../../components/common/CustomInput';
import { CustomButton } from '../../../components/common/CustomButton';
import { SCREEN_HEIGHT } from '../../../constants/dimensions';
import { navigate } from '../../../utils/NavigationUtil';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../../components/common/CustomHeader';
const ForgotPassword1 = () => {
  return (
    <SafeAreaView style={ForgotPassword1Styles.container}>
      <CustomHeader align="left" text={AUTH_STRINGS.forgotPassword.title} />
      <View>
        <Image
          source={ForgotPassword1_img}
          style={ForgotPassword1Styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={ForgotPassword1Styles.content}>
        <CustomText color={COLORS.disabled}>
          {AUTH_STRINGS.forgotPassword.subtitle}
        </CustomText>
        <CustomInput
          label={AUTH_STRINGS.login.enterEmail}
          placeholder={AUTH_STRINGS.login.placeholder}
        />
        <CustomButton
          onPress={() => {
            navigate('ForgetPassword2');
          }}
          style={{ marginHorizontal: 10, marginTop: 22 }}
        >
          {AUTH_STRINGS.forgotPassword.sentOtp}
        </CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword1;

const ForgotPassword1Styles = StyleSheet.create({
  container: {
    gap: SCREEN_HEIGHT * 0.075,
    backgroundColor: COLORS.backgroundPrimary,
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  content: {
    flexDirection: 'column',
    gap: 40,
  },
  image: {
    height: SCREEN_HEIGHT * 0.4,
    width: '100%',
  },
});
