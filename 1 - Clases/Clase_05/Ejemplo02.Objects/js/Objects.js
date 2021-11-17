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

const obj1 = {
    name : "Facu",
    age : 31,
    salary : 75800,
    getInfo : function() {
        return `${this.name} tiene ${this['age']} años y gana ${this.salary}`;
    }};
console.log(obj1.getInfo());
console.log(obj1);

//--- Another way to create an object ---//
function Person(){
    this.name = "Facu";
    this.age = 31;
    this.salary = 75800;

    this.setName = function(name){
        this.name = name;
    }

    this.getName = function(){
        return this.name;
    }

    Person.prototype.getInfo = function() {
        return `${this.name} tiene ${this.age} años y gana ${this.salary}`;
    }
}


console.log(new Person());

//--- Another way to clone an object ---//
const obj2 = {...obj1};

function Employee(name, age, salary){
    //--- This is the way to call the ---//
    //--- constructor of the parent class ---//
    Person.call(this, name, age, salary);
    
}

//--- Sets the prototype of the Person function ---//
//--- to the Employee object ---//
Object.setPrototypeOf(Employee.prototype, Person.prototype);

const employee1 = new Employee("Caidev", 31, 75800);
console.log(employee1.getInfo());

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

//--- A way to declare a class ---//
class Person {
    
    /**
     * Constructor of the class
     * @param {string} name
     * @param {int} age 
     * @param {float} salary 
     */
    constructor(name, age, salary = 150000){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    //--- Properties ---//

    /**
     * Method to set the name of the person
     * @param {string} name
     */
    set Name(name){
        this.name = name;
    }

    /**
     * Method to set the age of the person
     * @param {int} age
     */
    set Age(age){
        this.age = age;
    }

    /**
     * Method to set the salary of the person.
     * @param {float} salary
     */
    set Salary(salary){
        this.salary = salary;
    }

    /**
     * Method to get the name of the person.
     * @returns {string} name of the person.
     */
    get Name(){
        return this.name;
    }

    /**
     * Method to get the age of the person.
     * @returns {int} age of the person.
     */
    get Age(){
        return this.age;
    }

    /**
     * Method to get the salary of the person.
     * @returns {float} salary of the person.
     */
    get Salary(){
        return this.salary;
    }

    greetigs(){
        console.log(`Hola, soy ${this.Name} y tengo ${this.Age} años`);
    }

    /**
     * Sums two numbers and returns the result.
     * @param {int} a 
     * @param {int} b 
     * @returns int the sum of a and b
     */
    static sumSomething(a, b){
        return a + b;
    }
}

//--- Way to use inheritance ---//
class AnotherEmployee extends Person {
    constructor(name, age, salary, level){
        super(name, age, salary);
        this.level = level;
    }

    greetings(){
        console.log(`Hola, soy ${this.Name} y tengo ${this.Age} años y gana ${this.Salary}, level ${this.level}`);
    }

    workHard(){
        console.log("Estoy trabajando duro");
    }
}

//--- Instancing an object ---//
const aPerson = new Person("Facu", 31, 75800);
console.log(aPerson.greetings());

//--- Using inheritance ---//
const anEmployee = new AnotherEmployee("Facu", 31, 75800, "Senior");
console.log(anEmployee.greetings());
