import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextDivider from '../components/Divider';
import { COLORS } from '../constants/colors';
import { CustomButton } from '../components/common/CustomButton';
import { SCREEN_WIDTH } from '../constants/dimensions';
import Google from '../assets/images/icons/Google';
import Facebook from '../assets/images/icons/Facebook';
import { SafeAreaView } from 'react-native-safe-area-context';

const AuthLayout = ({ header, footer, children }: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>{header}</View>
      <View>{children}</View>
      <View style={styles.divider}>
        <TextDivider
          label={`Or continue with social \n account`}
          textStyle={{ color: COLORS.disabled, textAlign: 'center' }}
        />
      </View>
      <View style={styles.socialButtons}>
        <CustomButton style={{ flex: 1 }} leftIcon={<Google />}>
          Google
        </CustomButton>
        <CustomButton style={{ flex: 1 }} leftIcon={<Facebook />}>
          Facebook
        </CustomButton>
      </View>
      <View style={{ paddingBottom: 50 }}>{footer}</View>
    </SafeAreaView>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.backgroundPrimary,
    paddingHorizontal: 10,
    paddingTop: 25,
  },
  divider: {
    marginVertical: 20,
  },
  socialButtons: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    marginVertical: 20,
  },
});
