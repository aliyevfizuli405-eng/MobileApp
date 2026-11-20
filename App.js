
import { useEffect, useState } from "react";

// Expo
import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as ExpoSplashScreen from "expo-splash-screen";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// React Native
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

// Fonts
import { fontsToLoad } from "./src/constants/fonts";

// Screens
import { RegisterScreen } from "./src/screens/auth/Register/RegisterScreen";
import { SignUpScreen } from "./src/screens/auth/SignUp/SignUpScreen";
import { OtpScreen } from "./src/screens/auth/OTP/OtpScreen";
import { LoginScreen } from "./src/screens/auth/Login/LoginScreen";
import { OnboardingScreen } from "./src/screens/Onboarding/OnboardingScreen1";
import { OnboardingScreen2 } from "./src/screens/Onboarding/OnboardingScreen2";
import { SplashScreen } from "./src/screens/splashScreen/SplashScreen";
;

// Prevent Expo native splash from hiding automatically
ExpoSplashScreen.preventAutoHideAsync().catch(() => {});

const Stack = createNativeStackNavigator();

// Navigation
const RootStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Ob1" component={OnboardingScreen} />
      <Stack.Screen name="Ob2" component={OnboardingScreen2}/>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

// Main App
export default function App() {
  const [fontsLoaded, fontError] = useFonts(fontsToLoad);

  const [isShowSplash, setIsShowSplash] = useState(true);

  // Hide native splash when fonts are ready
  useEffect(() => {
    if (fontsLoaded || fontError) {
      ExpoSplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded, fontError]);

  // Display custom splash for 3 seconds
  useEffect(() => {
    if (!fontsLoaded && !fontError) return;

    const timer = setTimeout(() => {
      setIsShowSplash(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [fontsLoaded, fontError]);

  // Wait for fonts
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
        edges={["top", "left", "right"]}
      >
        <StatusBar style="dark" />

        {isShowSplash ? (
          <SplashScreen />
        ) : (
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
