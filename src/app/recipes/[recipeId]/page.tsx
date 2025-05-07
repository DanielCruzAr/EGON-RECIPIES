"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useParams } from "next/navigation";
import React from "react";
import { recipes } from "@/constants/recipes";

const Page = () => {
    const { recipeId } = useParams<{ recipeId: string }>();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId!));

    return (
        <div className="flex flex-col items-start justify-start px-10 gap-4">
            <h2>RECETAS</h2>
            <h3 className="text-gray-1">RECOMENDACIONES</h3>
            <Card className="w-full rounded-2xl h-full bg-card-2">
                <CardContent>
                    <p>{recipe?.name}</p>
                </CardContent>
            </Card>
        </div>
    );
};

export default Page;
