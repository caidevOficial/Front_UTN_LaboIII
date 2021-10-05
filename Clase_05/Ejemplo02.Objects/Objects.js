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