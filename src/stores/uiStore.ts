import { create } from "zustand";

interface UIState {
    zonesAvailable: boolean;
    setZonesAvailable: (value: boolean) => void;
    uniformMode: boolean;
    setUniformMode: (value: boolean) => void;
    ecoMode: boolean;
    setEcoMode: (value: boolean) => void;
    alarm: boolean;
    setAlarm: (value: boolean) => void;
    lock: boolean;
    setLock: (value: boolean) => void;
    recipesValue: string;
    setRecipesValue: (value: string) => void;
    smells: boolean;
    setSmells: (value: boolean) => void;
    selectedDays: string[];
    setSelectedDays: (value: string[]) => void;
    egon: boolean;
    setEgon: (value: boolean) => void;
}

export const useUIStore = create<UIState>((set) => ({
    zonesAvailable: false,
    setZonesAvailable: (value) => set({ zonesAvailable: value }),
    uniformMode: false,
    setUniformMode: (value) => set({ uniformMode: value }),
    ecoMode: false,
    setEcoMode: (value) => set({ ecoMode: value }),
    alarm: false,
    setAlarm: (value) => set({ alarm: value }),
    lock: false,
    setLock: (value) => set({ lock: value }),
    recipesValue: "desayunos",
    setRecipesValue: (value) => set({ recipesValue: value }),
    smells: false,
    setSmells: (value) => set({ smells: value }),
    selectedDays: [],
    setSelectedDays: (value) => set({ selectedDays: value }),
    egon: false,
    setEgon: (value) => set({ egon: value }),
}));
