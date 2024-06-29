import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface SubjectStatisticProps {
  subject: string;
}
const SubjectStatistic = (props: SubjectStatisticProps) => {
  return (
    <View>
      <Text style={styles.title}>{props.subject}</Text>
      <PieChart
        data={[
          { value: 70, color: "#FFA726" },
          { value: 30, color: "lightgray" },
        ]}
        donut
        innerRadius={60}
        radius={100}
        centerLabelComponent={() => {
          return <Text style={{ fontSize: 20 }}>70%</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
  },
});

export default SubjectStatistic;
