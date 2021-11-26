
import {updateTable} from "./dynamicTable.js";
import {myCheckBox, myAverage, temporalListAds} from "./script.js";

const filterAddsHandler = (e, filteredAds, temporalList) =>{
    // Get the value of the comboBox
    let selectedOption =  FTransaction.value;
    let averageToShow = 'N/A';
    //! Shows the list filtered
    console.log('Filtereds ads list');
    console.log(filteredAds);
    //! Checks the selected option of the filter.
    console.log('Selected option');
    console.log(selectedOption);
    // Only filter when the value is Sale or Rent
    if(selectedOption != "all"){
        temporalList = filteredAds.filter(value => value.transaction == selectedOption);
        const average = temporalList.reduce((total, current) => total + parseInt(current.price), 0) /temporalList.length;
        //! Get the average by using reduce.
        averageToShow = `$ ${average.toFixed(2)}`;
        console.log("Temporal list");
        console.log(temporalList);
    }else{
        temporalList = filteredAds;
    }

    if(temporalList.length>0) {
        myAverage.value =  averageToShow;
    }

    // Load the table applying the filter
    updateTable(temporalList);
}

const checkBoxHandler = (e) =>{
  const selectedFilters = {};
  myCheckBox.forEach((item) => {
    selectedFilters[item.name] = item.checked;
  });

  const myMappedAdsList = temporalListAds.map((item) => {
    const mappedAdsList = {};
    for (const key in item) {
      if (selectedFilters[key] || key == "id") {
        mappedAdsList[key] = item[key];
      }
    }
    return mappedAdsList;
  });
  updateTable(myMappedAdsList);
}

export {filterAddsHandler, checkBoxHandler};