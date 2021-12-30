import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useEffect } from "react";

const ImageInput = ({ givenuri, imageClick }) => {
  useEffect(() => {
    const requestPermission = async () => {
      const result = await ImagePicker.requestCameraPermissionsAsync();
      if (!result.granted) {
        alert("You need to give permission in order to proceed");
      }
    };
    requestPermission();
  }, []);
  const handleSelect = () => {
    if (!givenuri) {
      imageSubmit();
    } else {
      Alert.alert("Delete", "Are you sure you want to delete?", [
        { text: "Yes", onPress: () => imageClick(null) },
        { text: "No" },
      ]);
    }
  };
  const imageSubmit = async () => {
    try {
      const res = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!res.cancelled) {
        imageClick(res.uri);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleSelect}>
      <View style={styles.container}>
        {givenuri && <Image source={{ uri: givenuri }} style={styles.img} />}
        {!givenuri && (
          <MaterialCommunityIcons name="camera" color="#0c0c0c" size={30} />
        )}
      </View>
    </TouchableWithoutFeedback>
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
    marginRight: 6,
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
export default ImageInput;
