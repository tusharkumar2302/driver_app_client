import { useRef } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import Lock from '../../../assets/images/icons/Lock';
import CustomBottomSheet from '../../../components/common/CustomBottomSheet';
import { CustomButton } from '../../../components/common/CustomButton';
import { CustomInput } from '../../../components/common/CustomInput';
import { CustomText } from '../../../components/common/CustomText';
import { AUTH_STRINGS } from '../../../constants/authStrings';
import { COLORS } from '../../../constants/colors';
import { SCREEN_HEIGHT } from '../../../constants/dimensions';
import { ForgotPassword2_img, success_img } from '../../../constants/images';
import { navigate } from '../../../utils/NavigationUtil';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../../components/common/CustomHeader';

const CreateNewPassword = () => {
  const bottomSheetRef = useRef<any>(null);
  return (
    <SafeAreaView style={ForgotPassword1Styles.container}>
      <CustomHeader text={AUTH_STRINGS.resetPassword.title} />
      <View>
        <Image
          source={ForgotPassword2_img}
          style={ForgotPassword1Styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={ForgotPassword1Styles.content}>
        <CustomInput
          leftIcon={<Lock color={COLORS.disabled} width={18} height={18} />}
          label={AUTH_STRINGS.resetPassword.enterNewPassword}
          placeholder={AUTH_STRINGS.login.placeholder}
          secureTextEntry={true}
        />
        <CustomInput
          leftIcon={<Lock color={COLORS.disabled} width={18} height={18} />}
          label={AUTH_STRINGS.resetPassword.confirmNewPassword}
          placeholder={AUTH_STRINGS.login.placeholder}
          secureTextEntry={true}
        />
        <CustomButton
          onPress={() => bottomSheetRef.current.open()}
          style={ForgotPassword1Styles.continueButton}
        >
          {AUTH_STRINGS.resetPassword.continue}
        </CustomButton>
      </View>
      {/* Modal */}
      <CustomBottomSheet ref={bottomSheetRef} height={SCREEN_HEIGHT * 0.55}>
        <Image source={success_img} style={ForgotPassword1Styles.successImg} />
        <CustomText
          variant="h2"
          weight="bold"
          style={ForgotPassword1Styles.successTitle}
        >
          {AUTH_STRINGS.resetPassword.successTitle}
        </CustomText>
        <CustomText
          variant="body"
          weight="regular"
          style={ForgotPassword1Styles.successMessage}
        >
          {AUTH_STRINGS.resetPassword.successMessage}
        </CustomText>
        <CustomButton
          onPress={() => {
            bottomSheetRef.current?.close();
            navigate('Login');
          }}
          style={ForgotPassword1Styles.backToLoginButton}
        >
          {AUTH_STRINGS.resetPassword.backToLogin}
        </CustomButton>
      </CustomBottomSheet>
    </SafeAreaView>
  );
};

export default CreateNewPassword;

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
    alignSelf: 'center',
    height: SCREEN_HEIGHT * 0.3,
    width: '60%',
  },
  continueButton: {
    marginHorizontal: 10,
    marginTop: 22,
  },
  successImg: {
    alignSelf: 'center',
    height: '27%',
    width: '40%',
    marginVertical: 40,
  },
  successTitle: {
    textAlign: 'center',
    color: COLORS.white,
    marginBottom: 10,
  },
  successMessage: {
    textAlign: 'center',
    marginBottom: 20,
    color: COLORS.textDisabled,
    width: '50%',
    alignSelf: 'center',
  },
  backToLoginButton: {
    marginHorizontal: 20,
    marginTop: 22,
  },
});
