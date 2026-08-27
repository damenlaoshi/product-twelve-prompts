import { create } from "zustand";
import { persist } from "zustand/middleware";

export type FontSize = "s" | "m" | "l";

type SettingsState = {
  ruby: boolean;
  english: boolean;
  fontSize: FontSize;
  setRuby: (v: boolean) => void;
  setEnglish: (v: boolean) => void;
  setFontSize: (v: FontSize) => void;
};

export const useSettings = create<SettingsState>()(
  persist(
    (set) => ({
      ruby: true,
      english: true,
      fontSize: "m",
      setRuby: (ruby) => set({ ruby }),
      setEnglish: (english) => set({ english }),
      setFontSize: (fontSize) => set({ fontSize }),
    }),
    { name: "twelve-prompts-settings", skipHydration: true },
  ),
);
