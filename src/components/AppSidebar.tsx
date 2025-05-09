"use client";

import React from "react";
import {
    Bell,
    CircleUser,
    Clock,
    LockKeyhole,
    Thermometer,
    Webcam,
    BookOpen,
    Shell,
    MonitorSmartphone,
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
    const smells = useUIStore((state) => state.smells);
    const egon = useUIStore((state) => state.egon);

    const items = [
        {
            name: "TEMPERATURA",
            icon: <Thermometer />,
            href: "/temp",
            active: zonesAvailable && uniformMode,
            red: false,
        },
        {
            name: "MODO ECO",
            icon: <CircleUser />,
            href: "/eco",
            active: ecoMode,
            red: false,
        },
        {
            name: "ALARMA",
            icon: <Bell />,
            href: "/alarm",
            active: alarm,
            red: false,
        },
        {
            name: "LOCK",
            icon: <LockKeyhole />,
            href: "/lock",
            active: lock,
            red: true,
        },
        {
            name: "CONSUME PRONTO",
            icon: <Clock />,
            href: "/consume",
            active: false,
            red: false,
        },
        {
            name: "CÁMARA",
            icon: <Webcam />,
            href: "/camera",
            active: false,
            red: false,
        },
        {
            name: "RECETAS",
            icon: <BookOpen />,
            href: "/recipes",
            active: false,
            red: false,
        },
        {
            name: "LIMPIADOR DE OLORES",
            icon: <Shell />,
            href: "/smells",
            active: smells,
            red: false,
        },
        {
            name: "ASISTENTE DE VOZ EGON",
            icon: <CircleUser />,
            href: "/egon",
            active: egon,
            red: false,
        },
        {
            name: "SINCRONIZAR APP",
            icon: <MonitorSmartphone />,
            href: "/sincronize",
            active: false,
            red: false,
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
                            item.active
                                ? `${
                                      item.red ? "neon-border-2" : "neon-border"
                                  }`
                                : "border-foreground"
                        } p-2`}
                    >
                        {item.icon}
                    </div>
                    <h3
                        className={`hidden md:block ml-2 ${
                            pathName.includes(item.href) ? "neon-text" : ""
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
