"use client";

import { useUIStore } from "@/stores/uiStore";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { recipes } from "@/constants/recipes";
import { ChevronRight } from "lucide-react";

const Page = () => {
    const recipesValue = useUIStore((state) => state.recipesValue);
    const setRecipesValue = useUIStore((state) => state.setRecipesValue);
    const types = ["desayunos", "comidas", "cenas", "snacks"];

    return (
        <div className="flex flex-col items-start justify-start px-4 gap-4 mt-4">
            <h3 className="text-gray-1">RECOMENDACIONES</h3>
            <Tabs
                className="w-full gap-6"
                value={recipesValue}
                onValueChange={(value) => setRecipesValue(value)}
            >
                <TabsList className="grid w-full grid-cols-4 bg-card-2 rounded-2xl">
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
                    <TabsContent
                        key={type}
                        value={type}
                        // className="overflow-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin"
                    >
                        <Card className="bg-card-2 rounded-2xl h-[400px] overflow-y-hidden">
                            <CardContent className="overflow-y-auto scrollbar-thumb-foreground scrollbar-track-card-2 scrollbar-thin px-6">
                                <div>
                                    {recipes
                                        .filter(
                                            (recipe) => recipe.type === type
                                        )
                                        .map((recipe) => (
                                            <div
                                                key={recipe.id}
                                                className="flex flex-col p-2 gap-4"
                                            >
                                                <h4>{recipe.name}</h4>
                                                <div className="flex items-center justify-between mx-6 py-4 border-b-2 border-b-gray-1">
                                                    {recipe.complete ? (
                                                        <p className="text-gray-2">
                                                            INGREDIENTES
                                                            COMPLETOS
                                                        </p>
                                                    ) : (
                                                        <div className="flex flex-col">
                                                            <p className="text-gray-2">
                                                                A COMPRAR:
                                                            </p>
                                                            <ul className="list-disc list-inside text-gray-2 px-2">
                                                                {recipe.toBuy.map(
                                                                    (
                                                                        item,
                                                                        index
                                                                    ) => (
                                                                        <li
                                                                            key={
                                                                                index
                                                                            }
                                                                        >
                                                                            {item.toUpperCase()}
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )}
                                                    <div
                                                        className="flex items-center justify-end gap-2 p-2 cursor-pointer"
                                                        onClick={() =>
                                                            (window.location.href = `/recipes/${recipe.id}`)
                                                        }
                                                    >
                                                        <p>TUTORIAL</p>
                                                        <ChevronRight className="h-15 w-15 text-gray-2" />
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
};

export default Page;
