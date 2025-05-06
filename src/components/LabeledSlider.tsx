"use client";

import React, { useState } from "react";
import { Slider } from "./ui/slider";

// refri 1 a 7
// congelador -15 a -21
const LabeledSlider = ({
    min,
    max,
    defaultValue,
}: {
    min: number;
    max: number;
    defaultValue: number;
}) => {
    const [sliderValue, setSliderValue] = useState<number[]>([defaultValue]);
    const marks = [min, sliderValue, max];
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
            <Slider
                defaultValue={[-18]}
                min={min}
                max={max}
                step={1}
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
            />

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
