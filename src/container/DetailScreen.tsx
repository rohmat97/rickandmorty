import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { FunctionComponent, useEffect } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EmptyDetails from "../component/EmptyDetails";
import LektonText from "../component/LektonText";

const DetailScreen: FunctionComponent = (props: any) => {
  const { route, navigation } = props;
  const paramsName = route?.params?.name;

  useEffect(() => {
    if (paramsName)
      navigation.setOptions({
        title: "",
        headerLeft: () => (
          <>
            <TouchableOpacity onPress={() => navigation.pop()}>
              <FontAwesome5 name={"arrow-left"} color="white" size={16} />
            </TouchableOpacity>

            <LektonText style={styles.header}>{paramsName}</LektonText>
          </>
        ),
      });
  }, [paramsName]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5D5FEF"} />
      <EmptyDetails />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: "white",
    marginLeft: 32,
    fontSize: 20,
    // fontWeight: "700",
  },
});
