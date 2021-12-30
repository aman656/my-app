import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ItemScreen from "../screens/ItemScreen";
import SingleDetail from "../screens/SingleDetail";
import React from "react";

const Stack = createNativeStackNavigator();

const ItemNavigation = () => (
  <Stack.Navigator>
    <Stack.Screen name="all" component={ItemScreen} />
    <Stack.Screen name="single" component={SingleDetail} />
  </Stack.Navigator>
);

export default ItemNavigation;
