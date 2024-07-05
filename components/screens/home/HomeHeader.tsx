import { StyleSheet, View } from "react-native";
import ThemeToggle from "@/components/theme/ThemeToggle";
import { useAuthStore } from "@/store/useAuthStore";
import Divider from "@/components/Divider";
import Typography from "@/components/Typography";
import SubjectScrollList from "./sections/SubjectScrollList";
import TileItem from "@/components/layaot/TileItem";

const HomeHeader = () => {
  const { user } = useAuthStore();

  return (
    <>
      <TileItem style={{ justifyContent: "space-between" }}>
        <ThemeToggle />
        <Typography bold size={20}>{`שלום ${user?.name}`}</Typography>
      </TileItem>
      <Divider />
      <SubjectScrollList />
    </>
  );
};

export default HomeHeader;
