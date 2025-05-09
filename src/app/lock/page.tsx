"use client";

import { Switch } from "@/components/ui/switch";
import React from "react";
import { useUIStore } from "@/stores/uiStore";

const Page = () => {
    const lock = useUIStore((state) => state.lock);
    const setLock = useUIStore((state) => state.setLock);

    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <p className="text-gray-0 text-xl">
                La función LOCK bloquea la pantalla, impidiendo su edición, con
                excepción de este apartado específico.
            </p>
            <Switch checked={lock} onCheckedChange={() => setLock(!lock)} />
        </div>
    );
};

export default Page;
