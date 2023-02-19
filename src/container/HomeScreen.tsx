import axios from "axios";
import React, { FunctionComponent, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import ContentCharacters from "../component/ContentCharacters";
import EmptyContent from "../component/EmptyContent";
import { LektonBold } from "../component/LektonText";

const HomeScreen: FunctionComponent = (props: any) => {
  const { navigation } = props;

  const [data, setData]: any = useState([]);
  const [page, setPage]: [number, (page: number) => void] = useState(1);
  const [maxPage, setMaxPage] = useState(1);

  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = useState("");

  function getDataCharacters(params: number) {
    setLoading(true);
    axios
      .get("https://rickandmortyapi.com/api/character/?page=" + params)
      .then((response) => {
        setTimeout(() => {
          setData([...data, ...response.data.results]);
          setLoading(false);
          setMaxPage(response.data.info.pages);
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
  }

  useEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
        <>
          <LektonBold style={styles.header}>Characters</LektonBold>
        </>
      ),
    });
    getDataCharacters(page);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#5D5FEF"} />
      {loading && <ActivityIndicator size={32} />}

      {!loading && data ? (
        <FlatList
          data={data}
          renderItem={({ item }) => <ContentCharacters item={item} />}
          onEndReachedThreshold={0.2}
          onEndReached={() => {
            if (page < maxPage) {
              setPage(page + 1);
              getDataCharacters(page + 1);
            }
          }}
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
