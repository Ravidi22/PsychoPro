import create from "zustand";

interface User {
  name: string;
  rank: number;
}

interface AuthState {
  user: User | undefined;
  signIn: () => void;
  signOut: () => void;
  setRank: (newRank: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  signIn: () => set({ user: { name: "רביד", rank: 0 } }),
  signOut: () => set({ user: undefined }),
  setRank: (newRank: number) =>
    set((state) => ({
      user: state.user ? { ...state.user, rank: newRank } : undefined,
    })),
}));
