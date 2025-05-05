import { Switch } from "@/components/ui/switch";
import React from "react";

const page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>MODO ECO</h2>
            <p className="text-gray-1">
                El Modo Eco reduce el consumo de energía del refrigerador
                mediante la optimización de su funcionamiento. Esta función
                ajusta automáticamente la configuración de otras funciones para
                mejorar la eficiencia energética.
            </p>
            <Switch />
        </div>
    );
};

export default page;
