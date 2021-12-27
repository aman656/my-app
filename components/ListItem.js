import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

const ListItem = ({
  image,
  name,
  listing,
  renderRightActions,
  IconComponent,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight
        underlayColor="#e3e1e1"
        onPress={() => console.log("Works")}
      >
        <View style={styles.main}>
          {IconComponent}
          {image && <Image style={styles.img} source={image} />}
          <View style={styles.low}>
            <Text style={styles.name}>{name}</Text>
            {listing && <Text style={styles.listing}>{listing}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  low: {
    justifyContent: "center",
    marginLeft: 12,
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
