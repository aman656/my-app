import { Platform, StyleSheet, TextInput, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppInput = ({ name, ...other }) => {
  return (
    <View style={styles.container}>
      {name && (
        <MaterialCommunityIcons
          name={name}
          size={20}
          color="#0c0c0c"
          style={{ marginRight: 10 }}
        />
      )}
      <TextInput style={styles.inp} {...other} />
    </View>
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
  inp: {
    fontSize: 18,
    color: "#0c0c0c",
    fontFamily: Platform.OS === "android" ? "Roboto" : " Avenir",
  },
});

export default AppInput;
