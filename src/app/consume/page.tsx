import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const page = () => {
    const products = [
        {
            since: "hace 1 semana",
            image: "",
        },
        {
            since: "hace 2 semanas",
            image: "",
        },
        {
            since: "hace 2 semanas",
            image: "",
        },
        {
            since: "hace 2 semanas",
            image: "",
        },
        {
            since: "hace 3 semanas",
            image: "",
        },
        {
            since: "hace 3 semanas",
            image: "",
        },
        {
            since: "hace 3 semanas",
            image: "",
        },
        {
            since: "hace 1 mes",
            image: "",
        },
    ];

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4 h-fit">
            <h2>CONSUME PRONTO</h2>
            <p className="text-gray-1">
                En tu refrigerador hay productos desde
            </p>
            <div className="bg-card-2 w-full rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4 overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between w-full"
                        >
                            <div className="flex flex-row items-center justify-start gap-6">
                                <img
                                    src={product.image}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                                <p className="text-gray-1">{product.since}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
