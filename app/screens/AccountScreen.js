import ListItem from "../../components/ListItem";
import Fixing from "./Fixing";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../../components/Icon";
import Separator from "../../components/Seperator";
import { authentication } from "../firebase";
import { useContext } from "react";
import AuthContext from "../authcontext/context";

const ourdetail = [
  {
    title: "My listings",
    icon: {
      name: "format-list-bulleted",
      back: "#fc5c65",
    },
  },
  {
    title: "My messages",
    icon: {
      name: "email",
      back: "#4ecdc4",
    },
    targetscreen: "message",
  },
];

const AccountScreen = ({ navigation }) => {
  const { curruser } = useContext(AuthContext);
  const signedOut = async () => {
    try {
      await authentication.signOut();
      console.log("Signed Out");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Fixing style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          name="Aman Siddiqui"
          listing={curruser.email}
          image={require("../assets/no.jpg")}
        />
      </View>
      <View style={styles.mid}>
        <FlatList
          data={ourdetail}
          ItemSeparatorComponent={Separator}
          keyExtractor={(ourdetail) => ourdetail.title}
          renderItem={({ item }) => (
            <ListItem
              name={item.title}
              IconComponent={
                <Icon name={item.icon.name} back={item.icon.back} size={50} />
              }
              onPress={() => navigation.navigate(item.targetscreen)}
            />
          )}
        />
      </View>
      <ListItem
        onPress={signedOut}
        name="Logout"
        IconComponent={<Icon name="logout" back="#ffe66d" size={50} />}
      />
    </Fixing>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: "#f5f5f5",
  },
  container: {
    marginVertical: 20,
  },
  mid: {
    marginVertical: 20,
  },
});

export default AccountScreen;
