// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var form = d3.select("#form");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit", runEnter);



function runEnter() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    
    var filtered = data.filter(account => account.datetime === inputValue);
    
    //if (filtered.length < 1) {filtered = data;};

    tbody.html("");


    filtered.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });


};


// initial setup
data.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});