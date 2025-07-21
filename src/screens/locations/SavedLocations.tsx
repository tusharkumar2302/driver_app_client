import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomHeader from '../../components/common/CustomHeader';
import { RIDE_STRINGS } from '../../constants/rideStrings';
import { GlobalStyles } from '../../styles/globalStyles';
import LocationCard from '../../components/LocationCard';
import { locations } from '../../data/locations';

const SavedLocations = () => {
  return (
    <SafeAreaView style={[GlobalStyles.baseContainer, { paddingTop: 10 }]}>
      <CustomHeader text={RIDE_STRINGS.savedLocation.title} />
      <FlatList
        data={locations}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.cardContainer}
        renderItem={({ item }) => (
          <LocationCard title={item.title} address={item.address} />
        )}
        ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
      />
    </SafeAreaView>
  );
};

export default SavedLocations;

const styles = StyleSheet.create({
  cardContainer: {
    paddingTop: 20,
  },
});
