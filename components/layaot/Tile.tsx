import { useTheme } from "@/context/theme";
import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const Tile = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.tile, { backgroundColor: theme.primary }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    padding: 20,
    marginBottom: 10,
    flex: 1,
  },
});
export default Tile;
