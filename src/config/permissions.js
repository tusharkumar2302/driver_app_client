import { PermissionsAndroid, Platform } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const PERMISSION_CONFIG = {
  camera: {
    android: PermissionsAndroid.PERMISSIONS.CAMERA,
    ios: PERMISSIONS.IOS.CAMERA,
  },
  location: {
    android: PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  },
  // Add other permissions
};

const checkPermission = async (permissionType) => {
  const permission = Platform.select({
    android: PERMISSION_CONFIG[permissionType].android,
    ios: PERMISSION_CONFIG[permissionType].ios,
  });

  try {
    const result = await check(permission);
    
    switch (result) {
      case RESULTS.UNAVAILABLE:
        console.log('Permission not available on this device');
        return false;
      case RESULTS.DENIED:
        const requestResult = await request(permission);
        return requestResult === RESULTS.GRANTED;
      case RESULTS.GRANTED:
        return true;
      case RESULTS.BLOCKED:
        console.log('Permission permanently blocked');
        return false;
    }
  } catch (error) {
    console.error('Permission check failed', error);
    return false;
  }
};

export const requestCameraPermission = () => checkPermission('camera');
export const requestLocationPermission = () => checkPermission('location');
// Export other permission requests