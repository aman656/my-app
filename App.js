import * as React from "react";

import AppLoading from "expo-app-loading";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./app/Navigation/AuthNavigation";
import AppNavigation from "./app/Navigation/AppNavigation";
import { authentication } from "./app/firebase";
import NetInfo from "@react-native-community/netinfo";
import AuthContext from "./app/authcontext/context";
import { navigationRef } from "./app/utility/navigationRef";

export default function App() {
  const [curruser, setcurruser] = useState(null);
  const [isReady, setisReady] = useState(false);
  const useHandler = (user) => {
    user ? setcurruser(user) : setcurruser(null);
  };

  useEffect(() => {
    const getting = async () => {
      const data = await AsyncStorage.getItem("cacheapi/listings");
      const value = JSON.parse(data);
      // console.log(value);
    };
    getting();
  }, []);
  useEffect(() => {
    gettingFirebaseUser();
  }, []);
  const gettingFirebaseUser = () => {
    authentication.onAuthStateChanged((user) => useHandler(user));
  };
  // NetInfo.addEventListener((netinfo) => console.log(netinfo));
  if (!isReady) {
    return (
      <AppLoading
        startAsync={gettingFirebaseUser}
        onFinish={() => setisReady(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <AuthContext.Provider value={{ curruser, setcurruser }}>
      <NavigationContainer ref={navigationRef}>
        {curruser ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
