import Card from "../../components/Card";
import Fixing from "./Fixing";
import { StyleSheet, FlatList } from "react-native";

const list = [
  {
    title: "Coat",
    id: 1,
    price: 150,
    image: require("../assets/coat.jpg"),
    target: "single",
  },
  {
    title: "Camera",
    id: 2,
    price: 200,
    image: require("../assets/camera.jpg"),
    target: "single",
  },
];

const ItemScreen = ({ navigation }) => {
  return (
    <Fixing>
      <FlatList
        data={list}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.title}
            price={"$" + item.price}
            image={item.image}
            onpress={() => navigation.navigate(item.target)}
          />
        )}
      />
    </Fixing>
  );
};

export default ItemScreen;
