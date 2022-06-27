import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme/"
import { LandingScreen } from './src/features/landing/screens/landing.screen';

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <LandingScreen />
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
