import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "../../screens/login.screen";
import UserLogin from '../../components/auth/UserLogin'
import UserRegister from '../../components/auth/UserRegister';
import { EkadashiInfoScreen } from '../../screens/ekadashi-info/ekadashi-home.screen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="EkadashiInfo" component={EkadashiInfoScreen} />
          <Stack.Screen name="UserLogin" component={UserLogin} options={{ headerShown: false }} />
          <Stack.Screen name="Login-screen" component={LoginScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default StackNavigator