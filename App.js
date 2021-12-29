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
import { Button, Switch, Image } from "react-native";
import { useEffect, useState } from "react";
import AppPicker from "./components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import ProductAddScreen from "./app/screens/ProductAddScreen";
import * as ImagePicker from "expo-image-picker";
import ImageInput from "./components/ImageInput";

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
  const [imageuri, setImage] = useState();
  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestCameraPermissionsAsync();
      if (!result.granted) {
        alert("You need to give permission in order to proceed");
      }
    };
    requestPermission();
  }, []);
  const imageSubmit = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync();
      if (!res.cancelled) {
        setImage(res.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fixing>
      <Button title="Click" onPress={imageSubmit} />
      {/* <Image source={{ uri: imageuri }} style={{ width: 200, height: 200 }} /> */}
      <ImageInput givenuri={imageuri} />
    </Fixing>
  );
}
