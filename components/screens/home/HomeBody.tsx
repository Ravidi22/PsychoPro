import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useAuthStore } from "@/store/useAuthStore";
import SidePanel from "./sections/SidePanel";
import SubjectStatistic from "./sections/SubjectStatistic";
import { useState } from "react";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";

const HomeBody = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  const [selectedSubject, setSelectedSubjuct] = useState("");

  return (
    <View style={styles.container}>
      <SidePanel subjects={["1", "2", "3"]} onSelect={setSelectedSubjuct} />
      {selectedSubject ? (
        <SubjectStatistic subject={selectedSubject} />
      ) : (
        <View style={styles.container}>
          <Text style={styles.subTitle}>
            נראה שעדיין לא התחלת לתרגל. מוכן להתחיל ולשפר את הכישורים שלך?{" "}
          </Text>
          <TouchableOpacity
            onPress={() => router.replace("/(tabs)/practice")}
            style={commonStyles.button}
          >
            <Text style={commonStyles.buttonText}>בוא נתחיל!</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignContent: "center",
    justifyContent: "center",
  },
  subTitle: {
    fontSize: 18,
    marginBottom: 15,
  },
});

export default HomeBody;
