import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProgressBar from "react-native-progress/Bar";

import Icon from "./Icon";
import TileItem from "./layaot/TileItem";
import EvenlySpacedElement from "./layaot/EvenlySpacedElement";
import Typography from "./Typography";
import { useTheme } from "@/context/theme";

interface ProgressTileProps {
  label: string;
  progress: number;
}
const ProgressTile = (props: ProgressTileProps) => {
  const { theme } = useTheme();

  return (
    <TileItem style={{ width: "80%", padding: 0 }}>
      <EvenlySpacedElement style={{ width: "100%" }}>
        <Icon name="left" size={20} library={"AntDesign"} />
        <EvenlySpacedElement column style={{ alignItems: "flex-end" }}>
          <EvenlySpacedElement>
            <Typography>{props.label}</Typography>
            <Typography bold size={16}>{` ${props.progress}%`}</Typography>
          </EvenlySpacedElement>
          <ProgressBar
            progress={(100 - props.progress) / 100}
            color={theme.grey}
            unfilledColor={theme.primary}
            borderWidth={0}
            height={10}
            width={200}
            borderRadius={5}
            style={styles.progressBar}
          />
        </EvenlySpacedElement>
        <View
          style={{
            backgroundColor: theme.primary,
            width: 30,
            height: 30,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Icon name="check" color="white" size={20} library={"FontAwesome"} />
        </View>
      </EvenlySpacedElement>
    </TileItem>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 10,
  },

  progressBar: {
    flex: 1,
    marginHorizontal: 10,
  },
});
export default ProgressTile;
