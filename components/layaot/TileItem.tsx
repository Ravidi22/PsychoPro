import { useTheme } from "@/context/theme";
import { PropsWithChildren } from "react";
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";

interface TileItemProps extends PropsWithChildren, TouchableOpacityProps {
  column?: boolean;
  style?: ViewStyle | TextStyle;
}

const TileItem = (props: TileItemProps) => {
  const { theme } = useTheme();
  const container: ViewStyle = {
    backgroundColor: theme.surface,
    borderRadius: 8,
    padding: 16,
    margin: 8,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: props.column ? "column" : "row",
    ...props.style,
  };

  return (
    <TouchableOpacity {...props} style={container}>
      {props.children}
    </TouchableOpacity>
  );
};

export default TileItem;
