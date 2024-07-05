import { PropsWithChildren } from "react";
import { TextStyle, View, ViewStyle } from "react-native";

interface TileLayoutProps extends PropsWithChildren {
  column?: boolean;
  style?: ViewStyle | TextStyle;
}

const TileLayout = (props: TileLayoutProps) => {
  return (
    <View style={{ flexDirection: props.column ? "column" : "row" }}>
      {props.children}
    </View>
  );
};

export default TileLayout;
