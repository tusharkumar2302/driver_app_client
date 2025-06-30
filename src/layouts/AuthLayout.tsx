import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import TextDivider from '../components/Divider';
import { COLORS } from '../constants/colors';
import { CustomButton } from '../components/common/CustomButton';
import { SCREEN_WIDTH } from '../constants/dimensions';
import Google from '../assets/images/icons/Google';
import Facebook from '../assets/images/icons/Facebook';

const AuthLayout = ({ header, footer, children }: any) => {
  return (
    <View>
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
      <View>
        {footer}
      </View>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
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
