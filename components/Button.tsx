import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

const Button = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        backgroundColor: "#FFA726",
        maxWidth: "40%",
        padding: 15,
        borderRadius: 25,
        alignItems: "center",
        marginTop: 20,
      }}
    >
      {props.children}
    </TouchableOpacity>
  );
};

export default Button;
