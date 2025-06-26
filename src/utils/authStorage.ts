import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthUser } from '../types/auth';

const USER_KEY = '@user';

export const storeUser = async (user: AuthUser) => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const getStoredUser = async (): Promise<AuthUser | null> => {
  const userString = await AsyncStorage.getItem(USER_KEY);
  return userString ? JSON.parse(userString) : null;
};

export const clearStorage = async () => {
  await AsyncStorage.removeItem(USER_KEY);
};
