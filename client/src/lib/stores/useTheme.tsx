import { create } from "zustand";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const useTheme = create<ThemeState>((set, get) => ({
  isDarkMode: false,
  
  toggleTheme: () => {
    const newDarkMode = !get().isDarkMode;
    set({ isDarkMode: newDarkMode });
    console.log('Theme toggled to:', newDarkMode ? 'dark' : 'light');
  }
}));