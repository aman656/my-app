import {
  Platform,
  StyleSheet,
  TextInput,
  Text,
  View,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Fixing from "../app/screens/Fixing";
import { useState } from "react";
import ModalItem from "./ModalItem";

const AppPicker = ({ name, items, selecteditem, onselection }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShow(true)}>
        <View style={styles.container}>
          {name && (
            <MaterialCommunityIcons
              name={name}
              size={20}
              color="#0c0c0c"
              style={{ marginRight: 10 }}
            />
          )}
          <Text style={styles.inpu}>
            {selecteditem ? selecteditem : "Category"}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color="#0c0c0c"
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={show} animationType="slide">
        <Fixing>
          <Button title="Close" onPress={() => setShow(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <ModalItem
                data={item}
                onpress={() => {
                  setShow(false);
                  onselection(item.label);
                }}
              />
            )}
          />
        </Fixing>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
    backgroundColor: "#f0eeeb",
    borderRadius: 25,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  inpu: {
    fontSize: 18,
    color: "#0c0c0c",
    fontFamily: Platform.OS === "android" ? "Roboto" : " Avenir",
    flex: 1,
  },
});

export default AppPicker;
