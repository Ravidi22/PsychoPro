import { StyleSheet, View } from "react-native";

import ThemeToggle from "@/components/theme/ThemeToggle";
import { Text } from "@/components/theme/Themed";
import { useAuthStore } from "@/store/useAuthStore";
import Divider from "@/components/Divider";

const HomeHeader = () => {
  const { user } = useAuthStore();

  return (
    <View style={{ alignItems: "flex-end" }}>
      <ThemeToggle />
      <Text style={styles.title}>{`שלום ${user?.name}.`}</Text>
      <Text style={styles.subTitle}>{`אלו הנתונים שלך בתרגיל האחרון:`}</Text>
      <Divider />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default HomeHeader;
