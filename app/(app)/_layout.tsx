import { Stack } from "expo-router";

export default function AppEntry() {
  return (
    <Stack>
      <Stack.Screen name="welcome" options={{ headerShown: false }} />
      <Stack.Screen name="rank" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="session"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>
  );
}
