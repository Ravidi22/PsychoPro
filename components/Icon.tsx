// GenericIcon.tsx
import React from "react";
import { ViewStyle, TextStyle } from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Feather,
  Foundation,
  FontAwesome6,
} from "@expo/vector-icons";

export type IconLibrary =
  | "Ionicons"
  | "MaterialIcons"
  | "FontAwesome"
  | "FontAwesome6"
  | "Fontisto"
  | "MaterialCommunityIcons"
  | "Feather"
  | "Foundation";

type IconProps = {
  name: string;
  library: IconLibrary;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
};

const Icon: React.FC<IconProps> = ({
  name,
  library,
  size = 24,
  color = "black",
  style,
}) => {
  let IconComponent;

  switch (library) {
    case "Ionicons":
      IconComponent = Ionicons;
      break;
    case "MaterialIcons":
      IconComponent = MaterialIcons;
      break;
    case "FontAwesome":
      IconComponent = FontAwesome;
      break;
    case "FontAwesome6":
      IconComponent = FontAwesome6;
      break;
    case "Fontisto":
      IconComponent = Fontisto;
      break;
    case "MaterialCommunityIcons":
      IconComponent = MaterialCommunityIcons;
      break;
    case "Feather":
      IconComponent = Feather;
      break;
    case "Foundation":
      IconComponent = Foundation;
      break;
    default:
      throw new Error(`Unknown icon library: ${library}`);
  }

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Icon;
