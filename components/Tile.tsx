import { PropsWithChildren } from "react";
import { View } from "./theme/Themed";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface TileProps extends PropsWithChildren {
  style?: ViewStyle | TextStyle;
}

const Tile = (props: TileProps) => {
  const styles = StyleSheet.create({
    container: {
      padding: 5,
      marginBottom: 10,
      marginHorizontal: 5,
      alignContent: "center",
      justifyContent: "center",
      ...props.style,
      overflow: "hidden",
    },
  });

  return <View style={styles.container}>{props.children}</View>;
};

export default Tile;
