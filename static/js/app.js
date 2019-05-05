// from data.js
var tableData = data;

// For filtering table
const filterTable = d3.select("#filter-btn");

// Refreshing the table
const refreshTable = d3.select("#refresh-btn")


// Loading data to the table

const tbody = d3.select("tbody");

function loadData() {
    tableData.forEach(data => {
        const row = tbody.append("tr");
        for (const key in data) {
           row.append("td").text(data[key]);
        }
    })
}
loadData()



function sightings(){

// Preventing default form refresh
  d3.event.preventDefault()

// Filtering Data from table
  const filterDate = d3.select("#datetime").property("value")
  if (filterDate !=""){tableData= tableData.filter(info => info.datetime===filterDate)};

  const filterCity = d3.select("#city").property("value")
  if (filterCity !=""){tableData= tableData.filter(info => info.city===filterCity)};

  const filterState = d3.select("#state").property("value")
  if (filterState !=""){tableData= tableData.filter(info => info.state===filterState)};

  const filterCountry = d3.select("#country").property("value")
  if (filterCountry !=""){tableData= tableData.filter(info => info.country===filterCountry)};
   
  const filterShape = d3.select("#shape").property("value")
  if (filterShape !=""){tableData= tableData.filter(info => info.shape===filterShape)};

  d3.select("tbody").html("");


// looping through the filtered data
tableData.forEach(data => {

  const date= data.datetime
  const city= data.city
  const state= data.state
  const country= data.country
  const shape= data.shape
  const duration= data.durationMinutes
  const comment= data.comments

// Adding rowas to the table
  const row= tbody.append("tr")

  row.append("td").text(date)
  row.append("td").text(city)
  row.append("td").text(state)
  row.append("td").text(country)
  row.append("td").text(shape)
  row.append("td").text(duration)
  row.append("td").text(comment)
})};


filterTable.on("click",sightings);
