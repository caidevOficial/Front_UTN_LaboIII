import Anuncio_Auto from "./anuncio_auto.js"
import { getLocalStorageData } from "./localStorage.js";

var localData;

window.addEventListener("load", () => {
    localData = getLocalStorageData(Anuncio_Auto.getMainKey());
    console.log(localData);

    localData.forEach(item => {
        createCards(item);
    });
});

function createCards(item) {
    // Create the article
    const article = document.querySelector("#articles");
    const div = document.createElement("div");
    div.className = "cards";

    //create the h2 tag
    const title = document.createElement("h2");
    // create the paragraph tag
    const description = document.createElement("p");
    const price = document.createElement("p");
    price.id = "price";

    // create the paragraph tag
    const doors = document.createElement("p");
    doors.style.display = "inline";
    // create the paragraph tag
    const km = document.createElement("p");
    km.style.display = "inline";
    // create the paragraph tag
    const horsePower = document.createElement("p");
    horsePower.style.display = "inline";    

    const doorsIcon = document.createElement("img");
    doorsIcon.src = "./media/icon/car-door.png";
    doorsIcon.style.margin = "5px";
    const kmIcon = document.createElement("img");
    kmIcon.src = "./media/icon/speedometer.png";
    kmIcon.style.margin = "5px";

    const horsePowerIcon = document.createElement("img");
    horsePowerIcon.src = "./media/icon/car-engine.png";
    horsePowerIcon.style.margin = "5px";
    const boton = document.createElement("button");
    boton.id = "button";
    boton.className = "formButtons";        
    boton.innerHTML = "Show Vehicles";

    // Append all the childs created
    title.innerHTML = item.title;
    description.innerHTML = item.description;
    price.innerHTML = "$" + item.price;
    doors.innerHTML = item.doors;
    km.innerHTML = item.kilometers;
    horsePower.innerHTML = item.horsePower;
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(price);
    div.appendChild(doorsIcon);
    div.appendChild(doors);
    div.appendChild(kmIcon);
    div.appendChild(km);
    div.appendChild(horsePowerIcon);
    div.appendChild(horsePower);
    div.appendChild(boton);


    article.appendChild(div);
}