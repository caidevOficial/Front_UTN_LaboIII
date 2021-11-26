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

 import { ToggleSpinner } from "../Spinner.js";
 import {URL} from "../BackendData.js";
 
 /**
  * Creates an object Auto-type and insert it into the database.
  * @param {Auto} myObject The car to be created.
  */
 const createObjectFetch = (myObject) => {

    const option = {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(myObject)
    };

    ToggleSpinner(true);
    // envio la peticion.
    fetch(URL, option)
    // respuesta de la peticion.
    .then((res)=>{
        console.log(res);
        // valido que la respuesta sea correcta.
        // retorna una promesa, el retorno del retorno de res.
        // si falla, envio una promesa rechazada.
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        alert(`Object [${data.id}] [${data.title} ${data.description}] created sucessfully`);
    })
    // al fallar, lo catcheo y muestro.
    .catch((err)=>{
        console.error(`Error: ${err}`);
    })
    .finally(()=>{
        ToggleSpinner(false);
    })
}

export {createObjectFetch};