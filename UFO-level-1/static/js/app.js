// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(sightings);
 
// Populate the table data initially on the page
sightings.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



//// FILTER THE TABLE BY A DATE////

// Select the button
var button = d3.select("#filter-btn");

// Function to filter the data table by one specific date

button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputDate = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputDate.property("value");
    console.log(inputValue);

  
    var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredData);

    // Remove the table to repopulate with new data
    tbody.html("");

    // Re-populate the table data
    filteredData.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

});


//// RESET THE TABLE TO SHOW ALL ////

// Select the button
var button = d3.select("#see-all");

// Function to filter the data table by one specific date

button.on("click", function() {

    // Remove the table to repopulate with new data
    tbody.html("");

    // Re-populate the table data
    sightings.forEach((ufoSighting) => {
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
    console.log("Table reset to show all values")
});