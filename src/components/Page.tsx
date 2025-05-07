"use client";

import React from "react";
import { Card } from "./ui/card";
import { usePathname } from "next/navigation";
import { Undo2 } from "lucide-react";
import Link from "next/link";

const Page = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className: string;
}) => {
    const pathName = usePathname();

    return (
        <div className={className}>
            <Card className="w-full p-6 rounded-2xl h-full">{children}</Card>
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
