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

//--- Way to use inheritance ---//
class AnotherEmployee extends Person {

    /**
     * Constructor of the class Employee
     * @param {string} name 
     * @param {int} age 
     * @param {float} salary 
     * @param {string} level 
     */
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
