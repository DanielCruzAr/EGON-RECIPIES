"use client";

import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import { ChevronRight } from "lucide-react";
import React from "react";

const Page = () => {
    const egon = useUIStore((state) => state.egon);
    const setEgon = useUIStore((state) => state.setEgon);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>ASISTENTE DE VOZ "EGON"</h2>
            <p className="text-gray-1">
                EGON es un asistente inteligente que te ayuda a encontrar
                información y a realizar tareas.
            </p>
            <Switch
                checked={egon}
                onCheckedChange={() => {
                    setEgon(!egon);
                }}
            />
            <div
                className={`flex items-center justify-between rounded-2xl py-2 px-4 w-2/5 mt-8 cursor-pointer ${
                    egon ? "bg-card-2" : "bg-card-2/10"
                }`}
                onClick={() => {
                    if (egon) {
                        window.location.href = "/egon/settings";
                    }
                }}
            >
                <h3 className={`${egon ? "text-gray-1" : "text-gray-1/10"}`}>
                    Configurar a EGON
                </h3>
                <ChevronRight
                    className={`${egon ? "text-gray-1" : "text-gray-1/10"}`}
                    size={25}
                />
            </div>
            <div
                className={`flex items-center justify-between rounded-2xl py-2 px-4 w-2/5 mt-8 cursor-pointer ${
                    egon ? "bg-card-2" : "bg-card-2/10"
                }`}
            >
                <h3 className={`${egon ? "text-gray-1" : "text-gray-1/10"}`}>
                    Incluidos con EGON
                </h3>
                <ChevronRight
                    className={`${egon ? "text-gray-1" : "text-gray-1/10"}`}
                    size={25}
                />
            </div>
        </div>
    );
};

export default Page;
