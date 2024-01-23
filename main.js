import { nextBtn } from "./scripts/nextBtn.js";
import { prevBtn } from "./scripts/prevBtn.js";
import { renderItem } from "./scripts/render.js";

const allPokemons = "https://pokeapi.co/api/v2/pokemon?limit=30";

fetch(allPokemons)
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        console.log(res.previous);
        nextBtn(res.next);
        prevBtn(res.previous);
        console.log(res);
        res.results.forEach((element) => {
            renderItem(element.name, element.url);
        });
    });
