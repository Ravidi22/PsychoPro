import BackgroundScreen from "@/components/BackGround";
import React from "react";
import { Image, View } from "react-native";

export default function SplashScreen() {
  return (
    <BackgroundScreen>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/images/snail.png")}
          style={{ width: "90%", height: "90%" }}
          resizeMode="contain"
        />
      </View>
    </BackgroundScreen>
  );
}
