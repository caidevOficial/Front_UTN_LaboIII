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
