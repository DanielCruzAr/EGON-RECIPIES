"use client";

import TimerAccordion from "@/components/TimerAccordion";
import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import React from "react";

const Page = () => {
    const smells = useUIStore((state) => state.smells);
    const setSmells = useUIStore((state) => state.setSmells);
    const selectedDays = useUIStore((state) => state.selectedDays);
    const setSelectedDays = useUIStore((state) => state.setSelectedDays);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>LIMPIADOR DE OLORES</h2>
            <p className="text-gray-1">
                Activa y personaliza para una limpieza de olores dentro de tu
                refrigerador. Esta función dura 20 minutos.
            </p>
            <Switch
                checked={smells}
                onCheckedChange={() => setSmells(!smells)}
            />
            <TimerAccordion
                active={smells}
                selectedDays={selectedDays}
                setSelectedDays={setSelectedDays}
            />
        </div>
    );
};

export default Page;
