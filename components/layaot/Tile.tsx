import { useTheme } from "@/context/theme";
import React, { PropsWithChildren } from "react";
import { View, StyleSheet } from "react-native";

const Tile = ({ children }: PropsWithChildren) => {
  const { theme } = useTheme();
  return (
    <View style={[styles.tile, { backgroundColor: theme.surface }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  tile: {
    justifyContent: "center",
    padding: 20,
    flex: 1,
  },
});
export default Tile;
