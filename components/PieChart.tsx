import React from "react";
import {
  PieChartPropsType,
  PieChart as ReactPieChart,
} from "react-native-gifted-charts";
import Typography from "./Typography";
import { View } from "react-native";
import { useTheme } from "@/context/theme";

interface PieChartProps extends PieChartPropsType {
  percent: string;
}
const PieChart = (props: PieChartProps) => {
  const { theme } = useTheme();

  return (
    <ReactPieChart
      data={props.data}
      donut
      innerRadius={70}
      radius={100}
      backgroundColor={theme.background}
      centerLabelComponent={() => {
        return (
          <View style={{ alignItems: "center" }}>
            <Typography size={16}>התקדמות</Typography>
            <Typography size={20}>{props.percent}</Typography>
          </View>
        );
      }}
    />
  );
};

export default PieChart;
