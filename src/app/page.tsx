"use client";
import React, { useEffect, useState } from "react";
import {
    Thermometer,
    Clock,
    Shell,
    ChevronRight,
    BookOpen,
} from "lucide-react";

const menuCards = [
    {
        icon: <Thermometer />,
        label: "POR ZONAS",
        href: "/temp",
        title: "TEMPERATURA",
        content: (
            <div className="flex flex-col bg-gray-2 p-2 rounded-2xl w-full">
                <div className="flex w-full justify-between border-b-2 border-black/45">
                    <p className="text-xs">CONGELADOR</p>
                    <p className="text-xs text-black/45">-18°C</p>
                </div>
                <div className="flex w-full justify-between">
                    <p className="text-xs">REFRIGERADOR</p>
                    <p className="text-xs text-black/45">4°C</p>
                </div>
            </div>
        ),
    },
    {
        icon: <Clock />,
        label: "QUESO OAXACA",
        href: "/consume",
        title: "CONSUME PRONTO",
        content: (
            <div className="flex w-full items-center justify-center">
                <p className="text-xs text-black/45">hace 2 semanas</p>
            </div>
        ),
    },
    {
        icon: <Shell />,
        label: "ACTIVO 9:00 P.M",
        href: "/smells",
        title: "LIMPIADOR DE OLORES",
        content: (
            <div className="flex w-full justify-center">
                <p className="text-xs">Lun, Mié, Vie, Dom</p>
            </div>
        ),
    },
];

export default function Home() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full w-full items-center">
            <div className="flex w-full justify-end">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 mx-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v3m0 12v3m9-9h-3M6 12H3m15.364-6.364l-2.121 2.121M6.757 17.243l-2.121-2.121m12.728 0l2.121 2.121M6.757 6.757l2.121 2.121M12 8a4 4 0 100 8 4 4 0 000-8z"
                    />
                </svg>
                <p>28°C</p>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.05 11.293a8 8 0 0113.9 0m-2.83 2.828a4 4 0 00-8.24 0m1.415 1.415a1 1 0 011.415 0m2.83 0a1 1 0 011.415 0"
                    />
                </svg>
            </div>
            <div className="flex flex-col items-center justify-center w-full h-full gap-2">
                <h4>Querétaro, Querétaro</h4>
                <h1 className="font-semibold text-5xl text-white neon-text">
                    ¡Hola, Mar!
                </h1>
                <div className="flex flex-col items-center justify-center p-2">
                    <h5>{currentDate.toDateString()}</h5>
                    <h1 className="text-6xl">
                        {currentDate.toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                        })}
                    </h1>
                </div>
                <div className="grid grid-rows-3 grid-cols-12 w-full h-full gap-4 overflow-auto lg:overflow-visible">
                    {menuCards.map((card, index) => (
                        <div
                            key={index}
                            className="col-span-4 row-span-2 flex flex-col items-center justify-between rounded-2xl p-4 bg-card-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                            onClick={() => (window.location.href = card.href)}
                        >
                            <div className="flex flex-col w-full items-center justify-center gap-2">
                                <div className="rounded-full border-2 border-foreground p-2">
                                    {card.icon}
                                </div>
                                <div className="flex flex-col w-full items-center justify-center">
                                    <h4>{card.label}</h4>
                                    {card.content}
                                </div>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center mt-4">
                                <p className="text-xs">{card.title}</p>
                                <div className="flex items-center">
                                    <p className="text-xs neon-text font-bold">
                                        Ir
                                    </p>
                                    <ChevronRight size={15} />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div
                        className="col-span-12 row-span-1 flex items-center justify-between rounded-2xl p-4 bg-card-2 cursor-pointer"
                        onClick={() => (window.location.href = "/recipes")}
                    >
                        <div className="rounded-full border-2 border-foreground p-2">
                            <BookOpen />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <h4>RECETAS</h4>
                            <p className="text-black/45 text-xs">SNACKS</p>
                        </div>
                        <p className="text-black/45">Ensalada de Verduras</p>
                        <p className="text-black/45">
                            Pan de plátano con berry
                        </p>
                        <div className="flex items-center">
                            <p className="text-xs neon-text font-bold">Ir</p>
                            <ChevronRight size={15} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex h-full w-full justify-center items-end mt-4">
                <p className="text-gray-2">
                    Toca para personalizar pantalla principal
                </p>
            </div>
        </div>
    );
}
