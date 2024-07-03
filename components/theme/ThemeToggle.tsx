import { TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/context/theme";
import { darkTheme } from "./themes";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity style={styles.themeBtn} onPress={toggleTheme}>
      {theme === darkTheme ? (
        <Ionicons name="moon-sharp" color={"white"} size={25} />
      ) : (
        <MaterialCommunityIcons name="white-balance-sunny" size={25} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeBtn: {
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default ThemeToggle;
