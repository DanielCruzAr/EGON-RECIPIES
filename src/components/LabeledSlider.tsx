import React from "react";
import { Slider } from "./ui/slider";

const LabeledSlider = () => {
    const min = -24;
    const max = -15;
    const marks = [min, -18, max];
    const bottomLabels = ["-", "", "+"];
    return (
        <div className="w-full px-4">
            {/* Labels above the slider */}
            <div className="flex justify-between px-2 mb-2 text-sm">
                {marks.map((value, index) => (
                    <span
                        key={index}
                        className={`${
                            index === 0
                                ? "text-blue-400"
                                : index === 2
                                ? "text-blue-500"
                                : "text-gray-1"
                        }`}
                    >
                        {value}°C
                    </span>
                ))}
            </div>

            {/* Slider */}
            <Slider defaultValue={[-19.5]} min={min} max={max} step={0.5} />

            {/* Labels below the slider */}
            <div className="flex justify-between px-2 mt-2 text-sm">
                {bottomLabels.map((value) => (
                    <span key={value} className="neon-text">
                        {value}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default LabeledSlider;
