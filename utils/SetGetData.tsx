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

export const getMyDate = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // read error
  }
};

export const storeDataString = async (value: string, key: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const storeTime = async (time: Date, key: string) => {
  try {
    const jsonValue = JSON.stringify(time);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};

export const storeBool = async (plusOrMinus: boolean, key: string) => {
  try {
    const jsonValue = JSON.stringify(plusOrMinus);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log(e);
  }
};
