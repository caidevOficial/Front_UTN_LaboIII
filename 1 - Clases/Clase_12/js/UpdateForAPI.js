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

import {URL} from "./GetForAPI";


const updatePersona = () => {
    
    const newPerson = {
        "id":25,
        "Name":"Facu",
        "Surname":"Falcone"
    };

    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){
            // desactivar spinner
            clearSpinner();

            // Asegurar con codigos de estado 200X
            if(xhr.status >= 200 && xhr.status < 300){
                const data = JSON.parse(xhr.responseText);

                //mostrar
                console.log(data);
                // para verlo por mas tiempo en el server.
                alert(`${data.id} - ${data.Name} ${data.Surname}`);
            }else{
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`);
            }
        }else{
            // lo que retorna el getSpinner se pone como child del div
            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open('PUT', `${URL}/${newPerson.id}`);
    // MIME_types
    xhr.setRequestHeader("Content-Type", "application/json");
    // debe viajar la peticion en el body.
    xhr.send(JSON.stringify(newPerson));
}

export {
    updatePersona
}