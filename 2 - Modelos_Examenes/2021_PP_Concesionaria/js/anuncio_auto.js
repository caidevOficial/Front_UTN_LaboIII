import Anuncio from './anuncio.js';

export default class Anuncio_Auto extends Anuncio {

    /**
     * Gets the local storage of the anuncio.
     * @returns {string} The local storage of the anuncio.
     */
    static getLocalStorage() {
        let anuncios = [];
        let anuncio = JSON.parse(localStorage.getItem(AnuncioChild.getMainKey()));
        if (anuncio != null) {
            anuncios.push(anuncio);
        }
        return anuncios;
    }

    /**
     * Constructor of the class AnuncioChild
     * @param {int} id The id of the anuncio.
     * @param {string} title The title of the anuncio.
     * @param {string} description Description of the anuncio.
     * @param {float} price The price of the anuncio.
     */
    constructor(id, title, transaction, description, price, doors, kilometers, horsePower) {
        super(id, title, transaction, description, price);
        this.doors = doors;
        this.kilometers = kilometers;
        this.horsePower = horsePower;
    }

    /**
     * Gets the word 'anuncio'.
     * @returns {string} The text 'anuncio'.
     */
    static getMainKey() {
        return 'anuncio';
    }
}