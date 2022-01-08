import Card from "../../components/Card";
import Fixing from "./Fixing";
import { FlatList, View, Text } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import OurButton from "../../components/OurButton";
import cache from "../utility/cache";
import ActivityIndicator from "../../components/ActivityIndicator";
import navigation from "../utility/navigationRef";

const ItemScreen = () => {
  const [list, setList] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const getData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://192.168.3.103:9000/api/listings"
      );
      if (response.status === 200) {
        setLoading(false);
        await cache.setCache("api/listings", response.data);
        setError(false);
        setList(response.data);
      } else {
        const data = await cache.getCache("api/listings");
        setLoading(false);
        setList(data);
        setError(false);
      }
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
            onpress={() => navigation.navigate("single", item)}
          />
        )}
      />
    </Fixing>
  );
};

export default ItemScreen;
