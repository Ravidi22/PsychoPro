import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import Navigation from "./navigation/Navigation";
import SplashScreenComponent from "./screens/SplashScreen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  const onReady = useCallback(async () => {
    setAppIsReady(true);
    await SplashScreen.hideAsync();
  }, []);

  if (!appIsReady) {
    return <SplashScreenComponent onReady={onReady} />;
  }

  return <Navigation />;
}
