import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import Email from '../../../assets/images/icons/Email';
import Eye from '../../../assets/images/icons/Eye';
import EyeClosed from '../../../assets/images/icons/EyeClosed';
import Lock from '../../../assets/images/icons/Lock';
import { CustomButton } from '../../../components/common/CustomButton';
import { CustomInput } from '../../../components/common/CustomInput';
import { CustomText } from '../../../components/common/CustomText';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { COLORS } from '../../../constants/colors';
import { SCREEN_WIDTH } from '../../../constants/dimensions';
import { login_img } from '../../../constants/images';
import AuthLayout from '../../../layouts/AuthLayout';
import { GlobalStyles } from '../../../styles/globalStyles';
import { navigate, resetAndNavigate } from '../../../utils/NavigationUtil';

const LoginScreen = () => {
  const [visible, setVisible] = useState<boolean>(true);
  const customHeader = (
    <View style={GlobalStyles.header}>
      <ArrowRight width={28} height={28} />
      <CustomText color={COLORS.white} variant="h2" weight="bold">
        {AUTH_STRINGS.login.title}
      </CustomText>
    </View>
  );

  const customFooter = (
    <View style={styles.footer}>
      <CustomText color={COLORS.disabled}>
        {AUTH_STRINGS.login.noAccount}
      </CustomText>
      <Pressable onPress={() => resetAndNavigate('SignUp')}>
        <CustomText color={COLORS.white} style={styles.signUpText}>
          {AUTH_STRINGS.signup.signUp}
        </CustomText>
      </Pressable>
    </View>
  );
  return (
    <AuthLayout header={customHeader} footer={customFooter}>
      <View>
        <View style={styles.imageContainer}>
          <Image source={login_img} style={styles.loginImage} />
        </View>
        <View style={styles.inputContainer}>
          <CustomInput
            leftIcon={<Email width={16} height={16} />}
            label={AUTH_STRINGS.login.enterEmail}
            placeholder={AUTH_STRINGS.login.placeholder}
          />
          <CustomInput
            leftIcon={<Lock color={COLORS.disabled} width={18} height={18} />}
            rightIcon={
              <Pressable
                onPress={() => {
                  setVisible(prev => !prev);
                }}
              >
                {!visible ? (
                  <Eye color={COLORS.disabled} width={18} height={18} />
                ) : (
                  <EyeClosed color={COLORS.disabled} width={18} height={18} />
                )}
              </Pressable>
            }
            secureTextEntry={visible}
            label={AUTH_STRINGS.login.enterPassword}
            placeholder={AUTH_STRINGS.login.placeholder}
          />
          <Pressable onPress={() => navigate('ForgetPassword1')}>
            <CustomText align="right" color={COLORS.white}>
              {AUTH_STRINGS.forgotPassword.title} ?
            </CustomText>
          </Pressable>
        </View>
        <View style={styles.button}>
          <CustomButton>{AUTH_STRINGS.login.login}</CustomButton>
        </View>
      </View>
    </AuthLayout>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50,
  },
  loginImage: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_WIDTH * 0.3,
    resizeMode: 'contain',
  },
  inputContainer: {
    marginTop: 50,
    flexDirection: 'column',
    gap: 16,
  },
  button: {
    marginTop: 44,
    marginBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginLeft: 4,
  },
});
