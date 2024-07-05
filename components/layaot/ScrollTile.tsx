import { useTheme } from "@/context/theme";
import React, { PropsWithChildren } from "react";
import { ScrollView, StyleSheet } from "react-native";

const ScrollTile = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  return (
    <ScrollView
      contentContainerStyle={[styles.tile, { backgroundColor: theme.primary }]}
    >
      {children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  tile: {
    padding: 20,
    borderRadius: 10,
    flex: 1,
  },
});

export default ScrollTile;
