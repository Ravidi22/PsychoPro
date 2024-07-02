import { create } from "zustand";

export interface Subject {
  id: string;
  label: string;
}

interface SelectedSubjectState {
  selectedSubject: Subject | undefined;
  setSelectedSubject: (subject: Subject) => void;
}

export const useSelectedSubjectStore = create<SelectedSubjectState>((set) => ({
  selectedSubject: undefined,
  setSelectedSubject: (value: Subject) => set({ selectedSubject: value }),
}));
