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
import { Switch } from "react-native";
import { useState } from "react";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ProductAddScreen from "./app/screens/ProductAddScreen";

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

export default function App() {
  return <ProductAddScreen />;
}
