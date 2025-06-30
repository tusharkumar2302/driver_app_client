import { View, Image, StyleSheet } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import { CustomText } from '../../../components/common/CustomText';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { GlobalStyles } from '../../../styles/globalStyles';
import { COLORS } from '../../../constants/colors';
import { ForgotPassword2_img } from '../../../constants/images';
import { CustomButton } from '../../../components/common/CustomButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../../constants/dimensions';
import OTP from '../../../components/OTP';

const COUNTDOWN = 60;

const ForgotPassword2 = () => {
  const [otp, setOtp] = useState<string>('');
  const [time, setTime] = useState<number>(COUNTDOWN);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(prev => {
        if (prev <= 1) {
          clearInterval(timerRef.current as NodeJS.Timeout);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current as NodeJS.Timeout);
  }, []);

  return (
    <View style={ForgotPassword1Styles.container}>
      <View style={GlobalStyles.header}>
        <ArrowRight width={28} height={28} />
        <CustomText color={COLORS.white} variant="h2" weight="bold">
          {AUTH_STRINGS.forgotPassword.otp}
        </CustomText>
      </View>
      <View>
        <Image
          source={ForgotPassword2_img}
          style={ForgotPassword1Styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={ForgotPassword1Styles.content}>
        <View style={[GlobalStyles.row, { justifyContent: 'center' }]}>
          <CustomText
            color={COLORS.disabled}
            style={{ width: SCREEN_WIDTH * 0.6 }}
            align="center"
          >
            {AUTH_STRINGS.forgotPassword.otpMessage}
          </CustomText>
        </View>
        <OTP otp={otp} setOtp={setOtp} />
        <CustomText color={COLORS.disabled} align="center">
          {AUTH_STRINGS.forgotPassword.resend}
          <CustomText color={COLORS.white} variant="body">
            {time} sec
          </CustomText>
        </CustomText>
        <CustomButton style={{ marginHorizontal: 10, marginTop: 22 }}>
          {AUTH_STRINGS.forgotPassword.verify}
        </CustomButton>
      </View>
    </View>
  );
};

export default ForgotPassword2;

const ForgotPassword1Styles = StyleSheet.create({
  container: {
    gap: SCREEN_HEIGHT * 0.075,
  },
  content: {
    flexDirection: 'column',
    gap: 40,
  },
  image: {
    alignSelf: 'center',
    height: SCREEN_HEIGHT * 0.3,
    width: '60%',
  },
});
