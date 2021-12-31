import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ListItem = ({
  image,
  name,
  listing,
  renderRightActions,
  IconComponent,
  onPress,
}) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor="#e3e1e1" onPress={onPress}>
        <View style={styles.main}>
          {IconComponent}
          {image && <Image style={styles.img} source={image} />}
          <View style={styles.low}>
            <Text style={styles.name} numberOfLines={2}>
              {name}
            </Text>
            {listing && (
              <Text style={styles.listing} numberOfLines={2}>
                {listing}
              </Text>
            )}
          </View>
          <MaterialCommunityIcons
            name="chevron-right"
            size={25}
            color="#6e6969"
          />
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
    alignItems: "center",
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  low: {
    justifyContent: "center",
    marginLeft: 12,
    flex: 1,
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
