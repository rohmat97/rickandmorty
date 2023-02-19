import { FlatList, Image, ScrollView, StyleSheet, View } from "react-native";
import React, { FunctionComponent } from "react";
import { LektonBold, LektonNormal } from "./LektonText";
import ComponentEpisode from "./ComponentEpisode";

const ContentDetails: FunctionComponent<any> = ({ detailData }) => {
  const { name, image, species, gender, episode, status } = detailData;
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={{ margin: 16 }}>
          <LektonBold style={styles.header}>{name}</LektonBold>
          <View style={styles.content}>
            <LektonNormal style={{ color: "white" }}>
              spesies: {species}
            </LektonNormal>
            <LektonNormal style={{ color: "white" }}>
              gender: {gender}
            </LektonNormal>
            <LektonNormal style={{ color: "white" }}>
              status: {status}
            </LektonNormal>
          </View>
          <View style={styles.line} />
          <LektonBold style={[styles.header, { marginTop: 36, fontSize: 20 }]}>
            Episodes
          </LektonBold>
          <FlatList
            data={episode || []}
            renderItem={({ item }) => <ComponentEpisode item={item} />}
            scrollEnabled={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ContentDetails;

const styles = StyleSheet.create({
  headerTextBlur: {
    marginTop: 10,
    backgroundColor: "#C4C4C4",
    height: 16,
    width: 132,
  },
  content: {
    marginTop: 18,
    backgroundColor: "#EF5DA8",
    height: 74,
    width: "100%",
    borderRadius: 4,
    paddingLeft: 8,
  },
  line: {
    marginTop: 36,
    alignSelf: "center",
    backgroundColor: "#C4C4C4",
    height: 1,
    width: 200,
  },
  header: {
    color: "black",
    fontSize: 20,
    // fontWeight: "700",
  },
  image: {
    width: "100%",
    height: 375,
    backgroundColor: "#C4C4C4",
  },
});
