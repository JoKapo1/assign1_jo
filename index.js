import config from './data-minifed.json' with { type: 'json' };

console.log(config.products.slice(0,20));

const main = document.createElement("main");

const header = document.createElement("h1");
header.textContent = "Browse";
main.appendChild(header);

const container = document.createElement("ul");
container.classList.add("product-list");
main.appendChild(container);

for (let con of config.products.slice(0, 19)){
    const card = document.createElement("li");
    card.classList.add("product-card");

    const image = document.createElement("img");
    image.classList.add("product-card__image");
    image.setAttribute("src", con.thumbnail);
    card.appendChild(image);

    image.addEventListener("click", () => {
        alert(`Product ID: ${con.id}`);
    })

    const body = document.createElement("div");
    body.classList.add("product-card__body");
    card.appendChild(body);

    const title = document.createElement("h3");
    title.classList.add("product-card__title");
    title.textContent = con.title;
    body.appendChild(title);

    const price = document.createElement("p");
    price.classList.add("product-card__price");
    price.textContent = con.price;
    body.appendChild(price);

    const btn = document.createElement("button");
    btn.textContent = "+";
    body.appendChild(btn);

    btn.addEventListener("click", function() {
        alert(`Product ID: ${con.id}\nTitle: ${con.title}`);       
    });
    
    container.appendChild(card)
} 
document.body.appendChild(main);
   