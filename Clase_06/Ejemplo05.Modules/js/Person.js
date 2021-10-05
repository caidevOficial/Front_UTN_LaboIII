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