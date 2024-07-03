import Typography from "@/components/Typography";
import { Subject } from "@/store/useSelectedSubjectStore";
import { View, Text, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

interface SubjectStatisticProps {
  subject: Subject;
}
const SubjectStatistic = (props: SubjectStatisticProps) => {
  return (
    <View>
      <Typography bold size={20}>
        {props.subject.label}
      </Typography>
      <PieChart
        data={[
          { value: 70, color: "#FFA726" },
          { value: 30, color: "lightgray" },
        ]}
        donut
        innerRadius={60}
        radius={100}
        centerLabelComponent={() => {
          return <Typography size={20}>70%</Typography>;
        }}
      />
    </View>
  );
};

export default SubjectStatistic;
