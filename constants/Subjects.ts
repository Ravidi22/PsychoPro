import { IconLibrary } from "@/components/Icon";
import { Subject } from "@/store/useSelectedSubjectStore";

export interface Icon {
  name: string;
  library: IconLibrary;
}

export const Subjects: Array<Subject & { icon: Icon } & { color: string }> = [
  {
    id: "0",
    label: "אחוזים",
    icon: { name: "percent", library: "Feather" },
    color: "#B2A4FF",
  },
  {
    id: "1",
    label: "יחס",
    icon: { name: "circle-slice-3", library: "MaterialCommunityIcons" },
    color: "#FFB4B4",
  },
  {
    id: "2",
    label: "ממוצעים והספק",
    icon: { name: "superpowers", library: "FontAwesome" },
    color: "#FFDEB4",
  },
  {
    id: "3",
    label: "תנועה",
    icon: { name: "car", library: "FontAwesome" },
    color: "#FDF7C3",
  },
  {
    id: "4",
    label: "קומבינטוריקה",
    icon: { name: "graphql", library: "Fontisto" },
    color: "#DDFFBB",
  },
  {
    id: "5",
    label: "הסתברות",
    icon: { name: "chart-line", library: "MaterialCommunityIcons" },
    color: "#A87676",
  },
  {
    id: "6",
    label: "גרפים וטבלאות",
    icon: { name: "graph-bar", library: "Foundation" },
    color: "#95D2B3",
  },
  {
    id: "7",
    label: "ליניאריות ",
    icon: { name: "x", library: "Foundation" }, //change
    color: "#EFBC9B",
  },
  {
    id: "8",
    label: "אי-שוויונים",
    icon: { name: "greater-than-equal", library: "FontAwesome6" },
    color: "#AD88C6",
  },
  {
    id: "9",
    label: "רצפים",
    icon: { name: "arrange-bring-to-front", library: "MaterialCommunityIcons" },
    color: "#E493B3",
  },
  {
    id: "10",
    label: "גאומטריה",
    icon: { name: "triangle", library: "Feather" },
    color: "#80BCBD",
  },
];
