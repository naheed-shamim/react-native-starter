import AsyncStorage from '@react-native-community/async-storage';

export const LocalStorage = {
  saveValue: async (key, value) => {
    try {
      return AsyncStorageUtil.setValueFor(key, value);
    } catch (err) {}
  },
  getValue: async key => {
    try {
      return AsyncStorageUtil.getValueFor(key);
    } catch (err) {}
  },
};

// ------- Async Storage Local Storage Methods -------

const AsyncStorageUtil = {
  getValueFor: async key => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      throw e;
    }
  },
  setValueFor: async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (e) {
      throw e;
    }
  },
};
