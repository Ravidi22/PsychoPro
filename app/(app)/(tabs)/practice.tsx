import Divider from "@/components/Divider";
import Icon from "@/components/Icon";
import TileItem from "@/components/layaot/TileItem";
import LoadingSpinner from "@/components/LoadingSpinner";
import Typography from "@/components/Typography";
import { Subjects } from "@/constants/Subjects";
import { useTheme } from "@/context/theme";
import usePractice from "@/hooks/usePractice";
import { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

export default function Practice() {
  const { getQuestions } = usePractice();
  const { theme } = useTheme();
  const [loadingSubject, setLoadingSubject] = useState<string | null>();

  const handlePress = async (subjectId: string) => {
    setLoadingSubject(subjectId);
    await getQuestions(subjectId);
    setLoadingSubject(null);
  };
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* maybe title */}
      <View></View>
      <Divider />
      <FlatList
        data={Subjects}
        renderItem={({ item }) => (
          <TileItem
            column
            style={{ height: 100, rowGap: 10 }}
            onPress={() => handlePress(item.id)}
          >
            {loadingSubject === item.id ? (
              <LoadingSpinner color={theme.primary} />
            ) : (
              <Icon name={item.icon.name} library={item.icon.library} />
            )}
            <Typography>{item.label}</Typography>
          </TileItem>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 8,
  },
});
