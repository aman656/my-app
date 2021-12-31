import * as React from "react";

import Home from "./app/screens/Home";
import ViewScreen from "./app/screens/ViewScreen";
import OurButton from "./components/OurButton";
import Card from "./components/Card";
import SingleDetail from "./app/screens/SingleDetail";
import MessageScreen from "./app/screens/MessageScreen";
import Fixing from "./app/screens/Fixing";
import Icon from "./components/Icon";
import ListItem from "./components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ItemScreen from "./app/screens/ItemScreen";
import AppInput from "./components/AppInput";
import { Button, Switch, Image, Text } from "react-native";
import { useEffect, useState } from "react";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import ProductAddScreen from "./app/screens/ProductAddScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./components/ImageInput";
import ImageInputList from "./components/ImageInputList";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigation from "./app/Navigation/AuthNavigation";
import AppNavigation from "./app/Navigation/AppNavigation";
import { authentication } from "./app/firebase";

const items = [
  {
    value: 1,
    label: "Paint",
  },
  {
    value: 2,
    label: "Shirt",
  },
  {
    value: 3,
    label: "Cap",
  },
];

const User = ({ navigation }) => {
  return (
    <Fixing>
      <Text>Users</Text>
      <Button
        title="Click"
        onPress={() => navigation.navigate("userdetail", { id: 1 })}
      />
    </Fixing>
  );
};
const UserDetail = ({ route }) => {
  return (
    <Fixing>
      <Text>User Detail</Text>
    </Fixing>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
// const StackNavigator = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="user" component={User} />
//     <Stack.Screen name="userdetail" component={UserDetail} />
//   </Stack.Navigator>
// );

export default function App() {
  const [curruser, setcurruser] = useState(null);
  const useHandler = (user) => {
    user ? setcurruser(user) : setcurruser(null);
  };
  useEffect(() => {
    authentication.onAuthStateChanged((user) => useHandler(user));
  }, []);

  return (
    <NavigationContainer>
      {!curruser ? <AuthNavigation /> : <AppNavigation />}
      {/* <Tab.Navigator
        screenOptions={{
          tabBarActiveBackgroundColor: "tomato",
          tabBarActiveTintColor: "white",
        }}
      >
        <Tab.Screen
          name="account"
          component={User}
          options={{
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="feed"
          component={UserDetail}
          // options={({ route }) => ({ title: route.params.id })}
        />
      </Tab.Navigator> */}
    </NavigationContainer>
  );
}
