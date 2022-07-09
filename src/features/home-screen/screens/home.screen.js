import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import styled from 'styled-components/native'

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

const HomeScreen = () => {
  return (
    <AreaView>
      <ScreenView>
        <Title>EKADASHI APP</Title>
      </ScreenView>
    </AreaView>
  )
}

export default HomeScreen




