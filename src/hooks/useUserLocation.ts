import { GOOGLE_API_KEY } from '@env';
import {useState, useEffect} from 'react';
import {Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';


interface LocationData {
  latitude: number;
  longitude: number;
  accuracy?: number;
  timestamp?: number;
}

interface AddressData {
  country: string | null;
  state: string | null;
  city: string | null;
  locality: string | null;
  route: string | null;
  pin_code: string | null;
}

interface LocationHookReturn {
  location: LocationData | null;
  address: AddressData | null;
  loading: boolean;
  error: string | null;
  getLocation: (lat?: number, lng?: number) => Promise<void>;
  hasPermission: boolean | null;
}

const useUserLocation = (
  latitude?: number,
  longitude?: number,
): LocationHookReturn => {
  const [location, setLocation] = useState<LocationData | null>(
    latitude !== undefined && longitude !== undefined
      ? {latitude, longitude}
      : null,
  );
  const [address, setAddress] = useState<AddressData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const requestLocationPermission = async (): Promise<boolean> => {
    if (Platform.OS === 'ios') {
      Geolocation.requestAuthorization();
      setHasPermission(true);
      return true;
    }
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        const permissionGranted =
          granted === PermissionsAndroid.RESULTS.GRANTED;
        setHasPermission(permissionGranted);
        return permissionGranted;
      } catch (err) {
        console.error('Error requesting location permission:', err);
        setHasPermission(false);
        return false;
      }
    }
    setHasPermission(false);
    return false;
  };

  const reverseGeocode = async (lat: number, lng: number) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${GOOGLE_API_KEY}`,
      );
      const data = await response.json();
      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        const country =
          addressComponents.find((c: any) => c.types.includes('country'))
            ?.long_name || null;
        const state =
          addressComponents.find((c: any) =>
            c.types.includes('administrative_area_level_1'),
          )?.long_name || null;
        const city =
          addressComponents.find((c: any) => c.types.includes('locality'))
            ?.long_name || null;
        const locality =
          addressComponents.find((c: any) => c.types.includes('sublocality'))
            ?.long_name || null;
        const route =
          addressComponents.find((c: any) => c.types.includes('route'))
            ?.long_name || null;
        const pin_code =
          addressComponents.find((c: any) => c.types.includes('postal_code'))
            ?.long_name || null;
        setAddress({country, state, locality, route, city, pin_code});
      } else {
        throw new Error('Unable to fetch address details');
      }
    } catch (err) {
      console.error('Reverse geocoding failed:', err);
      setError('Failed to fetch address');
    }
  };

  const getLocation = async (lat?: number, lng?: number): Promise<void> => {
    setLoading(true);
    setError(null);

    if (lat !== undefined && lng !== undefined) {
      setLocation({latitude: lat, longitude: lng});
      await reverseGeocode(lat, lng);
      setLoading(false);
      return;
    }

    try {
      const permissionGranted = await requestLocationPermission();
      if (!permissionGranted) {
        setError('Location permission denied');
        setLoading(false);
        return;
      }

      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude, accuracy} = position.coords;
          setLocation({
            latitude,
            longitude,
            accuracy,
            timestamp: position.timestamp,
          });
          await reverseGeocode(latitude, longitude);
          setLoading(false);
        },
        err => {
          console.error('Geolocation error:', err);
          setError(err.message || 'Failed to get location');
          setLoading(false);
        },
        {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
      );
    } catch (err) {
      console.error('Exception during location acquisition:', err);
      setError('Failed to get location');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      getLocation(latitude, longitude);
    } else {
      getLocation();
    }
  }, [latitude, longitude]);

  return {location, address, loading, error, getLocation, hasPermission};
};

export default useUserLocation;
