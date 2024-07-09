import Button from "@/components/Button";
import Typography from "@/components/Typography";
import { ranks } from "@/constants/Ranks";
import { useTheme } from "@/context/theme";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from "react-native";

export default function Rank() {
  const { theme } = useTheme();

  const [selectedRank, setSelectedRank] = useState("");
  return (
    <View style={{ padding: 20, rowGap: 12 }}>
      <Typography
        size={30}
        style={{
          color: theme.background,
          fontWeight: 900,
        }}
      >
        מה הרמה שלך?
      </Typography>
      <Typography size={18} style={{ color: theme.background }}>
        אני פה לעזור לך להרים את הרמה הלאה!
      </Typography>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <FlatList
          horizontal
          data={Object.values(ranks)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.rankCard,
                {
                  backgroundColor:
                    selectedRank === item ? theme.secondary : undefined,
                  borderColor: theme.secondary,
                },
              ]}
              onPress={() => setSelectedRank(item)}
            >
              <Image
                source={require("../../assets/images/snail.png")}
                style={{ width: "50%", height: "50%" }}
                resizeMode="cover"
              />
              <Typography size={18} style={{ color: theme.background }}>
                {item}
              </Typography>
            </TouchableOpacity>
          )}
        />
        <Button style={{ width: "90%", borderRadius: 12 }}>
          <Typography size={18} bold>
            קדימה, נצא לדרך!
          </Typography>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rankCard: {
    paddingVertical: 50,
    paddingHorizontal: 15,
    alignItems: "center",
    margin: 12,
    borderWidth: 1,
    borderRadius: 15,
  },
});
