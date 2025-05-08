import { create } from "zustand";
import { persist } from "zustand/middleware";

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
    selectedLanguage: number;
    setSelectedLanguage: (value: number) => void;
    heyEgon: boolean;
    setHeyEgon: (value: boolean) => void;
    egonVoiceVariant: string;
    setEgonVoiceVariant: (value: string) => void;
    egonVoice: number;
    setEgonVoice: (value: number) => void;
    speakingSpeed: string;
    setSpeakingSpeed: (value: string) => void;
}

export const useUIStore = create<UIState>()(
    persist(
        (set) => ({
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
            selectedLanguage: 0,
            setSelectedLanguage: (value) => set({ selectedLanguage: value }),
            heyEgon: false,
            setHeyEgon: (value) => set({ heyEgon: value }),
            egonVoiceVariant: "",
            setEgonVoiceVariant: (value) => set({ egonVoiceVariant: value }),
            egonVoice: 0,
            setEgonVoice: (value) => set({ egonVoice: value }),
            speakingSpeed: "normal",
            setSpeakingSpeed: (value) => set({ speakingSpeed: value }),
        }),
        {
            name: "egon-settings",
        }
    )
);

/*
(set) => ({
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
            selectedLanguage: 0,
            setSelectedLanguage: (value) => set({ selectedLanguage: value }),
            heyEgon: false,
            setHeyEgon: (value) => set({ heyEgon: value }),
            egonVoiceVariant: "",
            setEgonVoiceVariant: (value) => set({ egonVoiceVariant: value }),
            egonVoice: 0,
            setEgonVoice: (value) => set({ egonVoice: value }),
            speakingSpeed: "normal",
            setSpeakingSpeed: (value) => set({ speakingSpeed: value }),
        })
*/
