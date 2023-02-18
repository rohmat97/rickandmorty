import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";

const DetailScreen = (props: any) => {
  const { route, navigation } = props;
  const paramsName = route?.params?.name;

  useEffect(() => {
    if (paramsName) navigation.setOptions({ title: paramsName });
  }, [paramsName]);

  return (
    <View style={styles.container}>
      <Text>DetailScreen {paramsName}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
