
import Anuncio_Auto from "./anuncio_auto.js";
import { createEntity, updateEntity, deleteEntity } from "./myCrud.js";
import { createTable, updateTable} from "./dynamicTable.js";
import { myForm, updateForm, hideUnhideButtons } from "./myForm.js";
import { getLocalStorageData } from "./localStorage.js";
import toogleSpinner from "./mySpinner.js";

let myLocalData;
const $myNewForm = document.forms[0];

window.addEventListener("load", () => {
    console.log('Dentro del windows', $myNewForm);
  myLocalData = getLocalStorageData(Anuncio_Auto.getMainKey());
  updateTable(myLocalData);
});

window.addEventListener("click", (ev) => {
    console.log('dentro del clic');
  if(ev.target.matches('td')){
      hideUnhideButtons(false);
      updateForm($myNewForm.elements, ev.target.parentElement);
  }

  if(ev.target.matches('#buttonCancel')){
        hideUnhideButtons(true);
  }

  if(ev.target.matches('#buttonDelete')){
      console.log('Dentro de script, delete button');
    let idToDelete = $myNewForm.elements.idForm.value;
    deleteEntity(idToDelete);
    console.log('Dentro de delete');
    toggleSpinner();
      myLocalData = getLocalStorageData(Anuncio_Auto.getMainKey());

      setTimeout(() => {
          updateTable(myLocalData);
          toggleSpinner();
          hideUnhideButtons(true);
      }, 3000);

      $myNewForm.reset();
  }
});

$myNewForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  console.log('dentro de submit', ev);
  const myData = myForm($myNewForm.elements);
    if(myData.id === ''){
        createEntity(myData);
    }else{
        updateEntity(myData);
      }
      toggleSpinner();

    myLocalData = getLocalStorageData(Anuncio_Auto.getMainKey());

    setTimeout(() => {
        updateTable(myLocalData);
        toggleSpinner();
    }, 3000);

    hideUnhideButtons(true);
    $myNewForm.reset();
});