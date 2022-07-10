import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LoginScreen from "../../screens/login.screen";
import UserLogin from '../../components/auth/UserLogin'
import UserRegister from '../../components/auth/UserRegister';
import { EkadashiInfoScreen } from '../../screens/ekadashi-info/ekadashi-home.screen';
import useAuth from '../hooks/useAuth';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const { user } = useAuth()

  return (
    <Stack.Navigator>
        {user ? (
            <>
                <Stack.Screen options={{ headerShown: false }} name="EkadashiInfo" component={EkadashiInfoScreen} />
                <Stack.Screen name="Login-screen" component={LoginScreen} options={{ headerShown: false }} />
            </>
        ) : (
            <>
                <Stack.Screen options={{ headerShown: false }} name="EkadashiInfo" component={EkadashiInfoScreen} />
                <Stack.Screen name="UserLogin" component={UserLogin} options={{ headerShown: false }} />
                <Stack.Screen name="Login-screen" component={LoginScreen} options={{ headerShown: false }} />
            </>
        )
        }
    </Stack.Navigator>
  )
}

export default StackNavigator