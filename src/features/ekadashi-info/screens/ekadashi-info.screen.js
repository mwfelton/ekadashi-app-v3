import React from "react";
import styled from 'styled-components/native'
import { SafeAreaView, Text, View } from "react-native";

import EkadashiDate from '../components/ekadashi-info.component';

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

export const EkadashiInfoScreen = () => (
  <AreaView>
    <ScreenView>
      <Title>EKADASHI APP</Title>
      <EkadashiDate />
    </ScreenView>
  </AreaView>
);