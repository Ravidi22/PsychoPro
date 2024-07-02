import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import { useAuthStore } from "@/store/useAuthStore";
import SubjectStatistic from "./sections/SubjectStatistic";
import { commonStyles } from "@/styles/commonStyles";
import { useRouter } from "expo-router";
import TileItem from "@/components/TileItem";
import { useSelectedSubjectStore } from "@/store/useSelectedSubjectStore";
import Tile from "@/components/Tile";
import Typography from "@/components/Typography";

const HomeBody = () => {
  const { user } = useAuthStore();
  const router = useRouter();

  const { selectedSubject, setSelectedSubject } = useSelectedSubjectStore();

  return (
    <Tile style={{ borderRadius: 20 }}>
      {/* <SidePanel
        subjects={Categories.map((category) => category.label)}
        onSelect={setSelectedSubjuct}
      /> */}
      <TileItem column>
        {selectedSubject && <SubjectStatistic subject={selectedSubject} />}
        {!selectedSubject && (
          <>
            <Typography bold size={18}>
              נראה שעדיין לא התחלת לתרגל. מוכן להתחיל ולשפר את הכישורים שלך?{" "}
            </Typography>
            <TouchableOpacity
              onPress={() => router.replace("/(tabs)/practice")}
              style={commonStyles.button}
            >
              <Typography bold>בוא נתחיל!</Typography>
            </TouchableOpacity>
          </>
        )}
      </TileItem>
    </Tile>
  );
};

export default HomeBody;
