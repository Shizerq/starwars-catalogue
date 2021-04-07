import React from "react";
import { Text } from "react-native";
import * as Styled from "./index.styled";

interface Props {
  name: string;
  gender: "Female" | "Male" | "unknown" | "n/a";
  birthyear: string;
  onPress: () => void;
}

export const Card: React.FC<Props> = ({ name, gender, birthyear, onPress }) => {
  return (
    <Styled.Container onPress={onPress}>
      <Styled.Name>{name}</Styled.Name>
      <Text>
        <Styled.Label>Gender: </Styled.Label>
        <Styled.Data>{gender}</Styled.Data>
      </Text>
      <Text>
        <Styled.Label>Birth year: </Styled.Label>
        <Styled.Data>{birthyear}</Styled.Data>
      </Text>
    </Styled.Container>
  );
};

export default Card;
