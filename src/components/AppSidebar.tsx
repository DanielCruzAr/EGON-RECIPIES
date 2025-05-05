import React from "react";
import {
    Bell,
    CircleUser,
    Clock,
    LockKeyhole,
    Thermometer,
    Webcam,
} from "lucide-react";

const AppSidebar = ({ className }: { className?: string }) => {
    const items = [
        { name: "TEMPERATURA", icon: <Thermometer /> },
        { name: "MODO ECO", icon: <CircleUser /> },
        { name: "ALARMA", icon: <Bell /> },
        { name: "LOCK", icon: <LockKeyhole /> },
        { name: "CONSUME PRONTO", icon: <Clock /> },
        { name: "CÁMARA", icon: <Webcam /> },
        { name: "RECETAS", icon: <CircleUser /> },
        { name: "LIMPIADOR DE OLORES", icon: <CircleUser /> },
        { name: "ASISTENTE DE VOZ EGON", icon: <CircleUser /> },
        { name: "SINCRONIZAR APP", icon: <CircleUser /> },
    ];

    return (
        <div
            className={`${
                className || ""
            } flex flex-col gap-4 scrollbar-thumb-foreground scrollbar-track-background scrollbar-thin`}
        >
            {items.map((item) => (
                <a
                    key={item.name}
                    className="flex items-center p-2 hover:bg-foreground/10 rounded-xl cursor-pointer"
                    href="#"
                >
                    <div className="rounded-full border-2 border-foreground p-2">
                        {item.icon}
                    </div>
                    <h3 className="ml-2">{item.name}</h3>
                </a>
            ))}
        </div>
    );
};

export default AppSidebar;
