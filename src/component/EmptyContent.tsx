import { StyleSheet, View } from "react-native";
import React, { FunctionComponent } from "react";

const EmptyContent: FunctionComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBlur} />
      <View style={styles.menuContent}>
        <View style={styles.headerTextBlur} />
        <View style={styles.descTextBlur} />
      </View>
    </View>
  );
};

export default EmptyContent;

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
