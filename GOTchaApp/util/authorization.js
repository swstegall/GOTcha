import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkAuthorization = async () => {
  const value = await AsyncStorage.getItem('auth_token');
  if (value !== null) {
    return true;
  } else {
    return false;
  }
}

export const setAuthorization = async (token) => {
  await AsyncStorage.setItem('auth_token', token);
}