import { useTheme } from "@/context/theme";
import { View } from "react-native";

export const HeaderShape = () => {
  const { theme } = useTheme();
  return (
    <View
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 100,
        height: 100,
        backgroundColor: theme.secondary,
        borderBottomLeftRadius: 50,
      }}
    />
  );
};
