import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from '@react-navigation/native';

import { theme } from "./src/infrastructure/theme/"
import StackNavigator from "./src/utils/navigation/StackNavigator";
import { AuthProvider } from "./src/utils/hooks/useAuth";

export default function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <StackNavigator />
        </AuthProvider>
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
