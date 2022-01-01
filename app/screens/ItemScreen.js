import Card from "../../components/Card";
import Fixing from "./Fixing";
import { StyleSheet, FlatList, View, Text } from "react-native";

import { useState, useEffect } from "react";
import axios from "axios";
import OurButton from "../../components/OurButton";
import ActivityIndicator from "../../components/ActivityIndicator";

// const list = [
//   {
//     title: "Coat",
//     id: 1,
//     price: 150,
//     image: require("../assets/coat.jpg"),
//     target: "single",
//   },
//   {
//     title: "Camera",
//     id: 2,
//     price: 200,
//     image: require("../assets/camera.jpg"),
//     target: "single",
//   },
// ];

const ItemScreen = ({ navigation }) => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://192.168.3.103:9000/api/listings"
      );
      setLoading(false);
      console.log(response.status);
      setError(false);
      setList(response.data);
    } catch (err) {
      setLoading(false);
      setError(true);
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fixing>
      {error && (
        <>
          <View>
            <Text>Couldn't reload data Click to refresh.</Text>
            <OurButton title="Reload" onpress={getData} given="#fc5c65" />
          </View>
        </>
      )}
      {loading && <ActivityIndicator show={loading} />}
      <FlatList
        data={list}
        keyExtractor={(list) => list.id.toString()}
        renderItem={({ item }) => (
          <Card
            name={item.title}
            price={"$" + item.price}
            image={item.images[0].url}
            onpress={() => navigation.navigate(item.target)}
          />
        )}
      />
    </Fixing>
  );
};

export default ItemScreen;
