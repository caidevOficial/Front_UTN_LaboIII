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

 import {URL} from "./BackendData.js";
 import { ToggleSpinner } from "./Spinner.js";

 /**
  * Updates the information of the car.
  * @param {int} id The id of the car to update.
  * @param {Auto} object The car to update.
  */
 const updateObjectFetch = (id,object)=>{
    const options  =  {
        method:"PUT",
        headers:{
            "Content-Type":"application/json; charset=utf-8"
        },
        body:JSON.stringify(object)
    };
    //ToggleSpinner(true);
    fetch(`${URL}/${id}`, options)
    .then((res)=>{
        // valido que la respuesta sea correcta.
        // retorna una promesa, el retorno del retorno de res.
        // si falla, envio una promesa rechazada.
        return res.ok ? res.json() : Promise.reject(res);
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.error(`Error: ${error.status} : ${error.status}`);
    })
    .finally(()=>{
        ToggleSpinner(false);
    });
};

export { updateObjectFetch };