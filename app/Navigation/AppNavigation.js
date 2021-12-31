import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ItemScreen from "../screens/ItemScreen";
import ProductAddScreen from "../screens/ProductAddScreen";
import ItemNavigation from "./ItemNavigation";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PersonalNavigation from "./PersonalNavigation";
import NavigationButton from "./NavigationButton";

const Tabs = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tabs.Navigator
      screenOptions={{ tabBarActiveTintColor: "tomato", headerShown: false }}
    >
      <Tabs.Screen
        name="main"
        component={ItemNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="addition"
        component={ProductAddScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <NavigationButton onPress={() => navigation.navigate("addition")} />
          ),
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="plus-circle"
              size={size}
              color={color}
            />
          ),
        })}
      />
      <Tabs.Screen
        name="account"
        component={PersonalNavigation}
        options={
          ({ headerShown: false },
          {
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name="lock" size={size} color={color} />
            ),
          })
        }
      />
    </Tabs.Navigator>
  );
};

export default AppNavigation;
