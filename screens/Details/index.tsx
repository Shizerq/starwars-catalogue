/* eslint-disable camelcase */
import React from "react";
import { useNavigation } from "@react-navigation/native";

import Film from "../../components/Film";
import Back from "../../components/Back";

import { DetailsParams } from "../../App";

import * as Styled from "./index.styled";

export const DetailsScreen: React.FC<{ route: DetailsParams }> = ({
  route,
}) => {
  const navigation = useNavigation();

  const {
    name,
    birth_year,
    gender,
    hair_color,
    height,
    mass,
    skin_color,
    films,
  } = route.params;

  return (
    <Styled.Background>
      <Styled.Container>
        <Back onPress={() => navigation.goBack()} />
        <Styled.Title>{name}</Styled.Title>
        <Styled.Data>
          <Styled.Label>Birth year: </Styled.Label>
          <Styled.Value>{birth_year}</Styled.Value>
        </Styled.Data>
        <Styled.Data>
          <Styled.Label>Gender: </Styled.Label>
          <Styled.Value>{gender}</Styled.Value>
        </Styled.Data>
        <Styled.Data>
          <Styled.Label>Hair colour: </Styled.Label>
          <Styled.Value>{hair_color}</Styled.Value>
        </Styled.Data>
        <Styled.Data>
          <Styled.Label>Skin colour: </Styled.Label>
          <Styled.Value>{skin_color}</Styled.Value>
        </Styled.Data>
        <Styled.Data>
          <Styled.Label>Height: </Styled.Label>
          <Styled.Value>{height}</Styled.Value>
        </Styled.Data>
        <Styled.Data>
          <Styled.Label>Mass: </Styled.Label>
          <Styled.Value>{mass}</Styled.Value>
        </Styled.Data>
        <Styled.SectionTitle>Films</Styled.SectionTitle>
        {films.map((film: string) => {
          const filmUrlParts = film.split("/").filter(Boolean);
          const filmId = parseInt(filmUrlParts[filmUrlParts.length - 1], 10);
          return <Film id={filmId} />;
        })}
      </Styled.Container>
    </Styled.Background>
  );
};

export default DetailsScreen;
