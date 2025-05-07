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
}));
