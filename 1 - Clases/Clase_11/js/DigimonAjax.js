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

 const LoadCardImage = (data) => {
    const info = document.getElementById("section");
    info.setAttribute("class", "is-3-desktop");
    console.log(data);
    data.forEach(element => {
        if(element.img == 'https://digimon.shadowsmith.com/img/maganamon.jpg')
            element.img = 'https://digimon.shadowsmith.com/img/magnamon.jpg';
        
            const article = document.createElement('article');
        article.setAttribute('class', 'card');

        const firstDiv = document.createElement('div');
        firstDiv.setAttribute('class', 'card-image');

        const createFigure = document.createElement('figure');
        createFigure.setAttribute('class', 'image is-4by1');
        const img = document.createElement("img");
        img.setAttribute('class', 'image is-128x128');
        img.setAttribute('src', element.img);
        img.setAttribute('alt', element.name);
        

        const secondDiv = document.createElement('div');
        secondDiv.setAttribute('class', 'card-content');
        const thirdDiv = document.createElement('div');
        thirdDiv.setAttribute('class', 'media');
        const fourthDiv = document.createElement('div');
        fourthDiv.setAttribute('class', 'media-left');
        const secondFigure = document.createElement('figure');
        secondFigure.setAttribute('class', 'image is-48x48');
        const miniImage = document.createElement('img');
        miniImage.setAttribute('src', './Favicon.x-ico');

        
        const fifthDiv = document.createElement('div');
        fifthDiv.setAttribute('class', 'media-content');
        
        const firstParagraph = document.createElement('p');
        firstParagraph.setAttribute('class', 'title is-4');
        firstParagraph.innerHTML = `${data.indexOf(element)+1} - ${element.name}`;
        
        const secondParagraph = document.createElement('p');
        secondParagraph.setAttribute('class', 'subtitle is-6');
        secondParagraph.innerHTML = `${element.level}`;
        
        
        info.appendChild(article);
        
        // First Full Div
        article.appendChild(firstDiv);
        firstDiv.appendChild(createFigure);
        createFigure.appendChild(img);
        
        article.appendChild(secondDiv);
        secondDiv.appendChild(thirdDiv);
        thirdDiv.appendChild(fourthDiv);
        fourthDiv.appendChild(secondFigure);
        secondFigure.appendChild(miniImage);
        
        thirdDiv.appendChild(fifthDiv);
        fifthDiv.appendChild(firstParagraph);
        fifthDiv.appendChild(secondParagraph);
        
        
        
        
    });
 }


 const LoadImage = (data) => {
    
    const info = document.getElementById("info");
    info.setAttribute("class", "is-3-desktop");
    console.log(data);
    data.forEach(element => {
        
        const article = document.createElement('article');
        article.setAttribute('class', 'media');
        article.setAttribute('align', 'center');
        
        // For image
        const figure = document.createElement('figure');
        figure.setAttribute('class', 'media-left');
        const paragraph_image = document.createElement('p');
        
        //for text
        const div_father = document.createElement('div');
        div_father.setAttribute('class', 'media-content');
        const div_text = document.createElement('div');
        div_text.setAttribute('class', 'content');
        const paragraph2 = document.createElement('p');

        const img = document.createElement("img");
        img.setAttribute('class', 'image is-128x128');
        const name_strong = document.createElement("strong");
        const name_small = document.createElement("small");
        const br = document.createElement("br");

        // Fix a bad name of link
        if(element.img == 'https://digimon.shadowsmith.com/img/maganamon.jpg')
            element.img = 'https://digimon.shadowsmith.com/img/magnamon.jpg';
        // End fix
        img.setAttribute('src', element.img);
        img.setAttribute('alt', element.name);
        
        // Assemble image
        paragraph_image.appendChild(img);
        figure.appendChild(paragraph_image);

        name_strong.innerHTML = ` ${data.indexOf(element)+1} - ${element.name}`;
        name_small.innerHTML = `${element.level}`;
        paragraph2.appendChild(name_strong);
        paragraph2.appendChild(br);
        paragraph2.appendChild(name_small);
        
        div_text.appendChild(paragraph2);
        div_father.appendChild(div_text);

        article.appendChild(figure);
        article.appendChild(div_father);
        
        info.appendChild(article);
    });
}


const GetCharacter = () => {
    const DIGI_URL = 'https://digimon-api.vercel.app/api/digimon';
    const URL = 'https://rickandmortyapi.com/api/character';
    const XHR = new XMLHttpRequest();
    XHR.onreadystatechange = () => {
        if (XHR.readyState === 4 && XHR.status === 200) {
            const data = JSON.parse(XHR.responseText);
            LoadCardImage(data);
        }
    }
    XHR.open('GET', DIGI_URL);
    XHR.send();
}

GetCharacter();