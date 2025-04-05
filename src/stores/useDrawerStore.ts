import { create } from "zustand";

interface DrawerState {
  isOpen: boolean;
  toggleDrawer: () => void;
}

export const useDrawerStore = create<DrawerState>((set) => ({
  isOpen: false,
  toggleDrawer: () => set((state) => ({ isOpen: !state.isOpen })),
}));
