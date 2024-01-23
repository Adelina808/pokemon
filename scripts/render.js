export function renderItem(name, url) {
    const ul = document.querySelector(".list");
    const infoUl = document.querySelector(".info");

    const li = document.createElement("li");
    li.classList.add("item");
    li.innerText = name;
    ul.append(li);

    li.addEventListener("click", () => {
        infoUl.innerHTML = "";
        fetch(url)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                console.log(res);
                console.log(res.height);
                const li = document.createElement("li");
                li.classList.add("item2");
                const image = document.createElement("img");
                image.classList.add("img");
                image.src = res.sprites.front_default;
                const span = document.createElement("span");
                span.classList.add("pokemon");
                span.innerText = `Имя: ....... ${res.name}`;
                const span1 = document.createElement("span");
                span1.classList.add("pokemon");
                span1.innerText = `Рост: ....... ${res.height}`;
                const span2 = document.createElement("span");
                span2.classList.add("pokemon");
                span2.innerText = `Вес: ....... ${res.weight}`;

                //info
                const divInfo = document.createElement("div");
                divInfo.classList.add("infos");
                divInfo.append(span, span1, span2);
                li.append(image, divInfo);
                infoUl.append(li);
            });
    });
}

