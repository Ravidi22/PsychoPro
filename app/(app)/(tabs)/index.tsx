import { ScrollView, StyleSheet } from "react-native";

import RankModal from "@/components/InitialRankModal";
import HomeHeader from "@/components/screens/home/HomeHeader";
import React from "react";
import HomeBody from "@/components/screens/home/HomeBody";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <RankModal />
      <HomeHeader />
      <HomeBody />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
