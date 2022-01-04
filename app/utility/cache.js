import AsyncStorage from "@react-native-async-storage/async-storage";
import moment from "moment";

const findExpiry = (item) => {
  const currenttime = moment(Date.now());
  const itemTime = moment(item.timestamp);
  return currenttime.diff(itemTime, "minutes") > 5;
};

const setCache = async (key, data) => {
  const item = {
    value: data,
    timestamp: Date.now(),
  };
  try {
    await AsyncStorage.setItem("cache" + key, JSON.stringify(item));
  } catch (err) {
    console.log(err);
  }
};

const getCache = async (key) => {
  try {
    const value = AsyncStorage.getItem("cache" + key);
    const original = JSON.parse(value);
    if (!original) {
      return null;
    }
    if (findExpiry(original)) {
      await AsyncStorage.removeItem("cache" + key);
      return null;
    }
    return original;
  } catch (err) {
    console.log(err);
  }
};

export default {
  setCache,
  getCache,
};
