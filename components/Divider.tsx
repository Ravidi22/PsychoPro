import React from "react";
import { StyleSheet } from "react-native";
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
    marginVertical: 5,
    height: 1,
    width: "100%",
  },
});

export default Divider;
