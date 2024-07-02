import { create } from "zustand";

interface SnackbarState {
  visible: boolean;
  message: string;
  variant: string;
  showSnackbar: (message: string, variant: string) => void;
  hideSnackbar: () => void;
}

const useSnackbarStore = create<SnackbarState>((set) => ({
  visible: false,
  message: "",
  variant: "default",
  showSnackbar: (message, variant = "default") =>
    set({ visible: true, message, variant }),
  hideSnackbar: () => set({ visible: false }),
}));

export default useSnackbarStore;
