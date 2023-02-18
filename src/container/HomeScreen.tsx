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
import LektonText from "../component/LektonText";

function HomeScreen(props: any) {
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <>
          <LektonText style={styles.header}>Characters</LektonText>
        </>
      ),
    });
  }, []);

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
  header: {
    color: "white",
    fontSize: 20,
  },
});
