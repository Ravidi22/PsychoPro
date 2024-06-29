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
      {/* {[1, 0.8, 0.5].map((opacity) => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: "#FFA726", opacity }]}
        ></View>
      ))} */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
  themeBtn: {
    position: "absolute",
    top: 10,
    right: 0,
    borderRadius: 5,
    backgroundColor: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  color: {
    width: "100%",
    height: 150,
    borderRadius: 25,
    borderCurve: "continuous",
    marginBottom: 15,
  },
});
