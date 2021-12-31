import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import ItemScreen from "../screens/ItemScreen";
import SingleDetail from "../screens/SingleDetail";

const Stack = createNativeStackNavigator();

const ItemNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="all" component={ItemScreen} />
      <Stack.Screen name="single" component={SingleDetail} />
    </Stack.Navigator>
  );
};

export default ItemNavigation;
