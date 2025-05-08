"use client";

import { Card } from "@/components/ui/card";
import { egonIncludedOptions } from "@/constants/egon-settings";
import { useUIStore } from "@/stores/uiStore";
import { Check, ChevronLeft } from "lucide-react";
import React from "react";

const Page = () => {
    const egonIncluded = useUIStore((state) => state.egonIncluded);
    const setEgonIncluded = useUIStore((state) => state.setEgonIncluded);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>ASISTENTE DE VOZ EGON</h2>
            <div
                className="flex items-center gap-2 rounded-2xl bg-card-2 py-2 px-4 w-full mt-8 cursor-pointer"
                onClick={() => {
                    window.history.back();
                }}
            >
                <ChevronLeft className="text-gray-1" size={25} />
                <h3 className="text-gray-1">Configurar a EGON</h3>
            </div>
            <Card className="rounded-2xl border-0 bg-card-2 w-full h-[400px] overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin px-6">
                <div>
                    {egonIncludedOptions.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center cursor-pointer"
                            onClick={() => {
                                if (egonIncluded.includes(item)) {
                                    setEgonIncluded(
                                        egonIncluded.filter((i) => i !== item)
                                    );
                                } else {
                                    setEgonIncluded([...egonIncluded, item]);
                                }
                            }}
                        >
                            {egonIncluded.includes(item) ? (
                                <Check className="w-6" />
                            ) : (
                                <div className="w-6" />
                            )}
                            <div
                                className={`w-full p-2 ${
                                    index !== 0 && "border-t-2 border-gray-2"
                                }`}
                            >
                                <h3>{item}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default Page;
