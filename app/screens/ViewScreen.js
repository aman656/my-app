import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <MaterialCommunityIcons name="close" color="white" size={32} />
      </View>
      <View style={styles.right}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          color="white"
          size={32}
        />
      </View>
      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  left: {
    position: "absolute",
    top: 50,
    left: 40,
  },
  right: {
    position: "absolute",
    top: 50,
    right: 40,
  },
});

export default ViewScreen;
