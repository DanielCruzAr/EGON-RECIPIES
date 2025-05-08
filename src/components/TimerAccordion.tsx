import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { Check } from "lucide-react";
import Picker from "react-mobile-picker";

const weekDays = [
    "lunes",
    "martes",
    "miercoles",
    "jueves",
    "viernes",
    "sabados",
    "domingos",
];

const pickerColumns = ["hours", "minutes", "meridian"];

const TimerAccordion = ({
    active,
    selectedDays,
    setSelectedDays,
    timerValue,
    setTimerValue,
}: {
    active: boolean;
    selectedDays: string[];
    setSelectedDays: (value: string[]) => void;
    timerValue: { hours: number; minutes: number; meridian: string };
    setTimerValue: (value: {
        hours: number;
        minutes: number;
        meridian: string;
    }) => void;
}) => {
    return (
        <Accordion
            type="multiple"
            className="w-3/4 rounded-2xl bg-card-2 px-4"
            disabled={!active}
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>HORA</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div>
                        <Picker
                            value={timerValue}
                            onChange={setTimerValue}
                            wheelMode="normal"
                        >
                            {pickerColumns.map((column, index) => (
                                <Picker.Column key={index} name={column}>
                                    {column === "hours" &&
                                        Array.from({ length: 12 }, (_, i) => (
                                            <Picker.Item key={i} value={i}>
                                                {i < 10 ? `0${i}` : i}
                                            </Picker.Item>
                                        ))}
                                    {column === "minutes" &&
                                        Array.from({ length: 60 }, (_, i) => (
                                            <Picker.Item key={i} value={i}>
                                                {i < 10 ? `0${i}` : i}
                                            </Picker.Item>
                                        ))}
                                    {column === "meridian" && (
                                        <>
                                            <Picker.Item value="AM">
                                                AM
                                            </Picker.Item>
                                            <Picker.Item value="PM">
                                                PM
                                            </Picker.Item>
                                        </>
                                    )}
                                </Picker.Column>
                            ))}
                        </Picker>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>
                    <div className="w-full flex items-center">
                        <p>REPETIR</p>
                    </div>
                    {selectedDays.length > 0 && (
                        <div className="flex items-center justify-end w-full">
                            <p>{selectedDays.length} veces a la semana</p>
                        </div>
                    )}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col w-full">
                        {weekDays.map((day) => (
                            <div
                                key={day}
                                className="flex items-center justify-between w-full border-b-2 border-b-gray-3 py-2 cursor-pointer"
                                onClick={() => {
                                    setSelectedDays(
                                        selectedDays.includes(day)
                                            ? selectedDays.filter(
                                                  (d) => d !== day
                                              )
                                            : [...selectedDays, day]
                                    );
                                }}
                            >
                                <h3
                                    className={`${
                                        selectedDays.includes(day)
                                            ? ""
                                            : "text-gray-1"
                                    }`}
                                >
                                    Todos los {day}
                                </h3>
                                {selectedDays.includes(day) && <Check />}
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default TimerAccordion;
