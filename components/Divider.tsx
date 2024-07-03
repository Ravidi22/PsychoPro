import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 5,
    height: 1,
    width: "100%",
  },
});

export default Divider;
