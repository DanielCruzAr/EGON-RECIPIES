import eggs from "../../public/img/egg-breakfast.jpg";
import bread from "../../public/img/bread-salad.jpg";
import hotCakes from "../../public/img/hot-cakes.jpg";
import sandwich from "../../public/img/sandwich.jpg";
import banana from "../../public/img/banana-bread.jpg";
import fruit from "../../public/img/fruit-salad.jpg";
import beef from "../../public/img/beef.jpg";
import chicken from "../../public/img/chicken.jpg";
import salad from "../../public/img/salad.jpg";
import burguer from "../../public/img/burger.jpg";
import yogurt from "../../public/img/yogurt.jpg";

export const recipes = [
    {
        id: 1,
        type: "desayunos",
        name: "HUEVOS A LA MEXICANA",
        description:
            "Huevos revueltos con jitomate, cebolla y chile, un clásico desayuno mexicano.",
        complete: false,
        toBuy: ["CEBOLLA"],
        image: eggs,
    },
    {
        id: 2,
        type: "desayunos",
        name: "PAN TOSTADO CON AGUACATE",
        description:
            "Pan tostado con aguacate fresco, ideal para un desayuno saludable.",
        complete: true,
        toBuy: [],
        image: bread,
    },
    {
        id: 4,
        type: "desayunos",
        name: "HOT CAKES",
        description: "Esponjosos hot cakes perfectos para un desayuno dulce.",
        complete: false,
        toBuy: ["MANTEQUILLA"],
        image: hotCakes,
    },
    {
        id: 5,
        type: "comidas",
        name: "ENSALADA DE VERDURAS",
        description: "Ensalada fresca con una mezcla de verduras y aderezo.",
        complete: true,
        toBuy: [],
        image: fruit,
    },
    {
        id: 6,
        type: "comidas",
        name: "HAMURGUESA DE RES",
        description: "Hamburguesa jugosa de res con lechuga y jitomate.",
        complete: false,
        toBuy: ["LECHUGA"],
        image: burguer,
    },
    {
        id: 8,
        type: "comidas",
        name: "ARRACHERA CON VERDURAS",
        description: "Corte de arrachera a la parrilla con verduras asadas.",
        complete: true,
        toBuy: [],
        image: beef,
    },
    {
        id: 9,
        type: "cenas",
        name: "SÁNDWICH DE ATÚN",
        description: "Sándwich ligero y rápido con atún y vegetales.",
        complete: false,
        toBuy: ["ATÚN", "PAN"],
        image: sandwich,
    },
    {
        id: 10,
        type: "cenas",
        name: "ENSALADA CESAR",
        description: "Ideal para una cena ligera.",
        complete: false,
        toBuy: ["ADEREZO"],
        image: salad,
    },
    {
        id: 11,
        type: "cenas",
        name: "ENSALADA DE POLLO",
        description: "Ensalada fresca con pollo, ideal para una cena ligera.",
        complete: true,
        toBuy: [],
        image: chicken,
    },
    {
        id: 13,
        type: "snacks",
        name: "PAN DE PLATANO CON BERRY",
        description:
            "Rollitos sencillos de jamón y queso, perfectos para un snack rápido.",
        complete: true,
        toBuy: [],
        image: banana,
    },
    {
        id: 14,
        type: "snacks",
        name: "YOGURT CON FRUTAS",
        description: "Yogurt natural acompañado de frutas frescas.",
        complete: true,
        toBuy: [],
        image: yogurt,
    },
];
