import { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import ImageInput from "./ImageInput";
const ImageInputList = ({ urilist = [], Adding, Removing }) => {
  const scrollRef = useRef();
  return (
    <View>
      <ScrollView
        horizontal
        ref={scrollRef}
        onContentSizeChange={() => scrollRef.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {urilist.map((uri) => (
            <ImageInput
              givenuri={uri}
              key={uri}
              imageClick={() => Removing(uri)}
            />
          ))}
          <ImageInput imageClick={(uri) => Adding(uri)} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
});
export default ImageInputList;
