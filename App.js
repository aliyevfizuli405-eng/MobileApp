// React 
import { useState, useEffect } from "react";

// Expo
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// React Native
import {
  StyleSheet,
  Image,
  Text,
  Pressable,
  ImageBackground,
  Alert,
  View,
  TextInput
} from "react-native";

// Icons and colors
import play from "./assets/images/playicon.png";
import { reng } from "./src/colors";
import { fontsToLoad } from "./src/fonts";

// Screens and Componenets
import { RegisterScreen } from "./src/screens/auth/register/RegisterScreen";
import { Button } from "./src/components/Button/Button";
import { SignUpScreen } from "./src/screens/auth/signup/SignUpScreen";
import { OtpScreen } from "./src/screens/auth/otp/OtpScreen";
import { LoginScreen } from "./src/screens/auth/login/LoginScreen";


SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontError] = useFonts(fontsToLoad);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
    <StatusBar/>
  <RegisterScreen/>
    </>
  );
}

