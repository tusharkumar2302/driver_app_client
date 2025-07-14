import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import CustomMap from '../../components/common/CustomMap';
import CustomBottomSheet from '../../components/common/CustomBottomSheet';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../constants/dimensions';
import { COLORS } from '../../constants/colors';
import CustomHeader from '../../components/common/CustomHeader';
import { PAYMENT_STRINGS } from '../../constants/paymentStrings';
import { CustomButton } from '../../components/common/CustomButton';
import { CustomText } from '../../components/common/CustomText';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import Cash from '../../assets/images/icons/Cash';
import UPI from '../../assets/images/icons/UPI';
import Card from '../../assets/images/icons/Card';
import CardDetailModal from '../../components/CardDetailModal';

const PaymentMode = () => {
  const bottomSheetRef = useRef<any>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const [selectedMethod, setSelectedMethod] = useState<string>(''); // cash, upi, card, saved

  useEffect(() => {
    bottomSheetRef.current?.open();
  }, []);

  const renderMethodCard = (Icon: any, label: string, methodKey: string) => {
    const isSelected = selectedMethod === methodKey;
    return (
      <Pressable
        onPress={() => {
          setSelectedMethod(methodKey);
          if (label == PAYMENT_STRINGS.methods.card) {
            setVisible(true);
          }
        }}
        style={[
          styles.methodCardContainer,
          isSelected && {
            borderWidth: 1,
            borderColor: COLORS.success,
          },
        ]}
      >
        <Icon />
        <CustomText
          variant="h3"
          color={isSelected ? COLORS.success : COLORS.white}
        >
          {label}
        </CustomText>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <CardDetailModal visible={visible} setVisible={setVisible} />
      <CustomMap />
      <CustomBottomSheet
        ref={bottomSheetRef}
        height={SCREEN_HEIGHT * 0.629}
        backgroundColor={COLORS.backgroundPrimary}
      >
        <CustomHeader text={PAYMENT_STRINGS.title} />
        <ScrollView contentContainerStyle={styles.methodContainer}>
          <CustomText color={COLORS.white}>
            {PAYMENT_STRINGS.subtitle}
          </CustomText>

          {renderMethodCard(Cash, PAYMENT_STRINGS.methods.cash, 'cash')}
          {renderMethodCard(UPI, PAYMENT_STRINGS.methods.upi, 'upi')}
          {renderMethodCard(Card, PAYMENT_STRINGS.methods.card, 'card')}

          <View style={{ gap: 10 }}>
            <CustomText color={COLORS.disabled}>
              {PAYMENT_STRINGS.savedTitle}
            </CustomText>
            <Pressable
              onPress={() => setSelectedMethod('saved')}
              style={[
                styles.methodCardContainer,
                selectedMethod === 'saved' && {
                  borderWidth: 1,
                  borderColor: COLORS.success,
                },
              ]}
            >
              <Card />
              <View>
                <CustomText
                  color={
                    selectedMethod === 'saved' ? COLORS.success : COLORS.white
                  }
                >
                  SBI Visa Card
                </CustomText>
                <CustomText variant="caption" color={COLORS.disabled}>
                  {'1234567807837873'
                    .replace(/^.{8}/, '**** **** ')
                    .replace(/(\d{4})(\d{4})$/, '$1 $2')}
                </CustomText>
              </View>
            </Pressable>
          </View>
        </ScrollView>

        <View style={styles.continueContainer}>
          <CustomButton>
            <CustomText variant="h3" weight="bold">
              {RIDE_STRINGS.booking.continue}
            </CustomText>
          </CustomButton>
        </View>
      </CustomBottomSheet>
    </View>
  );
};

export default PaymentMode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  methodContainer: {
    flexDirection: 'column',
    gap: 10,
    backgroundColor: COLORS.backgroundSecondary,
    padding: 15,
    borderRadius: 8,
    marginTop: 25,
  },
  methodCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.backgroundPrimary,
    paddingHorizontal: 15,
    borderRadius: 8,
    paddingVertical: 18,
  },
  continueContainer: {
    width: SCREEN_WIDTH,
    position: 'absolute',
    bottom: 0,
    left: -10,
    right: 0,
    padding: 16,
    paddingHorizontal: 12,
    backgroundColor: COLORS.backgroundSecondary,
  },
});
