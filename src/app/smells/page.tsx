"use client";

import TimerAccordion from "@/components/TimerAccordion";
import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import React, { useState } from "react";

const Page = () => {
    const smells = useUIStore((state) => state.smells);
    const setSmells = useUIStore((state) => state.setSmells);
    const selectedDays = useUIStore((state) => state.selectedDays);
    const setSelectedDays = useUIStore((state) => state.setSelectedDays);
    const [timerValue, setTimerValue] = useState({
        hours: 0,
        minutes: 0,
        meridian: "AM",
    });

    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
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
                timerValue={timerValue}
                setTimerValue={setTimerValue}
            />
        </div>
    );
};

export default Page;
