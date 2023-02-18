import * as React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen(props: any) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            name: "Morty Smith",
          })
        }
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
