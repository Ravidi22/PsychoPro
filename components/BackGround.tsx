import React, { PropsWithChildren } from "react";
import { ImageBackground, View, StyleSheet, ViewStyle } from "react-native";

interface BackgroundProps extends PropsWithChildren {
  style?: ViewStyle; // Make style optional
}

const Background = (props: BackgroundProps) => {
  return (
    <View style={[styles.container, props.style]}>
      <ImageBackground
        source={require("../assets/images/gradient.png")}
        style={styles.background}
      >
        {props.children}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: "hidden",
  },
  background: {
    width: "100%",
    height: "100%",
  },
});

export default Background;
