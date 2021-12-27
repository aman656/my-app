import { useState } from "react";
import { FlatList } from "react-native";
import ListItem from "../../components/ListItem";
import Fixing from "./Fixing";
import ListDelete from "../../components/ListDelete";
import Separator from "../../components/Seperator";

const message = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/no.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/no.jpg"),
  },
];

const MessageScreen = () => {
  const [list, setList] = useState(message);
  const [refresh, setRefresh] = useState(false);
  const deleteHandler = (m) => {
    setList(list.filter((f) => f.id !== m.id));
  };
  return (
    <Fixing>
      <FlatList
        data={message}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            key={item.id}
            name={item.title}
            listing={item.description}
            image={item.image}
            renderRightActions={() => <ListDelete onpress={deleteHandler} />}
          />
        )}
        ItemSeparatorComponent={Separator}
        refreshing={refresh}
        onRefresh={
          setList[
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: require("../assets/no.jpg"),
            }
          ]
        }
      />
    </Fixing>
  );
};

export default MessageScreen;
