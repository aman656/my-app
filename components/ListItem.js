import { View, Image, Text, StyleSheet } from "react-native";

const ListItem = ({ image, name, listing }) => {
  return (
    <View style={styles.main}>
      <Image style={styles.img} source={image} />
      <View style={styles.low}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.listing}>{listing}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 8,
  },
  low: {
    justifyContent: "center",
  },
  name: {
    fontWeight: "700",
    fontSize: 18,
  },
  listing: {
    color: "#6e6969",
  },
});

export default ListItem;
