"use client";

import React, { useState } from "react";
import { Slider } from "./ui/slider";

// refri 1 a 7
// congelador -15 a -21
const LabeledSlider = ({
    min,
    max,
    value,
    onValueChange,
}: {
    min: number;
    max: number;
    value: number;
    onValueChange: (value: number[]) => void;
}) => {
    // const [sliderValue, setSliderValue] = useState<number[]>([defaultValue]);
    const marks = [min, value, max];
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
                                : ""
                        }`}
                    >
                        {value}°C
                    </span>
                ))}
            </div>

            {/* Slider */}
            <Slider
                min={min}
                max={max}
                step={1}
                value={[value]}
                onValueChange={onValueChange}
            />

            {/* Labels below the slider */}
            <div className="flex justify-between px-2 mt-2 text-sm">
                {bottomLabels.map((value, index) => (
                    <div className="flex flex-col items-center" key={index}>
                        <span className="neon-text text-2xl">{value}</span>
                        {index !== 1 && (
                            <span className="text-xs">
                                {index === 0 ? "Poco frío" : "Muy frío"}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LabeledSlider;
