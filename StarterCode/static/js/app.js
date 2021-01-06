// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var form = d3.select("#form");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit", runEnter);

// function showTable(filteredData) {

//     filteredData.forEach(function(sighting) {
//         //var tbod = d3.select(".tbod");
//         tbody.html("");

//         var row = tbody.append("tr");
//         Object.entries(sighting).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         })

// }) };

// YOUR CODE HERE!



function runEnter() {

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    
    var filtered = data.filter(account => account.datetime === inputValue);
    
    if (filtered.length < 1) {filtered = data;};

    tbody.html("");
    
    // showTable(filtered);

    filtered.forEach(function(sighting) {
        //var tbod = d3.select(".tbod");
        console.log(sighting);

        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });


};

runEnter();

// data.forEach(function(weatherReport) {
//   console.log(weatherReport);
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(function([key, value]) {
//     console.log(key, value);
//     // Append a cell to the row for each value
//     // in the weather report object
//     var cell = row.append("td");
//     cell.text(value);
//   });
// });
