import { Image, StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent } from "react";
import LektonText from "./LektonText";

const ContentCharacters: FunctionComponent<any> = ({ item }) => {
  const { name, image, species } = item;
  console.log("item", item);
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.imageBlur} />
      <View style={styles.menuContent}>
        <LektonText>{name}</LektonText>
        <LektonText>{species}</LektonText>
      </View>
    </View>
  );
};

export default ContentCharacters;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 16,
    // borderWidth: 1,
  },
  menuContent: {
    flex: 1,
    marginLeft: 16,
    height: 40,
    justifyContent: "space-between",
  },
  imageBlur: {
    backgroundColor: "#C4C4C4",
    height: 40,
    width: 40,
  },
  headerTextBlur: {
    backgroundColor: "#C4C4C4",
    height: 16,
    width: 132,
  },
  descTextBlur: {
    backgroundColor: "#C4C4C4",
    height: 16,
    width: 85,
  },
});
