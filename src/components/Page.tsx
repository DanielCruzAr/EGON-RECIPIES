"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { usePathname } from "next/navigation";
import { Undo2 } from "lucide-react";
import Link from "next/link";
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

const Page = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    const pathName = usePathname();

    const getHeader = () => {
        switch (pathName) {
            case "/temp":
                return "TEMPERATURA";
            case "/eco":
                return "MODO ECO";
            case "/alarm":
                return "ALARMA";
            case "/lock":
                return "LOCK";
            case "/consume":
                return "CONSUME PRONTO";
            case "/camera":
                return "CÁMARA";
            case "/recipes":
                return "RECETAS";
            case "/smells":
                return "LIMPIADOR DE OLORES";
            case "/egon":
                return "ASISTENTE DE VOZ EGON";
            case "/egon/settings":
                return "ASISTENTE DE VOZ EGON";
            case "/egon/included":
                return "ASISTENTE DE VOZ EGON";
            case "/sincronize":
                return "SINCRONIZAR APP";
            default:
                return "RECETAS";
        }
    };

    const getHeaderIcon = () => {
        switch (pathName) {
            case "/temp":
                return <Thermometer />;
            case "/eco":
                return <CircleUser />;
            case "/alarm":
                return <Bell />;
            case "/lock":
                return <LockKeyhole />;
            case "/consume":
                return <Clock />;
            case "/smells":
                return <Webcam />;
            case "/egon":
                return <BookOpen />;
            case "/egon/settings":
                return <BookOpen />;
            case "/egon/included":
                return <BookOpen />;
            case "/camera":
                return <Webcam />;
            case "/recipes":
                return <BookOpen />;
            case "/shell":
                return <Shell />;
            case "/sincronize":
                return <MonitorSmartphone />;
            default:
                return <BookOpen />;
        }
    };

    return (
        <div className={className}>
            <Card className="w-full p-6 rounded-2xl h-full">
                {pathName !== "/" && (
                    <CardHeader className="flex items-center">
                        <div className="rounded-full border-2 border-foreground p-2">
                            {getHeaderIcon()}
                        </div>
                        <h2 className="text-2xl font-bold">{getHeader()}</h2>
                    </CardHeader>
                )}
                <CardContent className={pathName == "/" ? "h-full" : ""}>
                    {children}
                </CardContent>
            </Card>
            {pathName !== "/" && (
                <div className="flex justify-end w-full mt-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 hover:rounded-2xl hover:bg-foreground/10 p-2 cursor-pointer"
                    >
                        <Undo2 className="h-6 w-6 text-gray-2" />
                        <p className="text-lg text-gray-2">
                            Regresar a Pantalla Principal
                        </p>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Page;
