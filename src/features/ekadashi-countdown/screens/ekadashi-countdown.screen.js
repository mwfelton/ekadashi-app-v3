import React, { useContext } from "react";
import styled from 'styled-components/native'
import { StatusBar, SafeAreaView, Text, View } from "react-native";
import { EkadashiContext } from "../../../services/ekadashi.context";
import EkadashiDate from '../components/ekadashi-countdown.component';

const AreaView = styled(SafeAreaView)`
    flex: 1;
`;

const Title = styled.Text`
  color:pink;
  font-size:50px;
`;

const ScreenView = styled(View)`
  flex: 1;
  background:lightblue;
`;

export const LandingScreen = () => {
  const ekadashiContext = useContext(EkadashiContext)
  return (
    <AreaView>
      <ScreenView>
        <Title>EKADASHI APP</Title>
        <EkadashiDate />
      </ScreenView>
    </AreaView>
  ) 
};
