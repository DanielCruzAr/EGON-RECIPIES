import React from "react";
import Image from "next/image";
import pepino from "../../../public/img/pepino.png";
import zanahoria from "../../../public/img/zanahoria.png";

const page = () => {
    const products = [
        {
            since: "hace 1 semana",
            image: pepino.src,
        },
        {
            since: "hace 2 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 2 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 2 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 3 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 3 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 3 semanas",
            image: zanahoria.src,
        },
        {
            since: "hace 1 mes",
            image: zanahoria.src,
        },
    ];

    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <p className="text-gray-0 text-xl">
                En tu refrigerador hay productos desde
            </p>
            <div className="bg-card-2 w-full h-[400px] rounded-2xl p-6 flex flex-col gap-4">
                <div className="flex flex-col gap-4 overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="flex flex-row items-center justify-between w-full"
                        >
                            <div className="flex flex-row items-center justify-start gap-6">
                                <Image
                                    width={50}
                                    height={50}
                                    src={product.image}
                                    alt=""
                                    className="rounded-full"
                                />
                                <p>{product.since}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
