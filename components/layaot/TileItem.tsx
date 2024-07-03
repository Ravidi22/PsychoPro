import { PropsWithChildren } from "react";
import { StyleSheet, TextStyle, View, ViewStyle } from "react-native";
import { useTheme } from "@/context/theme";

interface TileItemProps extends PropsWithChildren {
  column?: boolean;
  style?: ViewStyle | TextStyle;
}

const TileItem = (props: TileItemProps) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: theme.secondary,
      flexDirection: props.column ? "column" : "row",
      ...props.style,
      borderRadius: 20,
    },
  });

  return <View style={styles.container}>{props.children}</View>;
};

export default TileItem;
