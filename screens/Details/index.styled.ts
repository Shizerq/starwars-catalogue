import styled from "styled-components/native";

export const Background = styled.SafeAreaView`
  background-color: #000000;

  width: 100%;
  height: 100%;
`;

export const Container = styled.View`
  width: 90%;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 50px;
  color: #ffffff;
  font-weight: 800;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const Data = styled.Text`
  margin-vertical: 10px;
`;

export const Label = styled.Text`
  color: #ffe81f;
  font-weight: 700;
  font-size: 20px;
`;

export const Value = styled.Text`
  color: #ffffff;
  text-transform: capitalize;
  font-size: 20px;
`;

export const SectionTitle = styled.Text`
  font-size: 30px;
  color: #ffffff;
  font-weight: 800;
  margin-vertical: 2%;
`;
