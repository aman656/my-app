import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AccountScreen from "../screens/AccountScreen";
import ItemScreen from "../screens/ItemScreen";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";
import ProductAddScreen from "../screens/ProductAddScreen";
import ItemNavigation from "./ItemNavigation";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PersonalNavigation from "./PersonalNavigation";
import NavigationButton from "./NavigationButton";
import { useContext } from "react";
import AuthContext from "../authcontext/context";
import { db } from "../firebase";
import { addDoc, collection, setDoc, doc } from "firebase/firestore";

const Tabs = createBottomTabNavigator();
const pushCollections = collection(db, "pushToken");

const AppNavigation = () => {
  const { curruser } = useContext(AuthContext);
  useEffect(() => {
    const requestNotifications = async () => {
      try {
        const permission = await Notifications.getPermissionsAsync();
        if (!permission.granted) {
          return null;
        }
        const token = await Notifications.getExpoPushTokenAsync();
        setDoc(doc(db, "pushToken", curruser.email), {
          email: curruser.email,
          token: token,
        });

        console.log(token);
      } catch (err) {
        console.log(err);
      }
    };
    requestNotifications();
  }, []);

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
