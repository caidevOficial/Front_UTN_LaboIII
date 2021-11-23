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

import { updateTable} from "./dynamicTable.js";
import { myForm, updateForm, hideUnhideButtons } from "./myForm.js";
import { deleteObjectFetch } from "./jsFetch/Delete.js";
import { createObjectFetch } from "./jsFetch/Create.js";
import { getObjectsFetch, getObjectsFetchCB } from "./jsFetch/Read.js";
import { updateObjectFetch } from "./jsFetch/Update.js";
import { checkBoxHandler, filterAddsHandler } from "./Filter.js";

const $myNewForm = document.forms[0];
export let filteredAds=[];
export let temporalListAds=[];
export const myCheckBox =  document.querySelectorAll(".myCheck");
export const myAverage = document.getElementById("Average");
const buttonDelete = document.getElementById("buttonDelete");
const buttonModify = document.getElementById("buttonModify");
const buttonCreate = document.getElementById("buttonSubmit");
const buttonCancel = document.getElementById("buttonCancel");

/**
 * Event listener for the form load event.
 */
window.addEventListener("load", () => {
  getObjectsFetchCB((data)=>{
    filteredAds = data;
    temporalListAds = data;
    updateTable(data);
  });

  //! Event Handlers
  myCheckBox.forEach((element)=> element.addEventListener("click",checkBoxHandler));
  buttonDelete.addEventListener("click", DeleteHandlerEvent);
  buttonModify.addEventListener("click", ModifyHandlerEvent);
  buttonCreate.addEventListener("click", CreateHandlerEvent);
  buttonCancel.addEventListener("click", CancelHandlerEvent);
});

/**
 * Event listener for the form clic event.
 */
window.addEventListener("click", (ev) => {
  if(ev.target.matches('td')){
    hideUnhideButtons(false);
    updateForm($myNewForm.elements, ev.target.parentElement);
  }
});

/**
 * Event listener for the create event.
 */
const CreateHandlerEvent = () => {
  console.log('Button Submit Activated!');
  const myData = myForm($myNewForm.elements);
  if(myData.id === ''){
    createObjectFetch(myData);
    hideUnhideButtons(true);
    $myNewForm.reset();
  }
}

/**
 * Event listener for the cancel event.
 */
const CancelHandlerEvent = () => {
  console.log('Button Cancel Activated!');
  hideUnhideButtons(true);
}

/**
 * Event listener for the delete event.
 */
const DeleteHandlerEvent = () => {
  console.log('Button Delete Activated!');
  console.log('Id to delete: ');
  let idToDelete = $myNewForm.elements.idForm.value;
  console.log(idToDelete);
  deleteObjectFetch(idToDelete);
  hideUnhideButtons(true);
  $myNewForm.reset();
}

/**
 * Event listener for the update event.
 */
const ModifyHandlerEvent = () => {
  console.log('Button Modify Activated!');
  const myData = myForm($myNewForm.elements);
  updateObjectFetch(myData.id, myData);
  hideUnhideButtons(true);
  $myNewForm.reset();
}

window.addEventListener("change", (ev) => {
  if(ev.target.matches('#FTransaction')){
    console.log('Inside of the Change Event');
    filterAddsHandler(ev, filteredAds, temporalListAds);
  }
});
