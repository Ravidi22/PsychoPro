import { useTheme } from "@/context/theme";
import { PropsWithChildren } from "react";
import { Text, TextProps, StyleProp, TextStyle } from "react-native";

interface TypographyProps extends PropsWithChildren<TextProps> {
  bold?: boolean;
  size?: number;
}

const Typography = (props: TypographyProps) => {
  const { theme } = useTheme();

  const dynamicStyles: StyleProp<TextStyle> = {
    fontWeight: props.bold ? "bold" : "normal",
    color: theme.text,
    fontSize: props.size,
    ...(props?.style as object),
  };

  return (
    <Text
      style={[dynamicStyles, { fontFamily: "SpaceMono" }]}
      onPress={props.onPress}
    >
      {props.children}
    </Text>
  );
};

export default Typography;
