var $searchBtn_handler = document.querySelector("#search");
var $dateInput_handler = document.querySelector("#datetime");
var $tbody_handler = document.querySelector("tbody");
var $stateInput_handler = document.querySelector("#state");
var $cityInput_handler = document.querySelector("#city");
var $shapeInput_handler = document.querySelector("#shape");
var $countryInput_handler = document.querySelector("#country");

$searchBtn_handler.addEventListener("click", SearchButtonClickEvent);

var filteredDataTable = dataSet;


function createTableContent() 
{
  $tbody_handler.innerHTML = "";
  for (var i = 0; i < filteredDataTable.length; i++) 
  {
    var address = filteredDataTable[i];
    console.log(address)
    var fields = Object.keys(address);
    var $row = $tbody_handler.insertRow(i);
    for (var j = 0; j < fields.length; j++) 
    {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function SearchButtonClickEvent() 
{
  var filterDate_value = $dateInput_handler.value;
  var filterState_value = $stateInput_handler.value.trim().toLowerCase();
  var filterCity_value = $cityInput_handler.value.trim().toLowerCase();
  var filterCountry_value = $countryInput_handler.value.trim().toLowerCase();
  var filterShape_value = $shapeInput_handler.value.trim().toLowerCase();

  if (filterDate_value != "")
  {
    filteredDataTable = dataSet.filter(function(address) 
    {
      var addressDate = address.datetime; 
      return addressDate === filterDate_value;
    });
  }
  else {filteredDataTable};
  

  if(filterState_value != "")
  {
    filteredDataTable = filteredDataTable.filter(function(address)
    {
      var addressState = address.state;
      return addressState === filterState_value;
    });
  }
  else{filteredDataTable};

  if(filterCity_value != "")
  {
    filteredDataTable = filteredDataTable.filter(function(address)
    {
      var addressCity = address.city;
      return addressCity === filterCity_value;
    });
  }

  else{filteredDataTable};

  if(filterCountry_value != "")
  {
    filteredDataTable = filteredDataTable.filter(function(address)
    {
      var addressCountry = address.country;
      return addressCountry === filterCountry_value;
    });
  }
  else
  {
    filteredDataTable
  };

  if(filterShape_value != "")
  {
    filteredDataTable = filteredDataTable.filter(function(address)
    {
      var addressShape = address.shape;
      return addressShape === filterShape_value;
    });
  }
  else
  {
    filteredDataTable
  };
  createTableContent();
}

createTableContent();
$(document).ready(function() 
{
  $('#table').DataTable();
});

