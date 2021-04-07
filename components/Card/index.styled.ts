import styled from "styled-components/native";
import { scale } from "react-native-size-matters";

export const Container = styled.TouchableOpacity`
  width: ${scale(150)}px;
  height: ${scale(150)}px;

  border-radius: 10px;

  background: #260c1a;

  padding-horizontal: 10px;
  padding-vertical: 5%;

  justify-content: space-between;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
`;

export const Label = styled.Text`
  color: #ffe81f;
  font-weight: 600;
`;

export const Data = styled.Text`
  color: #ffffff;
  text-transform: capitalize;
`;
