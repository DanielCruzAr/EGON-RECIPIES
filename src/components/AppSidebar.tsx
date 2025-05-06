"use client";

import React from "react";
import {
    Bell,
    CircleUser,
    Clock,
    LockKeyhole,
    Thermometer,
    Webcam,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useUIStore } from "@/stores/uiStore";

const AppSidebar = ({ className }: { className?: string }) => {
    const pathName = usePathname();
    const zonesAvailable = useUIStore((state) => state.zonesAvailable);
    const uniformMode = useUIStore((state) => state.uniformMode);
    const ecoMode = useUIStore((state) => state.ecoMode);
    const alarm = useUIStore((state) => state.alarm);
    const lock = useUIStore((state) => state.lock);

    const items = [
        {
            name: "TEMPERATURA",
            icon: <Thermometer />,
            href: "/temp",
            active: zonesAvailable && uniformMode,
        },
        {
            name: "MODO ECO",
            icon: <CircleUser />,
            href: "/eco",
            active: ecoMode,
        },
        {
            name: "ALARMA",
            icon: <Bell />,
            href: "/alarm",
            active: alarm,
        },
        {
            name: "LOCK",
            icon: <LockKeyhole />,
            href: "/lock",
            active: lock,
        },
        {
            name: "CONSUME PRONTO",
            icon: <Clock />,
            href: "/consume",
            active: pathName === "/consume",
        },
        {
            name: "CÁMARA",
            icon: <Webcam />,
            href: "/camera",
            active: pathName === "/camera",
        },
        {
            name: "RECETAS",
            icon: <CircleUser />,
            href: "/recipes",
            active: pathName === "/recipies",
        },
        {
            name: "LIMPIADOR DE OLORES",
            icon: <CircleUser />,
            href: "/smells",
            active: pathName === "/smells",
        },
        {
            name: "ASISTENTE DE VOZ EGON",
            icon: <CircleUser />,
            href: "/egon",
            active: pathName === "/egon",
        },
        {
            name: "SINCRONIZAR APP",
            icon: <CircleUser />,
            href: "/sincronize",
            active: pathName === "/sincronize",
        },
    ];

    return (
        <div
            className={`${
                className || ""
            } flex flex-col gap-4 scrollbar-thumb-foreground scrollbar-track-background scrollbar-thin`}
        >
            {items.map((item) => (
                <Link
                    key={item.name}
                    className="flex items-center p-2 hover:bg-foreground/10 hover:rounded-2xl cursor-pointer"
                    href={item.href || "#"}
                >
                    <div
                        className={`rounded-full border-2 ${
                            item.active ? "neon-border" : "border-foreground"
                        } p-2`}
                    >
                        {item.icon}
                    </div>
                    <h3
                        className={`hidden md:block ml-2 ${
                            item.href === pathName ? "neon-text" : ""
                        }`}
                    >
                        {item.name}
                    </h3>
                </Link>
            ))}
        </div>
    );
};

export default AppSidebar;
