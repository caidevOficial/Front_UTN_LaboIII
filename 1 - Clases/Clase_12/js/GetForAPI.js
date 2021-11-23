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

const URL = 'http://localhost:3000/personas';

import { getSpinner, clearSpinner } from "./Spinner";

const getPersonasAjax = () =>{
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
            }else{
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`);
            }
        }else{
            // lo que retorna el getSpinner se pone como child del div
            divSpinner.appendChild(getSpinner());
        }
    });

    xhr.open('GET', URL);
    xhr.send();
}

const getPersonaAjax = (id) =>{
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
            }else{
                console.log(`Error: ${xhr.status} : ${xhr.statusText}`);
            }
        }else{
            // lo que retorna el getSpinner se pone como child del div
            divSpinner.appendChild(getSpinner());
        }
    });
    xhr.open('GET', `${URL}/${id}`);
    xhr.send();
}

const getPersonasFetch = () => {
    divSpinner.appendChild(getSpinner());
    // envio la peticion.
    fetch(URL)
    // respuesta de la peticion.
    .then((res)=>{
        console.log(res);

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

const getPersonasFetchAsync = async() => {
    try {
        divSpinner.appendChild(getSpinner());
        const res = await fetch(URL);
        // se procesa la respuesta, si es incorrecta se tira exception
        if (!res.ok){
            throw new Error(`Error: ${res.status}: ${res.statusText}`);
        }

        const data = await res.json();
        console.log(data);
    } catch (err) {
        console.error(err.message);
    }finally{
        clearSpinner();
    }
}

const getPersonasAxios = () => {
    divSpinner.appendChild(getSpinner());
    // envio la peticion.
    axios.get(URL)
    // respuesta de la peticion.
    // si hay error axios se encarga de armar la exception 
    // y devolver Promise.rejected
    .then(({data})=>{
        console.log(data);
    })
    // al fallar, lo catcheo y muestro.
    .catch((err)=>{
        console.error(err.response);
    })
    .finally(()=>{
        clearSpinner();
    })
}

const getPersonasAxiosAsync = () => {
    try {
        divSpinner.appendChild(getSpinner());
        // envio la peticion.
        const {data} = await axios.get(URL);
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
    getPersonaAjax, 
    getPersonasAxios, 
    getPersonasAxiosAsync, 
    getPersonasFetch, 
    getPersonasFetchAsync, 
    getPersonasAjaxAjax
}