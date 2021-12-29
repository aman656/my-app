import { View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ImageInput = ({ givenuri }) => {
  return (
    <View style={styles.container}>
      {givenuri && <Image source={{ uri: givenuri }} style={styles.img} />}
      {!givenuri && <MaterialCommunityIcons name="camera" color="#0c0c0c" />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0eeeb",
    borderRadius: 15,
    marginVertical: 10,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
