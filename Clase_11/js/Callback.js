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

/**
 * Sumar dos numeros y al resultado calcularle el cuadrado
 * Al cuadrado multiplicarlo por 10 y al resultado restarle 2
 * Al resultado informarlo por consola
 */


function MySum(num1, num2, callback) {
    let sum;
    // We could capture the possible errors here
    if(typeof num1 !== 'number' 
    || typeof num2 !== 'number' 
    || typeof callback === 'function') {
        throw new Error('Los parametros deben ser numeros y la funcion de callback debe ser una funcion');
    }
    setTimeout(() => {
        sum = num1 + num2;
        console.log(`El resultado es ${sum}`);
        callback(sum);
    }, 2000);
        
}

function MySquare(num, callback) {
    let square;
    // We could capture the possible errors here
    if(typeof num1 !== 'number' 
    || typeof num2 !== 'number' 
    || typeof callback === 'function') {
        throw new Error('Los parametros deben ser numeros y la funcion de callback debe ser una funcion');
    }
    setTimeout(() => {
        square = num * num;
        console.log(`El resultado es ${square}`);
        callback(square);
    }, 2000);
}

function MySub(num1, num2, callback) {
    let sub;
    // We could capture the possible errors here
    if(typeof num1 !== 'number' 
    || typeof num2 !== 'number' 
    || typeof callback === 'function') {
        throw new Error('Los parametros deben ser numeros y la funcion de callback debe ser una funcion');
    }
    setTimeout(() => {
        sub = num1 - num2;
        console.log(`El resultado es ${sub}`);
        callback(sub);
    }, 2000);
}

function MyMult(num, num2, callback) {
    let mult;
    // We could capture the possible errors here
    if(typeof num1 !== 'number' 
    || typeof num2 !== 'number' 
    || typeof callback === 'function') {
        throw new Error('Los parametros deben ser numeros y la funcion de callback debe ser una funcion');
    }
    setTimeout(() => {
        mult = num1 * num2;
        console.log(`El resultado es ${mult}`);
        callback(mult);
    }, 2000);
}

function MyInform(num) {
    console.log(`El resultado es ${num}`);
}

// Sync Code (Blocking Code)
console.log('Inicio');
try {
 MySum(2, 3, myCallback);   
} catch (error) {
    console.log(error);
}

console.log('Fin');
