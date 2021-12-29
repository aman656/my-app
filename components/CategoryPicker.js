import { View, Text, StyleSheet } from "react-native";
import Icon from "./Icon";

const CategoryPicker = ({ data, onpress }) => {
  return (
    <View style={styles.container}>
      <Icon name={data.icon} size={80} back={data.color} />
      <Text style={styles.txt}>{data.label}</Text>
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
