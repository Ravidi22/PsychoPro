import { Slot } from "expo-router";
import "react-native-reanimated";

import { AuthProvider } from "@/context/auth";
import SplashScreen from "./(auth)/splash";
import useSplashScreen from "@/hooks/useSplashScreen";
import { ThemeProvider } from "@/context/theme";
import { Provider as PaperProvider } from "react-native-paper";
import Snackbar from "@/components/Snackbar";
import Background from "@/components/BackGround";

export default function RootLayout() {
  const isSplashVisible = useSplashScreen();

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  return (
    <PaperProvider>
      <AuthProvider>
        <ThemeProvider>
          <Background>
            <Slot />
            <Snackbar />
          </Background>
        </ThemeProvider>
      </AuthProvider>
    </PaperProvider>
  );
}
