import { StyleSheet, Text, View } from "react-native";
import React, { FunctionComponent, useState } from "react";
import { LektonBold, LektonNormal } from "./LektonText";
import axios from "axios";

const ComponentEpisode: FunctionComponent<any> = ({ item }) => {
  const [episodes, setepisode] = useState();
  axios.get(item).then((succ: any) =>
    setTimeout(() => {
      setepisode(succ.data);
    }, 1000)
  );
  //   console.log("episode", episode);
  if (episodes) {
    const { name, episode, air_date }: any = episodes;
    if (name && episode && air_date) {
      return (
        <View style={{ height: 68, paddingTop: 16 }}>
          <LektonBold style={{ color: "black", fontSize: 16 }}>
            {name} - {episode}
          </LektonBold>
          <LektonNormal style={{ fontSize: 12 }}>{air_date}</LektonNormal>
        </View>
      );
    }
    return <></>;
  }
  return (
    <View style={styles.container}>
      <View style={styles.menuContent}>
        <View style={styles.headerTextBlur} />
        <View style={styles.descTextBlur} />
      </View>
    </View>
  );
};

export default ComponentEpisode;

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
