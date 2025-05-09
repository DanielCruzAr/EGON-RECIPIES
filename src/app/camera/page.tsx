import React from "react";
import Image from "next/image";
import camera1 from "../../../public/img/camera1.jpg";
import camera2 from "../../../public/img/camera2.jpg";

const page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-4 mt-4">
            <div className="flex flex-col items-start justify-start gap-4 w-full h-[600px] overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card scrollbar-thin">
                <div className="flex flex-col w-full gap-4">
                    <h3>CONGELADOR POR EL INTERIOR</h3>
                    <div className="flex items-center justify-center w-full">
                        <Image
                            width={300}
                            height={300}
                            src={camera2.src}
                            alt="Camera 1"
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full gap-4">
                    <h3>REFRIGERADOR POR EL INTERIOR</h3>
                    <div className="flex items-center justify-center w-full">
                        <Image
                            width={300}
                            height={300}
                            src={camera1.src}
                            alt="Camera 2"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
