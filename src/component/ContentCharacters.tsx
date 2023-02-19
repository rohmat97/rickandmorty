import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FunctionComponent } from "react";
import { LektonBold, LektonNormal } from "./LektonText";

const ContentCharacters: FunctionComponent<any> = ({ item, navigation }) => {
  const { name, image, species } = item;

  const moveToDetails = () => {
    navigation.navigate("Details", {
      data: item,
    });
  };

  return (
    <TouchableOpacity
      testID="testNavigateDetail"
      onPress={() => moveToDetails()}
    >
      <View style={styles.container}>
        <Image source={{ uri: image }} style={styles.imageBlur} />
        <View style={styles.menuContent}>
          <LektonBold style={{ color: "black" }}>{name}</LektonBold>
          <LektonNormal>{species}</LektonNormal>
        </View>
      </View>
    </TouchableOpacity>
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
