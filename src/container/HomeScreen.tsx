import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  StatusBar,
} from "react-native";
import ContentCharacters from "../component/ContentCharacters";
import EmptyContent from "../component/EmptyContent";
import { LektonBold } from "../component/LektonText";
import { ICharacters, IResult } from "../model/Characters";

const HomeScreen: FunctionComponent = (props: any) => {
  const { navigation } = props;

  const [data, setData]: [any, (data: ICharacters) => void] = useState();
  const [page, setPage]: [number, (page: number) => void] = useState(1);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <>
          <LektonBold style={styles.header}>Characters</LektonBold>
        </>
      ),
    });

    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((response) => {
        setTimeout(() => {
          setData(response.data.results);
          setLoading(false);
        }, 1500);
      })
      .catch((err) => {
        const error =
          err.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5D5FEF"} />
      {!loading && data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <ContentCharacters item={item} />}
        />
      ) : error ? (
        <LektonBold style={styles.header}>{error}</LektonBold>
      ) : (
        <FlatList
          data={[{}, {}, {}, {}, {}, {}, {}]}
          renderItem={() => <EmptyContent />}
        />
      )}
    </View>
  );
};

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
