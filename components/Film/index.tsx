import React from "react";
import { Text } from "react-native";
import { useQuery } from "react-query";

export const Film: React.FC<{ id: number }> = ({ id }) => {
  const { data, status } = useQuery(`film-${id}`, () =>
    fetch(`https://swapi.dev/api/films/${id}/`).then(res => res.json()),
  );

  if (status !== "success") {
    return null;
  }

  if (data) {
    return (
      <Text style={{ color: "white", fontSize: 20, marginVertical: 5 }}>
        {data.title}
      </Text>
    );
  }

  return null;
};

export default Film;
