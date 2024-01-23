import { nextBtn } from "./nextBtn.js";
import { renderItem } from "./render.js ";

export function prevBtn(prevUrl) {
    const ul = document.querySelector(".list");

    ul.innerHTML = "";

    const prev = document.querySelector(".prev");

    let elClone = prev.cloneNode(true);
    prev.parentNode.replaceChild(elClone, prev);

    elClone.addEventListener("click", () => {
        fetch(prevUrl)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                if(res.previous==null){
                    const h1 = document.querySelector('h1')
                    h1.innerText="no page"
                }else{

                    prevBtn(res.previous);
                    nextBtn(res.next);
                    res.results.forEach((el) => {
                        renderItem(el.name, el.url);
                    });
                }
            });
    });
}
