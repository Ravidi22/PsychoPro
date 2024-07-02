import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

import { Categories } from "@/constants/Categories";
import { useSelectedSubjectStore } from "@/store/useSelectedSubjectStore";
import Icon from "../../../Icon";
import Typography from "@/components/Typography";

const SubjectScrollList = () => {
  const { setSelectedSubject } = useSelectedSubjectStore();

  return (
    <ScrollView>
      <FlatList
        horizontal
        data={Categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => setSelectedSubject(item)}
          >
            <View
              style={{ ...styles.iconWrapper, backgroundColor: item.color }}
            >
              <Icon
                name={item.icon.name}
                size={32}
                color="#000"
                library={item.icon.library}
              />
            </View>
            <Typography style={styles.label}>{item.label}</Typography>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    margin: 10,
  },
  iconWrapper: {
    backgroundColor: "#eee",
    borderRadius: 50,
    width: 75,
    alignItems: "center",
    padding: 20,
  },
  label: {
    marginTop: 10,
    textAlign: "center",
    maxWidth: 100,
    fontSize: 16,
  },
  flatListContent: {
    paddingHorizontal: 10,
  },
});

export default SubjectScrollList;
