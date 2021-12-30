import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ItemScreen from "../screens/ItemScreen";
import ProductAddScreen from "../screens/ProductAddScreen";
import ItemNavigation from "./ItemNavigation";
import React from "react";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => (
  <Tabs.Navigator>
    <Tabs.Screen
      name="main"
      component={ItemNavigation}
      options={{ headerShown: false }}
    />
    <Tabs.Screen name="account" component={AccountScreen} />
    <Tabs.Screen name="addition" component={ProductAddScreen} />
  </Tabs.Navigator>
);

export default AppNavigation;
