import { ScrollView, StyleSheet, Text } from "react-native";

import { View } from "@/components/Themed";
import { useAuthStore } from "@/store/useAuthStore";

export default function HomeScreen() {
  const user = useAuthStore();

  return (
    <ScrollView style={styles.container}>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text style={styles.title}>{`שלום ${user.user}`}</Text>
      {[1, 0.8, 0.5].map((opacity) => (
        <View
          key={opacity}
          style={[styles.color, { backgroundColor: "#FFA726", opacity }]}
        ></View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    height: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  color: {
    width: "100%",
    height: 150,
    borderRadius: 25,
    borderCurve: "continuous",
    marginBottom: 15,
  },
});
