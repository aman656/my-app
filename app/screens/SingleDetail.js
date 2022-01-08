import { View, Image, Text, StyleSheet } from "react-native";
import ListItem from "../../components/ListItem";
import Fixing from "./Fixing";

const SingleDetail = ({ route }) => {
  return (
    <Fixing>
      <View style={styles.conatiner}>
        <Image
          style={styles.imag}
          source={{ uri: route.params.images[0].url }}
        />
        <View style={styles.mid}>
          <Text style={styles.name}>Old coat</Text>
          <Text style={styles.price}>100$</Text>
          <View style={styles.out}>
            <ListItem
              image={require("../assets/no.jpg")}
              name="Aman"
              listing="5 listings"
            />
          </View>
        </View>
      </View>
    </Fixing>
  );
};

const styles = StyleSheet.create({
  imag: {
    width: "100%",
    height: 300,
    borderRadius: 20,
  },
  mid: {
    padding: 20,
  },
  name: {
    marginBottom: 7,
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    color: "#4ecdc4",
    fontSize: 18,
    fontWeight: "bold",
  },
  out: {
    marginVertical: 40,
  },
});

export default SingleDetail;
