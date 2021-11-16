
import Anuncio_Auto from "./anuncio_auto.js";

export function myForm(userInput){
    const myAnuncio = new Anuncio_Auto(
        userInput.idForm.value,
        userInput.textTitle.value,
        userInput.selectTransaction.value,
        userInput.textdescription.value,
        userInput.textPrice.value,
        userInput.textDoors.value,
        userInput.textKilometers.value,
        userInput.textHorsePower.value
    );

    return myAnuncio;
}

/**
 * Updates the form with the data of the anuncio.
 * @param {*} userInput 
 * @param {*} tr 
 */
export function updateForm(userInput, tr){
    userInput.idForm.value = tr.id;
    userInput.textTitle.value = tr.children[0].textContent;
    userInput.selectTransaction.value = tr.children[1].textContent;
    userInput.textdescription.value = tr.children[2].textContent;
    userInput.textPrice.value = tr.children[3].textContent;
    userInput.textDoors.value = tr.children[4].textContent;
    userInput.textKilometers.value = tr.children[5].textContent;
    userInput.textHorsePower.value = tr.children[6].textContent;
}

/**
 * Hide or shows the buttons according to the state of the condition.
 * @param {boolean} condition A boolean state that indicates if the 
 * buttons should be hide (true) or not (false).
 */
export function hideUnhideButtons(condition){
    if(condition){
        document.querySelector('#id').value = '';
        document.querySelector('#buttonSubmit').classList.remove('hidden');
        document.querySelector('#buttonModify').classList.add('hidden');
        document.querySelector('#buttonDelete').classList.add('hidden');
    }else{
        document.querySelector('#buttonSubmit').classList.add('hidden');
        document.querySelector('#buttonModify').classList.remove('hidden');
        document.querySelector('#buttonDelete').classList.remove('hidden');
    }
}