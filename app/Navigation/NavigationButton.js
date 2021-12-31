import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const NavigationButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="plus-circle" size={25} color="white" />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,

    alignItems: "center",
    backgroundColor: "tomato",
    borderWidth: 5,
    borderRadius: 30,
    justifyContent: "center",
    bottom: 15,
    borderColor: "white",
  },
});
export default NavigationButton;
