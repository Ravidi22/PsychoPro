import { ScrollView, StyleSheet } from "react-native";

import RankModal from "@/components/InitialRankModal";
import HomeHeader from "@/components/screens/home/HomeHeader";
import React from "react";
import HomeBody from "@/components/screens/home/HomeBody";
import Tile from "@/components/layaot/Tile";
import Background from "@/components/BackGround";

export default function HomeScreen() {
  return (
    <Background>
      <Tile>
        <RankModal />
        <HomeHeader />
        <HomeBody />
      </Tile>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
