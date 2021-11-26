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
 * Creates a table with the data received from the API.
 * @param {array} data The data to use to create the table.
 */
function createTable(data){
    const table = document.createElement('table');
    if(data.length > 0){
        table.setAttribute('class', 'table table-bordered table-dark');
        table.appendChild(createtHead(data));
        data.forEach(item => {
            table.appendChild(createTBody(item));
        });
    }

    document.getElementById('dynamicTable').appendChild(table);
}

/**
 * Creates the table head.
 * @param {array} data The data to use to create the Head of the table.
 * @returns {Element} The table head.
 */
function createtHead(data){
    const thead = document.createElement('thead');
    const objectKeys = Object.keys(data[0]);
    const tr = document.createElement('tr');
    tr.style.backgroundColor = '#f2f2f2';

    objectKeys.forEach(key => {
        if(key !== 'id'){
            const th = document.createElement('th');
            th.appendChild(document.createTextNode(key));
            tr.appendChild(th);
        }
    });

    return thead.appendChild(tr);
}

/**
 * Creates a table body.
 * @param {array} data The data to use to create the table body.
 * @returns The table body.
 */
function createTBody(data){
    const tbody = document.createElement('tbody');
    //const values = Object.values(data);
    const tr = document.createElement('tr');

        Object.values(data).forEach(key => {
            if(key !== data.id){
                const td = document.createElement('td');
                td.textContent = key;
                tr.appendChild(td);
            }else{
                tr.setAttribute('id', key);
            }
        });


    return tbody.appendChild(tr);
}

function updateTable(data){
    if(data.length > 0){
        const table = document.getElementById('dynamicTable');
        while(table.hasChildNodes()){
            table.removeChild(table.firstChild);
        }

        createTable(data);
    }
}

export {createTable, updateTable};