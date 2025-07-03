import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';
import LocationPin from '../../assets/images/icons/LocationPin';
import { screenHeight } from '../../utils/Constants';
import { COLORS } from '../../constants/colors';
import { GlobalStyles } from '../../styles/globalStyles';
import ArrowRight from '../../assets/images/icons/ArrowRight';
import { CustomText } from '../../components/common/CustomText';
import { CustomButton } from '../../components/common/CustomButton';
import { StatusColor } from '../../utils/helpers';
import StarFill from '../../assets/images/icons/StarFill';
import StarHollow from '../../assets/images/icons/StarHollow';
import Secure from '../../assets/images/icons/Secure';
import ChevronLeft from '../../assets/images/icons/ChevronLeft';

const lat = 28.6139;
const lng = 77.209;
const mapHeight = screenHeight * 0.3;

export default function BookingDetails() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ gap: 20, paddingBottom: screenHeight * 0.1 }}
    >
      {/* header */}
      <View style={GlobalStyles.header2}>
        <ArrowRight width={24} height={24} />
        <CustomText color={COLORS.white} variant="h3" weight="medium">
          Details
        </CustomText>
        <View style={{ width: 24 }} />
      </View>

      <View style={BookingDetailStyles.firstContainer}>
        {/* map  */}
        <View style={BookingDetailStyles.mapContainer}>
          <WebView
            originWhitelist={['*']}
            scrollEnabled={false}
            javaScriptEnabled
            domStorageEnabled
            style={BookingDetailStyles.webView}
            source={{
              html: `<!DOCTYPE html>
              <html>
                <head>
                  <meta name="viewport" content="initial-scale=1,maximum-scale=1"/>
                  <style>
                    html,body{margin:0;height:${mapHeight}px;width:100%;background:transparent;}
                    iframe{filter:grayscale(100%);border-radius:8px;}
                  </style>
                </head>
                <body>
                  <iframe
                    width="100%" height="${mapHeight}" frameborder="0" style="border:0"
                    src="https://www.google.com/maps?q=${lat},${lng}&z=15&output=embed"
                    allowfullscreen>
                  </iframe>
                </body>
              </html>`,
            }}
          />
        </View>

        <View style={BookingDetailStyles.row}>
          <View style={BookingDetailStyles.content}>
            <View>
              <CustomText color={COLORS.white} variant="body">
                Sector 18, Near DLF Cyber Hub
              </CustomText>
              <CustomText color={COLORS.disabled} variant="caption">
                Gurugram, Haryana
              </CustomText>
            </View>
            <View>
              <CustomText color={COLORS.white} variant="body">
                16 May 2025
              </CustomText>
              <CustomText color={COLORS.disabled} variant="caption">
                06:30 PM
              </CustomText>
            </View>
          </View>
          <View style={BookingDetailStyles.rebook}>
            <CustomText color={COLORS.white} weight="bold" align="center">
              ₹ 252.00
            </CustomText>
            <CustomButton
              style={BookingDetailStyles.status}
              variant="text"
              size="sm"
            >
              <CustomText color={StatusColor['Completed']}>
                Completed
              </CustomText>
            </CustomButton>
          </View>
        </View>
      </View>

      {/* Driver */}
      <View style={BookingDetailStyles.driverContainer}>
        <Image
          source={{ uri: 'https://randomuser.me/api/portraits/men/11.jpg' }}
          style={{
            // flex: 1,
            width: 50,
            height: 55,
            objectFit: 'fill',
            borderRadius: 8,
          }}
        />
        <View style={BookingDetailStyles.driverDetails}>
          <CustomText color={COLORS.white} variant="h3">
            Laxman Kumar
          </CustomText>
          <View style={[GlobalStyles.row, { gap: 6 }]}>
            <StarFill width={14} height={14} />
            <StarFill width={14} height={14} />
            <StarFill width={14} height={14} />
            <StarFill width={14} height={14} />
            <StarHollow width={14} height={14} />
          </View>
        </View>
      </View>

      {/* Fare */}
      <View style={BookingDetailStyles.boxContainer}>
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>Ride Charge</CustomText>
          <CustomText color={COLORS.disabled}>₹248.00</CustomText>
        </View>
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>Insurance</CustomText>
          <CustomText color={COLORS.disabled}>₹2.40</CustomText>
        </View>
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>Platform fee</CustomText>
          <CustomText color={COLORS.disabled}>₹1.60</CustomText>
        </View>
        <View style={[GlobalStyles.line, { borderStyle: 'dotted' }]} />
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled} variant="h3" weight="bold">
            <Secure color={COLORS.disabled} width={18} height={18} />
            {`  `}Total
          </CustomText>
          <CustomText color={COLORS.disabled} variant="h3" weight="bold">
            ₹252.00
          </CustomText>
        </View>
      </View>

      <CustomButton size="lg">
        <CustomText weight="medium" variant="h3">
          Re-book
        </CustomText>
      </CustomButton>

      {/* Report */}
      <View
        style={[
          BookingDetailStyles.boxContainer,
          { backgroundColor: COLORS.backgroundSecondary, padding: 18 },
        ]}
      >
        <CustomText
          weight="medium"
          color={COLORS.white}
          variant="h3"
          align="center"
        >
          Report and issue
        </CustomText>
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>
            Overcharged by the driver
          </CustomText>
          <ChevronLeft height={16} width={12} />
        </View>
        <View style={GlobalStyles.line} />
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>Ride safety</CustomText>
          <ChevronLeft height={16} width={12} />
        </View>
        <View style={GlobalStyles.line} />
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>
            Billing related issues
          </CustomText>
          <ChevronLeft height={16} width={12} />
        </View>
        <View style={GlobalStyles.line} />
        <View style={BookingDetailStyles.boxRow}>
          <CustomText color={COLORS.disabled}>
            I want to report and issue about the driver
          </CustomText>
          <ChevronLeft height={16} width={12} />
        </View>
      </View>
    </ScrollView>
  );
}

const BookingDetailStyles = StyleSheet.create({
  firstContainer: {
    marginTop: 10,
    padding: 15,
    backgroundColor: COLORS.backgroundTertiary,
    borderRadius: 8,
  },
  mapContainer: {
    height: mapHeight,
    width: '100%',
    position: 'relative',
    borderRadius: 8,
    overflow: 'hidden',
  },
  webView: {
    flex: 1,
    borderRadius: 8,
  },

  container: {
    paddingTop: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundTertiary,
  },
  row: {
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  content: {
    flexDirection: 'column',
    gap: 20,
  },
  rebook: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    backgroundColor: COLORS.backgroundSecondary,
    padding: 10,
    borderRadius: 9,
  },
  status: {
    backgroundColor: COLORS.backgroundTertiary,
  },
  driverContainer: {
    flexDirection: 'row',
    gap: 18,
    padding: 10,
    backgroundColor: COLORS.backgroundSecondary,
    borderRadius: 8,
  },
  driverDetails: {
    flexDirection: 'column',
    gap: 10,
  },
  boxContainer: {
    flexDirection: 'column',
    gap: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: COLORS.backgroundTertiary,
  },
  boxRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
