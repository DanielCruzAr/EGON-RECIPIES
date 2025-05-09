"use client";
import React, { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";

export default function Home() {
    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col h-full w-full items-center justify-center relative">
            <div className="flex w-full justify-end absolute top-0 right-0">
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
            <div className="flex flex-col items-center justify-center w-full gap-2">
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
                <div className="flex gap-4 w-full justify-center overflow-auto lg:overflow-visible">
                    <div
                        className="flex flex-col items-center justify-center w-[150px] h-[150px] rounded-2xl p-6 bg-card-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                        onClick={() => (window.location.href = "/recipes")}
                    >
                        <div className="flex flex-col items-center justify-center">
                            <h4>RECETAS</h4>
                            <p className="text-gray-1 text-sm">SNACKS</p>
                        </div>
                        <p className="text-gray-1 text-sm">Ir &gt;</p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[150px] h-[150px] rounded-2xl p-6 bg-card-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <div className="flex flex-col items-center justify-centerr">
                            <PlusIcon className="text-gray-1 h-15 w-15" />
                            <p className="text-gray-1 text-sm">Agregar Atajo</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[150px] h-[150px] rounded-2xl p-6 bg-card-2 hover:transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                        <div className="flex flex-col items-center justify-centerr">
                            <PlusIcon className="text-gray-1 h-15 w-15" />
                            <p className="text-gray-1 text-sm">Agregar Atajo</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center mt-10">
                <p className="text-gray-2">
                    Toca para personalizar pantalla principal
                </p>
            </div>
        </div>
    );
}
