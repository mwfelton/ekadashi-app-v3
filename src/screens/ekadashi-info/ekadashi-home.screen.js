import React from "react";
import styled from 'styled-components/native'
import { SafeAreaView, Text, View, Button } from "react-native";

import LoginScreen from "../login.screen";


import EkadashiDate from './ekadashi-home.component';

const AreaView = styled(SafeAreaView)`
    flex: 1;
`;

const Title = styled(Text)`
  color:pink;
  font-size:50px;
`;

const ScreenView = styled(View)`
  flex: 1;
  background:lightblue;
`;

export const EkadashiInfoScreen = ({ navigation }) => (
  <AreaView>
    <ScreenView>
      <Title>EKADASHI APP</Title>
      <EkadashiDate />
      <Button
        title='Login'
        onPress={() => navigation.navigate("Login-screen")}
     />
    </ScreenView>
  </AreaView>
);
