"use client";

import EgonAccordion from "@/components/EgonAccordion";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>ASISTENTE DE VOZ EGON</h2>
            <div
                className="flex items-center gap-2 rounded-2xl bg-card-2 py-2 px-4 w-full mt-8 cursor-pointer"
                onClick={() => {
                    window.history.back();
                }}
            >
                <ChevronLeft className="text-gray-1" size={25} />
                <h3 className="text-gray-1">Configurar a EGON</h3>
            </div>
            <EgonAccordion />
        </div>
    );
};

export default Page;
