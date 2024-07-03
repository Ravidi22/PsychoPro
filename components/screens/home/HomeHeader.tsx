import { StyleSheet, View } from "react-native";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useAuthStore } from "@/store/useAuthStore";
import Divider from "@/components/Divider";
import Tile from "@/components/layaot/Tile";
import Typography from "@/components/Typography";
import SubjectScrollList from "./sections/SubjectScrollList";
import TileItem from "@/components/layaot/TileItem";

const HomeHeader = () => {
  const { user } = useAuthStore();

  return (
    <Tile>
      <TileItem style={{ justifyContent: "space-between" }}>
        <ThemeToggle />
        <Typography bold size={20}>{`שלום ${user?.name}`}</Typography>
      </TileItem>
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
