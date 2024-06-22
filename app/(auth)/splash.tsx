import React from "react";
import { View, Image, StyleSheet } from "react-native";

export default function PsychoProSplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/splash.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFA726",
  },
  image: {
    width: "80%",
    height: "80%",
  },
});
