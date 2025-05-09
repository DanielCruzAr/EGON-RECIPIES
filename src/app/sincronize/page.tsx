import React from "react";
import qrCode from "../../../public/img/qr.jpeg";

const page = () => {
    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <p className="text-gray-0 text-xl">
                Escanea el código QR para abrir la app.
            </p>
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="p-8 bg-card-2 rounded-2xl flex items-center justify-center">
                    <img src={qrCode.src} alt="" className="w-lg" />
                </div>
            </div>
        </div>
    );
};

export default page;
