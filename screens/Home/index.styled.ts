import styled from "styled-components/native";
import LogoImg from "../../assets/star-wars-logo.png";

export const Container = styled.SafeAreaView`
  background-color: #000000;

  width: 100%;
  height: 100%;
`;

export const Logo = styled.Image.attrs(() => ({
  source: LogoImg,
  resizeMode: "contain",
}))`
  align-self: center;
  height: 80px;
  margin-top: 10%;
  margin-bottom: 5%;
`;

export const Input = styled.TextInput`
  height: 45px;
  border-radius: 25px;
  background: #260c1a;
  margin-bottom: 5%;
  color: #ffffff;
  padding-horizontal: 5%;
`;
