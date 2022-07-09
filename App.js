import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import { theme } from "./src/infrastructure/theme/"
import { EkadashiInfoScreen } from './src/features/ekadashi-info/screens/ekadashi-info.screen';
import LoginScreen from "./src/features/signIn-register/screens/login.screen";
import HomeScreen from "./src/features/home-screen/screens/home.screen";

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="EkadashiInfo" component={EkadashiInfoScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
    <ExpoStatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'lightblue',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
