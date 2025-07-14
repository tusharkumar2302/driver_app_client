import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { GlobalStyles } from '../../styles/globalStyles';
import { CustomText } from './CustomText';
import { COLORS } from '../../constants/colors';
import { goBack } from '../../utils/NavigationUtil';

interface CustomHeaderProps {
  text: string;
  align?: 'center' | 'left' | 'right';
}

// Alignment is to be done
const CustomHeader: React.FC<CustomHeaderProps> = ({
  text,
  align = 'center',
}) => {
  return (
    <View style={GlobalStyles.header2}>
      <Pressable
        onPress={() => {
          goBack();
        }}
      >
        <ArrowRight width={24} height={24} />
      </Pressable>
      <CustomText color={COLORS.white} variant="h3" weight="medium">
        {text}
      </CustomText>
      <View style={{ width: 24 }} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({});
