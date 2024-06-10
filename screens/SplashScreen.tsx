// SplashScreenComponent.js
import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

SplashScreen.preventAutoHideAsync();

const SplashScreenComponent = ({ onReady }) => {
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        onReady();
      }
    }

    prepare();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Welcome to PsychoPro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFA726",
  },
});

export default SplashScreenComponent;
