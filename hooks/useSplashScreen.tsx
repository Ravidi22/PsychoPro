import { useEffect, useState } from "react";
import { SplashScreen } from "expo-router";
import { useFonts } from "expo-font";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function useSplashScreen() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync();
    if (error) throw error;

    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
        setSplashVisible(false);
      }, 1000);
    }
  }, [error, loaded]);

  return isSplashVisible;
}
