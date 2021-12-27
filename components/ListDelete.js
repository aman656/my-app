import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet, TouchableWithoutFeedback } from "react-native";

const ListDelete = ({ onpress }) => {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <View style={styles.container}></View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ff5252",
    width: 70,
  },
});

export default ListDelete;
