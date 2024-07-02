import { StyleSheet, View } from "react-native";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useAuthStore } from "@/store/useAuthStore";
import Divider from "@/components/Divider";
import Tile from "@/components/Tile";
import Typography from "@/components/Typography";
import SubjectScrollList from "./sections/SubjectScrollList";

const HomeHeader = () => {
  const { user } = useAuthStore();

  return (
    <Tile style={styles.container}>
      <View style={styles.rowContainer}>
        <ThemeToggle />
        <Typography bold size={20}>{`שלום ${user?.name}`}</Typography>
      </View>
      <Divider />
      <SubjectScrollList />
    </Tile>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    marginHorizontal: 0,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default HomeHeader;
