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

// When i'm gonna save a reference to an array, i'm gonna use const
        // then when i'm gonna save a primtive i'm gonna use let or var
        const array = [1, 2, 3, 4, 5];
        console.log('Array 1:', array);
        const array2 = new Array(6, 7, 8, 9, 10);
        console.log('Array 2:', array2);
        
        // Creates a new instance of an array
        const array3 = Array.of(11, 12, 13, 14, 15);

        // Concatenates two arrays and returns a new array
        const vec = array.concat(array2, array3);
        console.log('Array 1 Concat:', array);

        //--- Spread operator | propagation operator. similar to concat ---//
        const array4 = [...array2]

        //--- Returns the first element of an array ---//
        console.log('Array 1 First:', array[0]);

        //--- Add an element to the beginning of an array ---//
        vec.unshift(0);
        
        //--- Add an element to the end of an array ---//
        vec.push(6);
        
        //--- Remove the first element of an array ---//
        console.log('First element', vec.shift());
        
        //--- Remove the last element of an array ---//
        console.log('Last element', vec.pop());

        //--- Callback Functions ---//
        vec.forEach((element, index, array) => {
            console.log(element, index, array);
        });

        //--- It's a way to map an array ---//
        const duplicateds = vec.map((element) => {
            if(element % 2 === 0) {
                return element;
            }else{
                return element * 2;
            }
        });

        console.log('Duplicateds:', duplicateds);

        //--- Filter ---//
        const filter = vec.filter(element => !(element % 2));

        console.log('Filter:', filter);

        //--- Ternary operator ---//
        const ternary = vec.every((element) => {
            element % 2 === 0 ? element: element * 2;
        });

        console.log('Ternary:', ternary);
        
        //--- Reduce ---// -> Used to consume a json file
        // unique value function (Like AVG, SUM, and so on)
        const reduce = vec.reduce((accumulator, element) => {
            return accumulator + element;
        }, 0);

        console.log('Reduce:', reduce);

        //--- Find ---//
        //--- Find the first element of an array that satisfies a condition ---//
        const find = vec.find(element => element % 2 === 0);

        console.log('Find:', find);
        let name = 'Juan'.slice(0, 3);
        console.log('Name:', name);
        console.log('Name:', name.substr(0, 3));
        console.log('Name:', name.substring(0, 3));
