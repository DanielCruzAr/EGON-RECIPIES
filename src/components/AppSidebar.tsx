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

const AppSidebar = ({ className }: { className?: string }) => {
    const pathName = usePathname();

    const items = [
        {
            name: "TEMPERATURA",
            icon: <Thermometer />,
            href: "/temp",
            active: pathName === "/temp",
        },
        {
            name: "MODO ECO",
            icon: <CircleUser />,
            href: "/eco",
            active: pathName === "/eco",
        },
        {
            name: "ALARMA",
            icon: <Bell />,
            href: "/alarm",
            active: pathName === "/alarm",
        },
        {
            name: "LOCK",
            icon: <LockKeyhole />,
            href: "/lock",
            active: pathName === "/lock",
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
                            item.active ? "border-primary" : "border-foreground"
                        } p-2`}
                    >
                        {item.icon}
                    </div>
                    <h3
                        className={`hidden md:block ml-2 ${
                            item.active ? "neon-text" : ""
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
