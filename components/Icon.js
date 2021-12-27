import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from "react-native";

const Icon = ({ name, back, size }) => {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: back,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} size={size * 0.5} color="white" />
    </View>
  );
};

export default Icon;
