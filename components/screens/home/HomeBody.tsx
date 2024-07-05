import SubjectStatistic from "./sections/SubjectStatistic";
import { useRouter } from "expo-router";
import TileItem from "@/components/layaot/TileItem";
import { useSelectedSubjectStore } from "@/store/useSelectedSubjectStore";
import Typography from "@/components/Typography";
import Button from "@/components/Button";

const HomeBody = () => {
  const router = useRouter();

  const { selectedSubject } = useSelectedSubjectStore();

  return (
    <>
      {selectedSubject && <SubjectStatistic subject={selectedSubject} />}
      {!selectedSubject && (
        <>
          <Typography bold size={18}>
            נראה שעדיין לא התחלת לתרגל. מוכן להתחיל ולשפר את הכישורים שלך?{" "}
          </Typography>
          <Button onPress={() => router.replace("/(tabs)/practice")}>
            <Typography bold>בוא נתחיל!</Typography>
          </Button>
        </>
      )}
    </>
  );
};

export default HomeBody;
