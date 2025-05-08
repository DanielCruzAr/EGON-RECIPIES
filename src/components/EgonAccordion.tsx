"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import {
    langauges,
    languageIndex,
    speekingSpeeds,
} from "@/constants/egon-settings";
import { Check } from "lucide-react";
import { useUIStore } from "@/stores/uiStore";
import { Switch } from "./ui/switch";

const EgonAccordion = () => {
    const selectedLanguage = useUIStore((state) => state.selectedLanguage);
    const setSelectedLanguage = useUIStore(
        (state) => state.setSelectedLanguage
    );
    const heyEgon = useUIStore((state) => state.heyEgon);
    const setHeyEgon = useUIStore((state) => state.setHeyEgon);
    const egonVoiceVariant = useUIStore((state) => state.egonVoiceVariant);
    const setEgonVoiceVariant = useUIStore(
        (state) => state.setEgonVoiceVariant
    );
    const egonVoice = useUIStore((state) => state.egonVoice);
    const setEgonVoice = useUIStore((state) => state.setEgonVoice);
    const speakingSpeed = useUIStore((state) => state.speakingSpeed);
    const setSpeakingSpeed = useUIStore((state) => state.setSpeakingSpeed);

    return (
        <Accordion
            type="multiple"
            className="w-full rounded-2xl bg-card-2 px-4 mt-6"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>
                    <div className="flex w-full items-center">
                        <h3>IDIOMA</h3>
                    </div>
                    {selectedLanguage !== 0 && (
                        <p>{languageIndex[selectedLanguage].name}</p>
                    )}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 p-2">
                    <div className="flex flex-col h-40 overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin px-6">
                        {langauges.map((language) => (
                            <div
                                key={language.id}
                                className="flex items-center cursor-pointer"
                                onClick={() => {
                                    setSelectedLanguage(language.id);
                                    setEgonVoiceVariant("");
                                    setEgonVoice(0);
                                }}
                            >
                                {selectedLanguage === language.id ? (
                                    <Check className="w-4" />
                                ) : (
                                    <div className="w-4"></div>
                                )}
                                <div className="w-full border-b-2 border-gray-2">
                                    <p
                                        className={`${
                                            selectedLanguage === language.id
                                                ? ""
                                                : "text-gray-1"
                                        }`}
                                    >
                                        {language.name}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="flex flex-col w-full">
                        <h3>"OYE EGON"</h3>
                        <p>Configura por medio de tu voz</p>
                    </div>
                    <div className="flex items-center justify-end w-full gap-2">
                        {egonVoiceVariant !== "" && <p>{egonVoiceVariant}</p>}
                        {egonVoice > 0 && <p>(Voz {egonVoice})</p>}
                    </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                        <p className="text-gray-3">
                            El refrigerador responderá al oir “OYE EGON” al
                            inicio de las peticiones.
                        </p>
                        <Switch
                            checked={heyEgon}
                            onCheckedChange={() => {
                                setHeyEgon(!heyEgon);
                            }}
                        />
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>
                    <div className="flex flex-col w-full">
                        <h3>VOZ</h3>
                        <p className="text-gray-3">
                            Configura el acento de EGON
                        </p>
                    </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col gap-10 p-4">
                        <div className="flex flex-col">
                            <p className="text-gray-3">VARIANTES</p>
                            {selectedLanguage !== 0 &&
                                languageIndex[selectedLanguage].variants.map(
                                    (variant, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center cursor-pointer gap-2"
                                            onClick={() => {
                                                setEgonVoiceVariant(variant);
                                            }}
                                        >
                                            {egonVoiceVariant === variant ? (
                                                <Check className="w-4" />
                                            ) : (
                                                <div className="w-4"></div>
                                            )}
                                            <div
                                                className={`w-full ${
                                                    index !== 0 &&
                                                    "border-t-2 border-gray-2"
                                                }`}
                                            >
                                                <p
                                                    className={`${
                                                        egonVoiceVariant !==
                                                            variant &&
                                                        "text-gray-3"
                                                    }`}
                                                >
                                                    {variant}
                                                </p>
                                            </div>
                                        </div>
                                    )
                                )}
                        </div>
                        <div className="flex flex-col">
                            <p className="text-gray-3">VOZ</p>
                            <div
                                className="flex items-center cursor-pointer gap-2"
                                onClick={() => {
                                    setEgonVoice(1);
                                }}
                            >
                                {egonVoice === 1 ? (
                                    <Check className="w-4" />
                                ) : (
                                    <div className="w-4"></div>
                                )}
                                <div className="w-full border-b-2 border-gray-2">
                                    <p
                                        className={`${
                                            egonVoice === 1 ? "" : "text-gray-3"
                                        }`}
                                    >
                                        Voz 1 (Hombre)
                                    </p>
                                </div>
                            </div>
                            <div
                                className="flex items-center cursor-pointer gap-2"
                                onClick={() => {
                                    setEgonVoice(2);
                                }}
                            >
                                {egonVoice === 2 ? (
                                    <Check className="w-4" />
                                ) : (
                                    <div className="w-4"></div>
                                )}
                                <div className="w-full">
                                    <p
                                        className={`${
                                            egonVoice === 2 ? "" : "text-gray-3"
                                        }`}
                                    >
                                        Voz 2 (Mujer)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>
                    <div className="flex w-full items-center">
                        <h3>VELOCIDAD DE HABLA</h3>
                    </div>
                    <div className="flex w-full items-center justify-end">
                        {speakingSpeed !== "" && <p>{speakingSpeed}</p>}
                    </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <p className="text-gray-3">VARIANTES</p>
                        {speekingSpeeds.map((variant, index) => (
                            <div
                                key={index}
                                className="flex items-center cursor-pointer gap-2"
                                onClick={() => {
                                    setSpeakingSpeed(variant);
                                }}
                            >
                                {speakingSpeed === variant ? (
                                    <Check className="w-4" />
                                ) : (
                                    <div className="w-4"></div>
                                )}
                                <div
                                    className={`w-full ${
                                        index !== 0 &&
                                        "border-t-2 border-gray-2"
                                    }`}
                                >
                                    <p
                                        className={`${
                                            speakingSpeed !== variant &&
                                            "text-gray-3"
                                        }`}
                                    >
                                        {variant}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default EgonAccordion;
