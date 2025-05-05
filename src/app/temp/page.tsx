"use client";

import FridgeAccordion from "@/components/FridgeAccordion";
import { Switch } from "@/components/ui/switch";
import React, { useState } from "react";

const Page = () => {
    const [zonesAvailable, setZonesAvailable] = useState(false);

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>TEMPERATURA</h2>
            <div className="flex gap-6 items-center justify-between w-45">
                <h3>UNIFORME</h3>
                <Switch />
            </div>
            <div className="flex gap-6 items-center justify-between w-45">
                <h3>POR ZONAS</h3>
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
