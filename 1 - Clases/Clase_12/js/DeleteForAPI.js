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

const deletePersona = (id) => {
    
    const xhr = new XMLHttpRequest();
    xhr.addEventListener('readystatechange', ()=>{
        if(xhr.readyState == 4){

            // desactivar spinner
            clearSpinner();

            // Asegurar con codigos de estado 200X
            if(xhr.status >= 200 && xhr.status < 300){
                //mostrar
                console.log(data);
                // para verlo por mas tiempo en el server.
                alert(`${xhr.responseText}`);
            }else{
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`);
            }
        }else{
            // lo que retorna el getSpinner se pone como child del div
            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open('DELETE', `${URL}/${id}`);
    xhr.send();
}

const deletePersonaFetch = (id) => {

    const option = {
        method:"DELETE"
    };

    divSpinner.appendChild(getSpinner());
    // envio la peticion.
    fetch(`${URL}/${id}`, option)
    // respuesta de la peticion.
    .then((res)=>{
        console.log(res);
        alert(`${res.id} - ${res.Name} ${res.Surname}`);

        // valido que la respuesta sea correcta.
        if(res.ok){
            // retorna una promesa, el retorno del retorno de res.
            return res.json(`Error: ${res.status}: ${res.statusText}`);
        }else{
            // si falla, envio una promesa rechazada.
            return Promise.reject();
        }
    })
    // al fallar, lo catcheo y muestro.
    .catch((err)=>{
        console.error(err);
    })
    .finally(()=>{
        clearSpinner();
    })
}

const deletePersonaAxiosAsync = (id) => {

    try {
        divSpinner.appendChild(getSpinner());
        // envio la peticion.
        const {data} = await axios(`${URL}/${id}`, axios.delete);
        alert(`${data}`);
        console.log(data);
        // si hay error axios se encarga de armar la exception 
        // y devolver Promise.rejected
    } catch (error) {
        // al fallar, lo catcheo y muestro.
        console.error(err.response);
    }finally{
        clearSpinner();
    }
}

export {
    deletePersona,
    deletePersonaFetch,
    deletePersonaAxiosAsync
}