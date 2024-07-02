import { TouchableOpacity, StyleSheet } from "react-native";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/context/theme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <TouchableOpacity style={styles.themeBtn} onPress={toggleTheme}>
      {theme.background === "#fff" ? (
        <Ionicons name="moon-sharp" color={"black"} size={25} />
      ) : (
        <MaterialCommunityIcons
          name="white-balance-sunny"
          size={25}
          color="black"
        />
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
