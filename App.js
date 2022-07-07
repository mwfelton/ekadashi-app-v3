import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from "./src/infrastructure/theme/"
import { LandingScreen } from './src/features/landing/screens/landing.screen';
import { EkadashiContextProvider } from "./src/services/ekadashi.context";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <EkadashiContextProvider />
          <Navigation />
      <EkadashiContextProvider />
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
