import { prevBtn } from "./prevBtn.js";
import { renderItem } from "./render.js";

export function nextBtn(url) {
    const ul = document.querySelector(".list");

    ul.innerHTML = "";
    

    const next = document.querySelector(".next");

    let elClone = next.cloneNode(true);
    next.parentNode.replaceChild(elClone, next);

    elClone.addEventListener("click", () => {
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                nextBtn(res.next);
                prevBtn(res.previous);
                console.log(res);
                res.results.forEach((el) => {
                    renderItem(el.name, el.url);
                });
            });
    });
}
