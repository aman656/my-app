import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import AccountScreen from "../screens/AccountScreen";
import MessageScreen from "../screens/MessageScreen";

const Stack = createNativeStackNavigator();

const PersonalNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="accounts" component={AccountScreen} />
      <Stack.Screen name="message" component={MessageScreen} />
    </Stack.Navigator>
  );
};

export default PersonalNavigation;
