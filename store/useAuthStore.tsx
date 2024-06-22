import { create } from "zustand";

interface AuthState {
  user: string | undefined;
  signIn: () => void;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: "",
  signIn: () => set({ user: "רביד" }),
  signOut: () => set({ user: "" }),
}));
