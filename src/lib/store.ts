import { create } from "zustand";

// Define a state type
type State = {
  isExpanded: boolean;
  toggle: () => void;
};

// Create the store
export const useStore = create<State>((set) => ({
  isExpanded: false,
  toggle: () => set((state) => ({ isExpanded: !state.isExpanded })),
}));
