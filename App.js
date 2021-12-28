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
  // const [isNew, setisNew] = useState(false);
  const [selecteditem, setSelected] = useState();

  return (
    <Fixing>
      {/* <Switch value={isNew} onValueChange={(val) => setisNew(val)} /> */}
      <AppPicker
        name="apps"
        items={items}
        selecteditem={selecteditem}
        onselection={(item) => setSelected(item)}
      />
      <AppInput name="email" placeholder="Username" />
    </Fixing>
  );
}
