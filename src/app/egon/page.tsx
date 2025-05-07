"use client";

import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
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
        </div>
    );
};

export default Page;
