/* eslint-disable camelcase */
import React from "react";
import { FlatList } from "react-native";
import { useInfiniteQuery } from "react-query";
import { useNavigation } from "@react-navigation/native";
import { debounce } from "lodash";

import People from "../../types/people";

import Card from "../../components/Card";
import Loading from "../../components/Loading";

import * as Styled from "./index.styled";

export const HomeScreen: React.FC = () => {
  const [search, setSearch] = React.useState<string>("");

  const { data, isFetching, fetchNextPage, refetch } = useInfiniteQuery(
    "characters",
    async ({ pageParam = 1 }) => {
      if (search) {
        const res = fetch(
          `https://swapi.dev/api/people/?search=${search}`,
        ).then(res => res.json());
        return res;
      }
      const res = fetch(
        `https://swapi.dev/api/people/?page=${pageParam}`,
      ).then(res => res.json());

      return res;
    },
    {
      getNextPageParam: lastPage => lastPage.next?.split("=")[1],
    },
  );

  const [parsedData, setParsedData] = React.useState<People[]>([]);

  React.useEffect(() => {
    if (data) {
      const allItems: People[] = [];
      data.pages.forEach(page =>
        page.results.forEach((res: People) => allItems.push(res)),
      );
      setParsedData([...allItems]);
    }
  }, [data]);

  const navigation = useNavigation();
  const HandleSearch = React.useCallback(debounce(refetch, 250), []);

  if (parsedData) {
    return (
      <Styled.Container>
        <FlatList
          numColumns={2}
          refreshing={isFetching}
          ListHeaderComponent={
            <>
              <Styled.Logo />
              <Styled.Input
                onChangeText={text => {
                  setSearch(text);
                  HandleSearch();
                }}
                placeholder="Search"
                placeholderTextColor="white"
              />
            </>
          }
          columnWrapperStyle={{
            flex: 1,
            justifyContent: "space-between",
            marginVertical: 8,
          }}
          data={parsedData}
          renderItem={({ item }) => (
            <Card
              onPress={() => navigation.navigate("Details", { ...item })}
              key={item.name}
              name={item.name}
              gender={item.gender}
              birthyear={item.birth_year}
            />
          )}
          style={{ width: "90%", alignSelf: "center" }}
          onEndReached={search ? null : () => fetchNextPage()}
          onEndReachedThreshold={0.1}
        />
      </Styled.Container>
    );
  }

  return (
    <Styled.Container>
      <Loading />
    </Styled.Container>
  );
};

export default HomeScreen;
