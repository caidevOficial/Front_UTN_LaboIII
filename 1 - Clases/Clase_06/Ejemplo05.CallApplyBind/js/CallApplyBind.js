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

//--- Example of an object with anonymous function --//
const obj_1 = {
    name: "Facu",
    age: 31,
    greetings: function(){
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
}

//--- A way to save a function of an object ---//
//--- in a method variable ---//
//--- but this gonna throw an error because have to be called with the object ---//
//--- and have undefined values in it's properties ---//
const method_1 = obj_1.greetings;
// this gonna print: ''Hola, soy undefined y tengo undefined años''
// the anonymous function it generates a scope.

//--- Example Of an object with arrow function ---//
const obj_2 = {
    name: "Facu",
    age: 31,
    greetings: ()=>{
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años`);
    }
}
// the arrow function it doesn't generate a scope but takes the scope of the father (Windows).

const obj_3 = {
    name: "Facundo",
    age: 25,
}

//--- this way you can assign the scope of obj_3 to the method greetings of the obj_2 ---//
const myMethod = obj_2.greetings;
// this gonna print: ''Hola, soy Facundo y tengo 25 años''
myMethod.call(obj_3);


const pet = {
    name: "Firulais",
    age: 3,
    sum: function(value){
        return this.age + value;
    }
}

myMethod.call(pet);
// this gonna print: ''Hola, soy Firulais y tengo 3 años''

const myMethod2 = pet.sum;
console.log(myMethod2.call(pet, 5));
//--- this gonna print ''8''

//--- Another way to do the same thing with apply ---//
console.log(myMethod2.apply(pet, [5]));

//--- Bind will return a new function with the scope enganchado ---//
const myMethod3 = pet.sum.bind(obj_1);
