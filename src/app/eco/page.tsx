"use client";

import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import React from "react";

const Page = () => {
    const ecoMode = useUIStore((state) => state.ecoMode);
    const setEcoMode = useUIStore((state) => state.setEcoMode);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>MODO ECO</h2>
            <p className="text-gray-1">
                El Modo Eco reduce el consumo de energía del refrigerador
                mediante la optimización de su funcionamiento. Esta función
                ajusta automáticamente la configuración de otras funciones para
                mejorar la eficiencia energética.
            </p>
            <Switch
                checked={ecoMode}
                onCheckedChange={() => setEcoMode(!ecoMode)}
            />
        </div>
    );
};

export default Page;
