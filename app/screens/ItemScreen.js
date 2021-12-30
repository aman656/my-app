import Card from "../../components/Card";
import Fixing from "./Fixing";
import { StyleSheet, FlatList } from "react-native";
import { useLinkTo } from "@react-navigation/native";

const list = [
  {
    title: "Coat",
    id: 1,
    price: 150,
    image: require("../assets/coat.jpg"),
  },
  {
    title: "Camera",
    id: 2,
    price: 200,
    image: require("../assets/camera.jpg"),
  },
];

const ItemScreen = ({ navigation }) => {
  const linking = useLinkTo();
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
            onPress={() => linking(`/main/single`)}
          />
        )}
      />
    </Fixing>
  );
};

export default ItemScreen;
