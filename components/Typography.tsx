import { PropsWithChildren } from "react";
import { Text, TextStyle } from "react-native";

interface TypographyProps extends PropsWithChildren {
  bold?: boolean;
  light?: boolean;
  size?: number;
  style?: TextStyle;
  onPress?: () => void;
}

const Typography = (props: TypographyProps) => {
  const dynamicStyles: TextStyle = {
    fontWeight: props.bold ? "bold" : "normal",
    color: props.light ? "white" : "black",
    fontSize: props.size,
    ...props.style,
  };

  return (
    <Text style={dynamicStyles} onPress={props.onPress}>
      {props.children}
    </Text>
  );
};

export default Typography;
