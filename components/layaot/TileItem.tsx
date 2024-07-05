import { PropsWithChildren } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";

interface TileItemProps extends PropsWithChildren {
  column?: boolean;
  style?: ViewStyle | TextStyle;
}

const TileItem = (props: TileItemProps) => {
  const styles = StyleSheet.create({
    container: {
      padding: 10,
      flexDirection: props.column ? "column" : "row",
      ...props.style,
      borderRadius: 20,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
};

export default TileItem;
