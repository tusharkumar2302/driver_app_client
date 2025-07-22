import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { CustomButton } from './common/CustomButton';
import { RIDE_STRINGS } from '../constants/rideStrings';
import ChevronDown from '../assets/images/icons/ChevronDown';

interface DriverCardProps {
  imgUrl: string;
  name: string;
  phoneNumber: string;
  rating: number;
}

const DriverCard = ({ imgUrl, name, phoneNumber, rating }: DriverCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.topRow}>
        <Image source={{ uri: imgUrl }} style={styles.avatar} />
        <View style={styles.infoSection}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phoneNumber}</Text>
          <View style={styles.ratingRow}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingText}>{rating}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <CustomButton
          variant="text"
          rightIcon={<ChevronDown />}
          //   style={styles.moreBtn}
        >
          {RIDE_STRINGS.home.moreDetails}
        </CustomButton>
        <CustomButton size='sm' >
          {RIDE_STRINGS.bookingDetail.rebook}
        </CustomButton>
      </View>
    </View>
  );
};

export default DriverCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#181818',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#ececec',
    marginRight: 16,
  },
  infoSection: {
    flex: 1,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  phone: {
    color: '#bbb',
    fontSize: 14,
    marginBottom: 4,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingBox: {
    backgroundColor: '#2bb05a',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  ratingText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    justifyContent: 'space-between',
  },
 
});
