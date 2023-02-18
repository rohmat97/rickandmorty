import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const EmptyDetails = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 375,
          backgroundColor: "#C4C4C4",
        }}
      />
      <View style={{ margin: 16 }}>
        <View style={styles.headerTextBlur} />
        <View style={styles.content} />
        <View style={styles.line} />
      </View>
    </View>
  );
};

export default EmptyDetails;

const styles = StyleSheet.create({
  headerTextBlur: {
    marginTop: 10,
    backgroundColor: "#C4C4C4",
    height: 16,
    width: 132,
  },
  content: {
    marginTop: 18,
    backgroundColor: "#C4C4C4",
    height: 74,
    width: "100%",
    borderRadius: 4,
  },
  line: {
    marginTop: 36,
    alignSelf: "center",
    backgroundColor: "#C4C4C4",
    height: 1,
    width: 200,
  },
});
