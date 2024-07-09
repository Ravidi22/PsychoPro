import { useTheme } from "@/context/theme";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const Button = (props: TouchableOpacityProps) => {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: theme.surface,
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 20,
        ...(props.style as Object),
      }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
