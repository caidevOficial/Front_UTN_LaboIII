
import Anuncio_Auto from "./anuncio_auto.js";
import { getLocalStorageData, setLocalStorageData } from "./localStorage.js";

/**
 * Creates a new instance of ChildAnuncio.
 * @param {Anuncio_Auto} newEntity The new entity to be added.
 */
export function createEntity(newEntity) {
    console.log("createEntity", newEntity);
    let entities = getLocalStorageData(Anuncio_Auto.getMainKey());
    if(!entities) {
        newEntity.id = 1;
    }else {
        newEntity.id = entities.length + 1;
    }
    entities.push(newEntity);
    setLocalStorageData(Anuncio_Auto.getMainKey(), entities);
    alert('Anuncio Cargado con Exito!');
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
}

/**
 * Updates an existing entity.
 * @param {Anuncio_Auto} entity The entity to be updated.
 */
export function updateEntity(entity) {
    console.log("updateEntity", entity);
    let entities = getLocalStorageData(Anuncio_Auto.getMainKey());
    let index = entities.findIndex(e => e.id == entity.id);
    entities[index] = entity;
    setLocalStorageData(Anuncio_Auto.getMainKey(), entities);
    alert('Anuncio Modificado con Exito!');
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
}

/**
 * Deletes an existing entity.
 * @param {int} id ID of the entity to be deleted.
 */
export function deleteEntity(id) {
    console.log("deleteEntity", id);
    let entities = getLocalStorageData(Anuncio_Auto.getMainKey());
    let index = entities.findIndex(e => e.id == id);
    console.log('index', index);
    entities.splice(index, 1);
    setLocalStorageData(Anuncio_Auto.getMainKey(), entities);
    alert('Anuncio Eliminado con Exito!');
    document.getElementById('dynamicTable').scrollIntoView({behavior: "smooth", block: "start"});
}
