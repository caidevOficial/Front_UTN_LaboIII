/**
 * MIT License
 *
 * Copyright (C) 2021 <FacuFalcone - CaidevOficial>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * You should have received a copy of the MIT license
 * along with this program.  If not, see <https://opensource.org/licenses/MIT>.
 *
 * @author Facundo Falcone <CaidevOficial> 
 */

import { getObjectsFetchForCards } from "./jsFetch/Read.js";

export const createMainCards = () => {
    const article = document.querySelector("#articles");
    getObjectsFetchForCards((data) => {
        console.log("createMainCards", data);
        if(article != null) {
            data.forEach(item => {
                article.appendChild(createCards(item));
            });
        }
    });
}

/**
 * Event listener for Load.
 */
window.addEventListener("load", () => {
    console.log('Dentro de index');
    createMainCards();
});

/**
 * Creates the main div of the card.
 * @returns {HTMLElement} The main div of the card.
 */
const createMainDiv = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "cards col-md-4");
    div.setAttribute("style", "width: 18rem;");
    return div;
}

/**
 * Creates a div for the card body.
 * @returns {HTMLElement} The div for the card body.
 */
const createDivCardBody = () => {
    let divCardBody = document.createElement("div");
    divCardBody.setAttribute("class", "card-body");
    return divCardBody;
}

/**
 * Creates the title of the card.
 * @param {Anuncio_Auto} item An object with the data of the card.
 * @returns {HTMLElement} The title of the card.
 */
const createTitle = (item) => {
    //create the h2 tag
    const title = document.createElement("h5");
    title.setAttribute("class", "card-title");
    title.innerHTML = item.title;
    return title;
}

/**
 * Creates the description of the card.
 * @param {Anuncio_Auto} item An object with the data of the card.
 * @returns {HTMLElement} The description of the card.
 */
const createDescription = (item) => {
    const description = document.createElement("p");
    description.setAttribute("class", "card-text");
    description.innerHTML = item.description;
    return description;
}

/**
 * Creates The price section of the card.
 * @param {Anuncio_Auto} item An object with the data of the card.
 * @returns {HTMLElement} The price section of the card.
 */
const createPrice = (item) => {
    const price = document.createElement("p");
    price.setAttribute("class", "card-text");
    price.id = "price";
    price.innerHTML = "$" + item.price;
    return price;
}

/**
 * Creates a paragraph section for the card.
 * @param {Anuncio_Auto} item An object with the data of the card.
 * @returns {HTMLElement} The paragraph section of the card.
 */
const createPartsParagraph = (item) => {
    let doors = document.createElement("p");
    doors.style.display = "inline";
    doors.innerHTML = item.doors;
    return doors;
}

/**
 * Creates an image element for the card.
 * @param {string} path The path of the image.
 * @returns {HTMLElement} The image element of the card.
 */
const createIcon = (path) => {
    let doorsIcon = document.createElement("img");
    doorsIcon.src = `${path}`;
    doorsIcon.style.margin = "5px";
    return doorsIcon;
}

/**
 * Creates a button element for the card.
 * @returns {HTMLElement} The button element of the card.
 */
const createButton = () => {
    let button = document.createElement("button");
    button.setAttribute("class", "btn btn-danger");
    button.id = "button";
    button.className = "formButtons";        
    button.innerHTML = "Show Vehicles";
    return button;
}

/**
 * Creates a card element contained in a div for the web page.
 * @param {Anuncio_Auto} item An object with the data of the card.
 * @returns {HTMLElement} The div that contains the card.
 */
function createCards(item) {
    // Create the article
    const div = createMainDiv();
    const divCardBody = createDivCardBody();
    divCardBody.appendChild(createTitle(item));
    divCardBody.appendChild(createDescription(item));
    divCardBody.appendChild(createPrice(item));
    divCardBody.appendChild(createIcon("./assets/icon/car-door.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    divCardBody.appendChild(createIcon("./assets/icon/speedometer.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    divCardBody.appendChild(createIcon("./assets/icon/car-engine.png"));
    divCardBody.appendChild(createPartsParagraph(item));
    divCardBody.appendChild(createButton());
    div.appendChild(divCardBody);
    
    return div;
}