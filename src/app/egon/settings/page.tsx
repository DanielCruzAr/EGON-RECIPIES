"use client";

import EgonAccordion from "@/components/EgonAccordion";
import { ChevronLeft } from "lucide-react";
import React from "react";

const Page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <div
                className="flex items-center gap-2 rounded-2xl bg-card-2 py-2 px-4 w-full mt-8 cursor-pointer"
                onClick={() => {
                    window.history.back();
                }}
            >
                <ChevronLeft size={25} />
                <h3>Configurar a EGON</h3>
            </div>
            <EgonAccordion />
        </div>
    );
};

export default Page;
