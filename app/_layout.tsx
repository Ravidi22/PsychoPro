import { Slot } from "expo-router";
import "react-native-reanimated";

import { AuthProvider } from "@/context/auth";
import SplashScreen from "./(auth)/splash";
import useSplashScreen from "@/hooks/useSplashScreen";
import { ThemeProvider } from "@/context/theme";

export default function RootLayout() {
  const isSplashVisible = useSplashScreen();

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Slot />
      </ThemeProvider>
    </AuthProvider>
  );
}
