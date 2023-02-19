import { StatusBar, StyleSheet, TouchableOpacity, View } from "react-native";
import React, { FunctionComponent, useEffect, useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import EmptyDetails from "../component/EmptyDetails";
import ContentDetails from "../component/ContentDetails";
import { LektonBold } from "../component/LektonText";

const DetailScreen: FunctionComponent = (props: any) => {
  const [visible, setvisible] = useState(false);
  const { route, navigation } = props;
  const detailData = route?.params?.data;
  const { name } = detailData;

  useEffect(() => {
    if (detailData)
      navigation.setOptions({
        title: "",
        headerLeft: () => (
          <>
            <TouchableOpacity
              testID="buttonTestBackToHome"
              onPress={() => navigation.pop()}
            >
              <FontAwesome5 name={"arrow-left"} color="white" size={16} />
            </TouchableOpacity>
            <LektonBold style={styles.header}>{name}</LektonBold>
          </>
        ),
      });
    setTimeout(() => {
      setvisible(true);
    }, 1500);
  }, [detailData]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5D5FEF"} />
      {visible ? <ContentDetails detailData={detailData} /> : <EmptyDetails />}
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
