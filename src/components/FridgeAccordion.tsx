import React from "react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "./ui/accordion";
import LabeledSlider from "./LabeledSlider";

const FridgeAccordion = ({ active }: { active: boolean }) => {
    return (
        <Accordion
            type="multiple"
            className="w-3/4 rounded-2xl bg-card-2 px-4"
            disabled={!active}
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>CONGELADOR</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <p className="text-gray-1">Puerta</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={-21}
                                max={-15}
                                defaultValue={-18}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between items-center border-t-2 border-t-gray-3 pt-4">
                        <p className="text-gray-1">Caja</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider
                                min={-21}
                                max={-15}
                                defaultValue={-18}
                            />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>REFRIGERADOR</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4">
                    <div className="flex flex-col md:flex-row w-full justify-between items-center">
                        <p className="text-gray-1">Puerta</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider min={1} max={7} defaultValue={4} />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row w-full justify-between items-center border-t-2 border-t-gray-3 pt-4">
                        <p className="text-gray-1">Caja</p>
                        <div className="flex w-full md:w-3/4">
                            <LabeledSlider min={1} max={7} defaultValue={4} />
                        </div>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};

export default FridgeAccordion;
