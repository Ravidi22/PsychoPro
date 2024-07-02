import axios, { HttpStatusCode } from "axios";
import { create } from "zustand";

interface User {
  name: string;
  rank: number;
}

interface AuthState {
  user: User | undefined;
  logIn: (name: string, password: string) => Promise<HttpStatusCode>;
  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<HttpStatusCode>;
  signOut: () => void;
  setRank: (newRank: number) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: undefined,
  logIn: async (name: string, password: string) => {
    set({ user: { name: "רביד", rank: 0 } }); // remove, only for development
    try {
      const response = await axios.post("http://localhost:3000/users/signin", {
        name,
        password,
      });
      set(response.data);
      return HttpStatusCode.Ok;
    } catch (error) {
      return HttpStatusCode.ExpectationFailed;
    }
  },
  signUp: async (name: string, email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:3000/users", {
        name,
        email,
        password,
      });
      set(response.data);
      return HttpStatusCode.Ok;
    } catch (error) {
      return HttpStatusCode.ExpectationFailed;
    }
  },
  signOut: () => set({ user: undefined }),
  setRank: (newRank: number) =>
    set((state) => ({
      user: state.user ? { ...state.user, rank: newRank } : undefined,
    })),
}));
