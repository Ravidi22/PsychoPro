import Background from "@/components/Background";
import EvenlySpacedElement from "@/components/layaot/EvenlySpacedElement";
import TileItem from "@/components/layaot/TileItem";
import PieChart from "@/components/PieChart";
import ProgressTile from "@/components/ProgressTile";
import TextField from "@/components/TextField";
import ThemeToggle from "@/components/theme/ThemeToggle";
import Typography from "@/components/Typography";
import { useTheme } from "@/context/theme";
import { useAuthStore } from "@/store/useAuthStore";
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";

export default function HomeScreen() {
  const { user } = useAuthStore();
  const { theme } = useTheme();

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <EvenlySpacedElement>
        <ThemeToggle />
        <TextField
          placeholder="חיפוש חופשי"
          value={searchQuery}
          onChangeText={setSearchQuery}
          containerStyle={{ width: "80%" }}
        />
      </EvenlySpacedElement>
      <View style={styles.welcomeContainer}>
        <Typography bold size={20}>{`היי ${user?.name} 👋`}</Typography>
        <Typography>נראה שאנחנו רק בהתחלה!</Typography>
      </View>
      <View style={styles.backgroundContainer}>
        <Background style={styles.background}>
          <EvenlySpacedElement column>
            <EvenlySpacedElement gap={40}>
              <Typography size={20}>רמת קושי</Typography>
              <Typography size={20} bold>
                קצת תוצאות:
              </Typography>
            </EvenlySpacedElement>
            <TileItem
              style={{ width: "80%", paddingVertical: 100, borderRadius: 25 }}
            >
              <PieChart
                data={[
                  { value: 30, color: theme.secondary },
                  { value: 30, color: theme.primary },
                  { value: 30, color: theme.grey },
                ]}
                percent="20%"
              />
            </TileItem>
            <ProgressTile progress={50} label="תרגולים" />
            <ProgressTile progress={50} label="חומרי לימוד" />
          </EvenlySpacedElement>
        </Background>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  welcomeContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  backgroundContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
});
