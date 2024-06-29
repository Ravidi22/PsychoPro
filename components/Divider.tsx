import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { View } from "@/components/theme/Themed";

const Divider = () => {
  return (
    <View
      style={styles.separator}
      lightColor="#eee"
      darkColor="rgba(255,255,255,0.1)"
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default Divider;
