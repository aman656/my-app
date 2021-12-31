import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const ActivityIndicator = ({ show }) => {
  if (!show) return null;
  else {
    return (
      <LottieView source={require("../app/assets/animations/loader2.json")} />
    );
  }
};
const styles = StyleSheet.create({
  container: {},
});
// export default ActivityIndicator;
