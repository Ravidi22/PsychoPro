import { useAuthStore } from "@/store/useAuthStore";
import { useRouter, useSegments } from "expo-router";
import * as React from "react";

export function AuthProvider({ children }: React.PropsWithChildren) {
  const rootSegment = useSegments()[0];
  const router = useRouter();
  const { user } = useAuthStore();

  React.useEffect(() => {
    if (user === undefined) return;
    if (!user && rootSegment !== "(auth)") {
      router.replace("/(auth)/login");
    } else if (user && rootSegment !== "(app)") {
      router.replace("/");
    }
  }, [user, rootSegment]);

  return <>{children}</>;
}
