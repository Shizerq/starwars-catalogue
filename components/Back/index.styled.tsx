import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons/";

export const Button = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  margin-top: 5%;
`;

export const Background = styled.View`
  background: white;

  border-radius: 22.5px;

  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const Back = styled(Ionicons)`
  position: absolute;
  align-self: center;
  color: black;
`;
