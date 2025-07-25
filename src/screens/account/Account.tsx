import React from 'react';
import { StyleSheet, View } from 'react-native';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import Share from '../../assets/images/icons/Share';
import { CustomInput } from '../../components/common/CustomInput';
import { CustomText } from '../../components/common/CustomText';
import { COLORS } from '../../constants/colors';
import { PROFILE_STRINGS } from '../../constants/profileStrings';
import { GlobalStyles } from '../../styles/globalStyles';
import { SafeAreaView } from 'react-native-safe-area-context';

const Account = () => {
  return (
    <SafeAreaView style={GlobalStyles.baseContainer}>
      <View style={[GlobalStyles.header, styles.headerRow]}>
        <ArrowRight width={28} height={28} />
        <CustomText
          color={COLORS.white}
          variant="h2"
          weight="bold"
          style={styles.headerTitle}
        >
          {PROFILE_STRINGS.editProfile.title}
        </CustomText>
        <View style={styles.shareContainer}>
          <Share width={24} height={20} />
          <CustomText
            color={COLORS.white}
            variant="body"
            weight="regular"
            style={styles.shareText}
          >
            {PROFILE_STRINGS.editProfile.share}
          </CustomText>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <CustomInput
          label={PROFILE_STRINGS.editProfile.name}
          placeholder={PROFILE_STRINGS.editProfile.namePlaceHolder}
        />
        <CustomInput
          label={PROFILE_STRINGS.editProfile.email}
          placeholder={PROFILE_STRINGS.editProfile.emailPlaceholder}
        />
        <CustomInput
          label={PROFILE_STRINGS.editProfile.phone}
          placeholder={PROFILE_STRINGS.editProfile.phonePlaceholder}
        />
      </View>
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'left',
  },
  shareContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  shareText: {
    marginLeft: 6,
  },
  inputContainer: {
    marginTop: 32,
    paddingHorizontal: 10,
    gap: 16,
  },
});
