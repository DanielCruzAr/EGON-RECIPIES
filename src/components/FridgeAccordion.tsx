"use client";

import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import LabeledSlider from "./LabeledSlider";
import { useUIStore } from "@/stores/uiStore";

const FridgeAccordion = ({ active }: { active: boolean }) => {
    const freezerDoor = useUIStore((state) => state.freezerDoor);
    const freezerBox = useUIStore((state) => state.freezerBox);
    const fridgeDoor = useUIStore((state) => state.fridgeDoor);
    const fridgeBox = useUIStore((state) => state.fridgeBox);
    const setFreezerDoor = useUIStore((state) => state.setFreezerDoor);
    const setFreezerBox = useUIStore((state) => state.setFreezerBox);
    const setFridgeDoor = useUIStore((state) => state.setFridgeDoor);
    const setFridgeBox = useUIStore((state) => state.setFridgeBox);

    return (
        <Accordion
            type="multiple"
            className="w-full rounded-2xl bg-card-2 px-4"
            disabled={!active}
        >
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-xl">
                    CONGELADOR
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <p>Puerta</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={-21}
                                max={-15}
                                value={freezerDoor}
                                onValueChange={(value) =>
                                    setFreezerDoor(value[0])
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between items-center border-t-2 border-t-gray-3 pt-4">
                        <p>Caja</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={-21}
                                max={-15}
                                value={freezerBox}
                                onValueChange={(value) =>
                                    setFreezerBox(value[0])
                                }
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="text-xl">
                    REFRIGERADOR
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <p>Puerta</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={1}
                                max={7}
                                value={fridgeDoor}
                                onValueChange={(value) =>
                                    setFridgeDoor(value[0])
                                }
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between items-center border-t-2 border-t-gray-3 pt-4">
                        <p>Caja</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={1}
                                max={7}
                                value={fridgeBox}
                                onValueChange={(value) =>
                                    setFridgeBox(value[0])
                                }
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default FridgeAccordion;
