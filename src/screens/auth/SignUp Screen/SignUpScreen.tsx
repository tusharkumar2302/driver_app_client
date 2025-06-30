import { Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { CustomText } from '../../../components/common/CustomText';
import { COLORS } from '../../../constants/colors';
import ArrowRight from '../../../assets/images/icons/ArrowRight';
import { GlobalStyles } from '../../../styles/globalStyles';
import { CustomInput } from '../../../components/common/CustomInput';
import User from '../../../assets/images/icons/User';
import Email from '../../../assets/images/icons/Email';
import Lock from '../../../assets/images/icons/Lock';
import EyeClosed from '../../../assets/images/icons/EyeClosed';
import Eye from '../../../assets/images/icons/Eye';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { CustomButton } from '../../../components/common/CustomButton';

const SignUpScreen = () => {
  const [visible, setVisible] = useState<boolean>(true);
  return (
    <View>
      <View style={GlobalStyles.header}>
        <ArrowRight width={28} height={28} />
        <CustomText color={COLORS.white} variant="h2" weight="bold">
          {AUTH_STRINGS.signup.title}
        </CustomText>
      </View>
      <View style={signUpStyles.inputContainer}>
        <CustomInput
          leftIcon={<User width={18} height={18} />}
          label={AUTH_STRINGS.signup.enterName}
          placeholder={AUTH_STRINGS.login.placeholder}
        />
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
        <CustomInput
          leftIcon={<Lock color={COLORS.disabled} width={18} height={18} />}
          label={AUTH_STRINGS.signup.confirmPassword}
          placeholder={AUTH_STRINGS.login.placeholder}
          secureTextEntry={true}
        />
        <CustomText align="right" color={COLORS.white}>
          {AUTH_STRINGS.forgotPassword.title} ?
        </CustomText>
      </View>
      <View style={signUpStyles.button}>
        <CustomButton>{AUTH_STRINGS.signup.signUp}</CustomButton>
      </View>
    </View>
  );
};

export default SignUpScreen;

export const signUpStyles = StyleSheet.create({
  inputContainer: {
    marginTop: 50,
    flexDirection: 'column',
    gap: 16,
  },
  button: {
    marginTop: 44,
    marginBottom: 10,
  },
});
