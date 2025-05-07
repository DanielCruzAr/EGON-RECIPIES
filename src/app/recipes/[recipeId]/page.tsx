"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import React from "react";
import { recipes } from "@/constants/recipes";
import { ChevronLeft } from "lucide-react";

const Page = () => {
    const { recipeId } = useParams<{ recipeId: string }>();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId!));

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4 h-full">
            <h2>RECETAS</h2>
            <h3 className="text-gray-1">RECOMENDACIONES</h3>
            <Card className="w-full rounded-2xl h-full bg-card-2">
                <CardContent className="flex flex-col gap-4 h-full p-6">
                    <div
                        className="flex gap-1 items-center cursor-pointer"
                        onClick={() => window.history.back()}
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-2" />
                        <p>Atrás</p>
                    </div>
                    <div className="flex flex-col w-full h-full items-center justify-center">
                        <h3>TUTORIAL</h3>
                        <h3>{recipe?.name}</h3>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
