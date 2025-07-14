import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomModal } from './common/CustomModal';
import { CustomText } from './common/CustomText';
import { COLORS } from '../constants/colors';
import { GlobalStyles } from '../styles/globalStyles';
import { CustomInput } from './common/CustomInput';
import Card from '../assets/images/icons/Card';
import { CustomButton } from './common/CustomButton';
import Secure from '../assets/images/icons/Secure';
import { PAYMENT_STRINGS } from '../constants/paymentStrings';

interface CardDetailModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardDetailModal = ({ visible, setVisible }: CardDetailModalProps) => {
  return (
    <CustomModal visible={visible} onClose={() => setVisible(false)}>
      <CustomText color={COLORS.white} weight="bold" variant="h2">
        {PAYMENT_STRINGS.addCard.title}
      </CustomText>

      <View style={[GlobalStyles.line, { marginVertical: 18 }]} />

      <View>
        <CustomInput
          borderColor={COLORS.white}
          label={PAYMENT_STRINGS.addCard.card_number}
          leftIcon={<Card />}
          keyboardType="numeric"
          placeholder="0000 0000 0000 0000"
        />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <CustomInput
              borderColor={COLORS.white}
              label={PAYMENT_STRINGS.addCard.expiry_date}
              keyboardType="numeric"
              placeholder="MM/YY"
              textAlign="center"
            />
          </View>
          <View style={styles.halfInput}>
            <CustomInput
              borderColor={COLORS.white}
              label={PAYMENT_STRINGS.addCard.cvv}
              keyboardType="numeric"
              placeholder={PAYMENT_STRINGS.addCard.cvv}
              textAlign="center"
            />
          </View>
        </View>
      </View>
      <CustomText variant="caption" color={COLORS.disabled} style={styles.row}>
        <Secure color={COLORS.disabled} /> {PAYMENT_STRINGS.addCard.secure}
      </CustomText>
      <CustomText
        variant="caption"
        style={{ marginVertical: 10 }}
        color={COLORS.disabled}
      >
        {PAYMENT_STRINGS.addCard.description}
      </CustomText>

      <CustomText color={COLORS.success} weight="bold" variant="body">
        {PAYMENT_STRINGS.addCard.terms}
      </CustomText>

      <View style={styles.row}>
        <CustomButton
          style={{ flex: 1 }}
          variant="outline"
          onPress={() => setVisible(false)}
        >
          {PAYMENT_STRINGS.addCard.cancel}
        </CustomButton>
        <CustomButton style={{ flex: 1 }}>
          {' '}
          {PAYMENT_STRINGS.addCard.save}
        </CustomButton>
      </View>
    </CustomModal>
  );
};

export default CardDetailModal;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  halfInput: {
    flex: 1,
  },
});
