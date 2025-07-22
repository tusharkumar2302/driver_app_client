import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../styles/globalStyles';
import CustomHeader from '../../components/common/CustomHeader';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import DriverCard from '../../components/DriverCard';

const SavedDrivers = () => {
  return (
    <SafeAreaView style={[GlobalStyles.baseContainer, { paddingTop: 10 }]}>
      <CustomHeader text={RIDE_STRINGS.savedDriver.title} />
      <DriverCard
        name="Laxman Kumar"
        imgUrl="url"
        phoneNumber="9876543210"
        rating={4.5}
      />
    </SafeAreaView>
  );
};

export default SavedDrivers;

const styles = StyleSheet.create({});
