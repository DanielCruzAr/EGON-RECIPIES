"use client";

import { useUIStore } from "@/stores/uiStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Card } from "@/components/ui/card";
import { recipes } from "@/constants/recipes";
import { ChevronRight, Clock } from "lucide-react";
import Image from "next/image";

const Page = () => {
    const recipesValue = useUIStore((state) => state.recipesValue);
    const setRecipesValue = useUIStore((state) => state.setRecipesValue);
    const types = ["desayunos", "comidas", "cenas", "snacks"];

    return (
        <div className="flex flex-col items-start justify-start px-2 gap-4 mt-4">
            <h3 className="text-gray-1 px-2">RECOMENDACIONES</h3>
            <Tabs
                className="w-full gap-6"
                value={recipesValue}
                onValueChange={(value) => setRecipesValue(value)}
            >
                <TabsList className="grid w-full grid-cols-4 bg-card-2 rounded-2xl mx-2">
                    <TabsTrigger
                        value="desayunos"
                        className={`${
                            recipesValue === "desayunos" ? "neon-text" : ""
                        }`}
                    >
                        DESAYUNOS
                    </TabsTrigger>
                    <TabsTrigger
                        value="comidas"
                        className={`${
                            recipesValue === "comidas" ? "neon-text" : ""
                        }`}
                    >
                        COMIDAS
                    </TabsTrigger>
                    <TabsTrigger
                        value="cenas"
                        className={`${
                            recipesValue === "cenas" ? "neon-text" : ""
                        }`}
                    >
                        CENAS
                    </TabsTrigger>
                    <TabsTrigger
                        value="snacks"
                        className={`${
                            recipesValue === "snacks" ? "neon-text" : ""
                        }`}
                    >
                        SNACKS
                    </TabsTrigger>
                </TabsList>
                {types.map((type) => (
                    <TabsContent key={type} value={type}>
                        <div className="flex flex-col gap-4 overflow-y-auto h-[400px] scrollbar-thumb-foreground scrollbar-track-card scrollbar-thin px-2">
                            {recipes
                                .filter((recipe) => recipe.type === type)
                                .map((recipe) => (
                                    <Card
                                        key={recipe.id}
                                        className="relative flex flex-row p-2 justify-between items-center overflow-y-visible bg-card-2 rounded-2xl cursor-pointer hover:transform hover:scale-101 transition-transform duration-300 ease-in-out"
                                        onClick={() =>
                                            (window.location.href = `/recipes/${recipe.id}`)
                                        }
                                    >
                                        <Image
                                            src={recipe.image.src}
                                            alt={recipe.name}
                                            width={110}
                                            height={110}
                                            className="rounded-full object-cover"
                                        />
                                        <div className="flex flex-col">
                                            <h4>{recipe.name}</h4>
                                            <p className="text-xs text-gray-0">
                                                {recipe.description}
                                            </p>
                                            {recipe.complete ? (
                                                <p className="text-xs text-primary">
                                                    ¡INGREDIENTES LISTOS PARA
                                                    COCINAR!
                                                </p>
                                            ) : (
                                                <div className="flex gap-2">
                                                    <p className="text-xs text-red-500">
                                                        COMPLETA TU RECETA CON:
                                                    </p>
                                                    <ul className="list-disc list-inside text-xs text-gray-0">
                                                        {recipe.toBuy.map(
                                                            (item) => (
                                                                <li key={item}>
                                                                    {item}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div className="flex gap-2">
                                                <Clock size={15} />
                                                <p className="text-xs text-gray-0">
                                                    25 min
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-end w-full">
                                                <p className="neon-text">
                                                    ¡Vamos a cocinar!
                                                </p>
                                                <ChevronRight
                                                    size={50}
                                                    className="text-gray-3"
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default Page;
