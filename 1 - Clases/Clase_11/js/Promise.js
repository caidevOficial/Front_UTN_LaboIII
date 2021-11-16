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
 * Validates if the result is a number, Even or Odd.
 * @param {int} number Number to make a validation if is even or not.
 * @returns A string with the result of the validation.
 */
const Validate = function ValidateOdd(number) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number === 'number') {
                let myReturn = 'The number is Odd'
                if (number % 2 === 0) {
                    myReturn = 'The number is Even'
                }
                resolve(myReturn)
            }
            reject('The number is not a number')
        }, 3000);
    });
};

Validate(2)
    .then((result) => {
        console.log(result)
    })
    .catch((err) => {
        console.log(err)
    });

/**
 * Makes a chain of promises and returns the result of a sum.
 * @param {int} num1 First number to make a division
 * @param {int} num2 First number to make a division
 * @returns The sum of the two numbers
 */
const MyPromiseSum = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                let result = num1 + num2;
                console.log(`The result is ${result}`);
                resolve(result);
            }
            reject('The numbers are not numbers')
        }, 2000);
    });

};

/**
 * Makes a chain of promises and returns the result of a Square.
 * @param {int} num1 Number to make a Square
 * @returns The result of the Square
 */
const MyPromiseQuad = (num1) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 === 'number') {
                let result = num1 * num1;
                console.log(`The result is ${result}`);
                resolve(result);
            }
            reject('The numbers are not numbers')
        }, 2000);
    });
};

/**
 * Makes a chain of promises and returns the result of a multiplication.
 * @param {int} num1 First number to make a multiplication
 * @param {int} num2 Second number to make a multiplication
 * @returns The multiplication of the two numbers
 */
const MyPromiseMul = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                let result = num1 * num2;
                console.log(`The result is ${result}`);
                resolve(result);
            }
            reject('The numbers are not numbers')
        }, 2000);
    });
};

/**
 * Makes a chain of promises and returns the result of a subtraction.
 * @param {int} num1 First number to make a subtraction
 * @param {int} num2 Second number to make a subtraction
 * @returns The subtraction of the two numbers
 */
const MyPromiseSub = (num1, num2) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num1 === 'number' && typeof num2 === 'number') {
                let result = num1 - num2;
                console.log(`The result is ${result}`);
                resolve(result);
            }
            reject('The numbers are not numbers')
        }, 2000);
    });
};

/**
 * Tryes to make a chain of promises and returns the result of many calculus.
 * @param {int} a First number to make a Calculus
 * @param {int} b Second number to make a Calculus
 */
const CalculatePromise = (a, b) => {
    MyPromiseSum(a, b)
    .then(sum => MyPromiseQuad(sum))
    // Example using a ternary operator
    .then(quad => 
        quad > 50 ? 
        Promise.reject('The result is greater than 50') : 
        MyPromiseMul(quad, 2))
    .then(mul => MyPromiseSub(mul, 2))
    .catch(err => console.log(err));
};

/**
 * Makes a calculus using Async/Await.
 * @param {int} a First number to make a Calculus
 * @param {int} b Second number to make a Calculus
 */
const CalculatePromiseAsync = async (a, b) => {
    try {
        let sum = await MyPromiseSum(a, b);
        let quad = await MyPromiseQuad(sum);
        let mul = await MyPromiseMul(quad, 2);
        let sub = await MyPromiseSub(mul, 2);
        console.log(sub);
    } catch (err) {
        console.log(err);
    }
}

console.log('Inicio');
Calculate(2, 3);
console.log('Fin');