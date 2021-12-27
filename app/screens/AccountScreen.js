import ListItem from "../../components/ListItem";
import Fixing from "./Fixing";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../../components/Icon";
import Separator from "../../components/Seperator";

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
  },
];

const AccountScreen = () => {
  return (
    <Fixing style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          name="Aman Siddiqui"
          listing="amansiddiqui@gmail.com"
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
            />
          )}
        />
      </View>
      <ListItem
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
