import { PropsWithChildren } from "react";
import { TextStyle, View, ViewStyle } from "react-native";

interface EvenlySpacedElementProps extends PropsWithChildren {
  column?: boolean;
  gap?: number;
  style?: ViewStyle | TextStyle;
}
const EvenlySpacedElement = (props: EvenlySpacedElementProps) => {
  return (
    <View
      style={[
        {
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: props.column ? "column" : "row",
          gap: props.gap,
        },
        props.style,
      ]}
    >
      {props.children}
    </View>
  );
};
export default EvenlySpacedElement;
