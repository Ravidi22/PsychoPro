import Background from "@/components/Background";
import React from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
  return (
    <Background>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/snail.png")}
          style={{ width: "90%", height: "90%" }}
          resizeMode="contain"
        />
      </View>
    </Background>
  );
}
