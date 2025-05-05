import { Switch } from "@/components/ui/switch";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>ALARMA</h2>
            <p className="text-gray-1">
                Alarma de puerta abierta cada 2 minutos.
            </p>
            <Switch />
        </div>
    );
};

export default page;
