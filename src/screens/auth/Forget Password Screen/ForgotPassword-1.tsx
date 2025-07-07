import { Image, Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import { CustomText } from '../../../components/common/CustomText';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { GlobalStyles } from '../../../styles/globalStyles';
import { COLORS } from '../../../constants/colors';
import { ForgotPassword1_img } from '../../../constants/images';
import { CustomInput } from '../../../components/common/CustomInput';
import { CustomButton } from '../../../components/common/CustomButton';
import { SCREEN_HEIGHT } from '../../../constants/dimensions';
import { navigate } from '../../../utils/NavigationUtil';
const ForgotPassword1 = () => {
  return (
    <View style={ForgotPassword1Styles.container}>
      <View style={GlobalStyles.header}>
        <ArrowRight width={28} height={28} />
        <CustomText color={COLORS.white} variant="h2" weight="bold">
          {AUTH_STRINGS.forgotPassword.title}
        </CustomText>
      </View>
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
        <Pressable onPress={() => {navigate('ForgetPassword2')}}>
        <CustomButton style={{ marginHorizontal: 10, marginTop: 22 }}>
          {AUTH_STRINGS.forgotPassword.sentOtp}
        </CustomButton>
        </Pressable>
      </View>
    </View>
  );
};

export default ForgotPassword1;

const ForgotPassword1Styles = StyleSheet.create({
  container: {
    gap:SCREEN_HEIGHT*0.075
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
