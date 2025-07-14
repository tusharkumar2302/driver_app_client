import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CustomModal } from './common/CustomModal';
import { CustomText } from './common/CustomText';
import { COLORS } from '../constants/colors';
import { GlobalStyles } from '../styles/globalStyles';
import { CustomInput } from './common/CustomInput';
import Card from '../assets/images/icons/Card';
import { CustomButton } from './common/CustomButton';

interface CardDetailModalProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardDetailModal = ({ visible, setVisible }: CardDetailModalProps) => {
  return (
    <CustomModal visible={visible} onClose={() => setVisible(false)}>
      <CustomText color={COLORS.white} weight="bold" variant="h2">
        Add New Card
      </CustomText>

      <View style={GlobalStyles.line} />

      <View style={{ gap: 16 }}>
        <CustomInput
          borderColor={COLORS.white}
          label="Card Number"
          leftIcon={<Card />}
          keyboardType="numeric"
          placeholder="0000 0000 0000 0000"
        />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <CustomInput
              borderColor={COLORS.white}
              label="Expiry Date"
              keyboardType="numeric"
              placeholder="MM/YY"
              textAlign="center"
            />
          </View>
          <View style={styles.halfInput}>
            <CustomInput
              borderColor={COLORS.white}
              label="CVV"
              keyboardType="numeric"
              placeholder="CVV"
              textAlign="center"
            />
          </View>
        </View>
      </View>

      <CustomText
        color={COLORS.success}
        weight="bold"
        variant="h3"
        style={{ marginTop: 20 }}
      >
        Terms and Conditions.
      </CustomText>

      <View style={styles.row}>
        <CustomButton
          style={{ flex: 1 }}
          variant="outline"
          onPress={() => setVisible(false)}
        >
          Cancel
        </CustomButton>
        <CustomButton style={{ flex: 1 }}>Save</CustomButton>
      </View>
    </CustomModal>
  );
};

export default CardDetailModal;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    marginTop: 16,
  },
  halfInput: {
    flex: 1,
  },
});
