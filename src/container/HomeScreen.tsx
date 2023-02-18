import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import EmptyContent from "../component/EmptyContent";

function HomeScreen(props: any) {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5D5FEF"} />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate("Details", {
            name: "Morty Smith",
          })
        }
      />
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}]}
        renderItem={() => <EmptyContent />}
      />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
