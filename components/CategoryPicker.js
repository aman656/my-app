import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "./Icon";

const CategoryPicker = ({ data, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        <Icon name={data.icon} size={80} back={data.color} />
        <Text style={styles.txt}>{data.label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginLeft: -1,
    alignItems: "center",
    width: "33%",
  },
  txt: {
    marginTop: 5,
    textAlign: "center",
  },
});

export default CategoryPicker;
