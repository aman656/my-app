import { Image, Text, View, StyleSheet } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import navigation from "../app/utility/navigationRef";

const Card = ({ image, name, price, onpress }) => {
  return (
    <TouchableWithoutFeedback onPress={onpress}>
      <View style={styles.card}>
        <Image source={{ uri: image }} style={styles.imag} />
        <View style={styles.low}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: "white",
    marginBottom: 20,
    overflow: "hidden",
  },
  low: {
    padding: 20,
  },
  imag: {
    width: "100%",
    height: 250,
  },
  name: {
    marginBottom: 7,
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "#4ecdc4",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Card;
