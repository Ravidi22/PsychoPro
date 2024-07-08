import { useTheme } from "@/context/theme";
import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  const { theme } = useTheme();

  return <View style={[styles.separator, { backgroundColor: theme.grey }]} />;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    height: 1,
    width: "80%",
    alignSelf: "center",
  },
});

export default Divider;
