// from data.js
var tableData = data;

var tbody = d3.select("tbody");

var form = d3.select("#form");
var button = d3.select("#filter-btn");

button.on("click", runEnter);
form.on("submit", runEnter);

// LEVEL 2 WORK
function unique(arr) { // thank you stackoverflow https://stackoverflow.com/questions/11688692/how-to-create-a-list-of-unique-items-in-javascript
    var u = {}, a = [];
    for(var i = 0, l = arr.length; i < l; ++i){
        if(!u.hasOwnProperty(arr[i])) {
            a.push(arr[i]);
            u[arr[i]] = 1;
        }
    }
    return a;
};

// cities
var cityDrops = d3.select("#city-options");

var allCities = [];
data.forEach(sighting => allCities.push(sighting.city));
var cityList = unique(allCities);

cityList.forEach(city => {
    var myCity = cityDrops.append("option");
    myCity.text(city);
});

// states
var stateDrops = d3.select("#state-options");

var allStates = [];
data.forEach(sighting => allStates.push(sighting.state));
var stateList = unique(allStates);

stateList.forEach(state => {
    var myState = stateDrops.append("option");
    myState.text(state);
});

// countries
var countryDrops = d3.select("#country-options");

var allCountries = [];
data.forEach(sighting => allCountries.push(sighting.country));
var countryList = unique(allCountries);

countryList.forEach(country => {
    var myCountry = countryDrops.append("option");
    myCountry.text(country);
});

// shapes
var shapeDrops = d3.select("#shape-options");

var allShapes = [];
data.forEach(sighting => allShapes.push(sighting.shape));
var shapeList = unique(allShapes);

shapeList.forEach(shape => {
    var myShape = shapeDrops.append("option");
    myShape.text(shape);
});


function runEnter() { // BASIC VERSION

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    var filtered = data.filter(account => account.datetime === inputValue);

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