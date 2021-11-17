/* 
 * MIT License
 *
 * Copyright (C) 2021 <FacuFalcone - CaidevOficial>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 * @author Facundo Falcone <CaidevOficial> 
*/


/**
 * Multiparadigma
 */

function Sumar(a, b) {
    let rta;
    setTimeout(() => {
        rta = a + b;
    }, 2000);

    return rta;
}

function cuadrado(a) {
    return producto(a, a);
}

function producto(a, b) {
    return a * b;
}

function greet(name) {
    return `Hello ${name}`;
}

function goodMorning(name) {
    return `Good Morning ${name}`;
}

function execution(param, fn) {
    return fn(param);
}

const sumarExp = Sumar;
const sumarArrow = (a, b) => a + b;
console.log(sumarExp(2, 3));
console.log(sumarArrow(2, 3));
console.log(execution('Facu', goodMorning));


const btn = document.getElementById('myButton').addEventListener('click', () => {
    console.log(execution('Facu', greet));
});
