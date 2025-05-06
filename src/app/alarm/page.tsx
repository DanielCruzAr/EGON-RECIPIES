"use client";

import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import React from "react";

const Page = () => {
    const alarm = useUIStore((state) => state.alarm);
    const setAlarm = useUIStore((state) => state.setAlarm);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>ALARMA</h2>
            <p className="text-gray-1">
                Alarma de puerta abierta cada 2 minutos.
            </p>
            <Switch checked={alarm} onCheckedChange={() => setAlarm(!alarm)} />
        </div>
    );
};

export default Page;
