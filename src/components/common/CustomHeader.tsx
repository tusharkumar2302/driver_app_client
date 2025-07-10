import { StyleSheet, View } from 'react-native';
import React from 'react';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { GlobalStyles } from '../../styles/globalStyles';
import { CustomText } from './CustomText';
import { COLORS } from '../../constants/colors';

interface CustomHeaderProps {
  text: string;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ text }) => {
  return (
    <View style={GlobalStyles.header2}>
      <ArrowRight width={24} height={24} />
      <CustomText color={COLORS.white} variant="h3" weight="medium">
        {text}
      </CustomText>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
