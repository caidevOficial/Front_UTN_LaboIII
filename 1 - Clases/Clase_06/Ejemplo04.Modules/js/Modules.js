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

//--- if the objetc imported doesn't have a ''export default'' but ''export''
//--- then we can use the following bracket to import the object:
import { Person as P} from './Person.js';
import { Employee as E} from "./Employee.js";

//--- Instancing an object ---//
const aPerson = new Person("Facu", 31, 75800);
console.log(aPerson.greetings());

//--- Using inheritance ---//
const anEmployee = new Employee("Facu", 31, 75800, "Senior");
console.log(anEmployee.workHard());


