import { Text, StyleSheet } from "react-native";

const Error = ({ issue, show }) => {
  if (!issue || !show) return null;
  return <Text style={styles.txt}>{issue}</Text>;
};

const styles = StyleSheet.create({
  txt: {
    color: "red",
  },
});

export default Error;
