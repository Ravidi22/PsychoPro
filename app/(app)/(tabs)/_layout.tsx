import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { useClientOnlyValue } from "@/hooks/useClientOnlyValue";
import TabBar from "@/components/tabs/TabBar";
import { useTheme } from "@/context/theme";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        headerShown: useClientOnlyValue(false, true),
      }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="practice"
        options={{
          title: "תרגול",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          title: "בית",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: "למידה",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
