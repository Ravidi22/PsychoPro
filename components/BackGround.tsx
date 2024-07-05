import React, { PropsWithChildren } from "react";
import { StyleSheet, ImageBackground } from "react-native";

const Background = ({ children }: PropsWithChildren) => {
  return (
    <ImageBackground
      source={require("../assets/images/gradient.png")}
      style={styles.background}
    >
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    width: "100%",
    height: "100%",
  },
});

export default Background;
