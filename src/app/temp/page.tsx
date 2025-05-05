import { Switch } from "@/components/ui/switch";
import React from "react";

const temp = () => {
    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>TEMPERATURA</h2>
            <div className="flex gap-6 items-center justify-between w-45">
                <h3>UNIFORME</h3>
                <Switch />
            </div>
            <div className="flex gap-6 items-center justify-between w-45">
                <h3>POR ZONAS</h3>
                <Switch />
            </div>
        </div>
    );
};

export default temp;
