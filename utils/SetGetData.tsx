import AsyncStorage from "@react-native-async-storage/async-storage";

export const getMyStringValue = async (key: string) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value != null) {
      return value;
    }
    return null;
  } catch (e) {
    // read error
  }
};

export const storeData = async (value: string, key: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};
