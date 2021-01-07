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

var allCities = data.map(sighting => sighting.city);
var cityList = unique(allCities);

cityList.forEach(city => {
    var myCity = cityDrops.append("option");
    myCity.text(city);
});

// states
var stateDrops = d3.select("#state-options");

var allStates = data.map(sighting => sighting.state);
var stateList = unique(allStates);

stateList.forEach(state => {
    var myState = stateDrops.append("option");
    myState.text(state);
});

// countries
var countryDrops = d3.select("#country-options");

var allCountries = data.map(sighting => sighting.country);
var countryList = unique(allCountries);

countryList.forEach(country => {
    var myCountry = countryDrops.append("option");
    myCountry.text(country);
});

// shapes
var shapeDrops = d3.select("#shape-options");

var allShapes = data.map(sighting => sighting.shape);
var shapeList = unique(allShapes);

shapeList.forEach(shape => {
    var myShape = shapeDrops.append("option");
    myShape.text(shape);
});


function runEnterBasic() { // BASIC VERSION

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


function runEnter()
 {
     d3.event.preventDefault();

     var inDate = d3.select("#datetime").property("value");
     var inCity = d3.select("#city-options").property("value");
     var inState = d3.select("#state-options").property("value");
     var inCountry = d3.select("#country-options").property("value");
     var inShape = d3.select("#shape-options").property("value");

     var filtered = data.filter(item => {
         return (item.date === inDate && 
            item.city === inCity && 
            item.state === inState && 
            item.country === inCountry && 
            item.shape === inShape);
     });

     tbody.html("");

     filtered.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        });
    });

 }

// initial setup
data.forEach(function(sighting) {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(function([key, value]) {
        var cell = row.append("td");
        cell.text(value);
    });
});