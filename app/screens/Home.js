import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import OurButton from "../../components/OurButton";

const Home = () => {
  return (
    <ImageBackground
      blurRadius={8}
      style={styles.back}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.upper}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={{ paddingVertical: 10, fontSize: 25, fontWeight: "600" }}>
          Sell the antique
        </Text>
      </View>
      <View style={styles.custombtn}>
        <OurButton title="Login" given="#fc5c65" />
        <OurButton title="Sign Up" given="#4ecdc4" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  upper: {
    top: 65,
    position: "absolute",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  custombtn: {
    padding: 20,
    width: "100%",
  },
});

export default Home;
