"use client";

import FridgeAccordion from "@/components/FridgeAccordion";
import { Switch } from "@/components/ui/switch";
import { useUIStore } from "@/stores/uiStore";
import React from "react";

const Page = () => {
    const zonesAvailable = useUIStore((state) => state.zonesAvailable);
    const setZonesAvailable = useUIStore((state) => state.setZonesAvailable);
    const uniformMode = useUIStore((state) => state.uniformMode);
    const setUniformMode = useUIStore((state) => state.setUniformMode);

    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <div className="flex gap-6 items-center justify-between w-[40%]">
                <h3 className="text-xl">UNIFORME</h3>
                <Switch
                    checked={uniformMode}
                    onCheckedChange={() => setUniformMode(!uniformMode)}
                />
            </div>
            <div className="flex gap-6 items-center justify-between w-[40%]">
                <h3 className="text-xl">POR ZONAS</h3>
                <Switch
                    checked={zonesAvailable}
                    onCheckedChange={() => setZonesAvailable(!zonesAvailable)}
                />
            </div>
            <FridgeAccordion active={zonesAvailable} />
        </div>
    );
};

export default Page;
