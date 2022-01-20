// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);


// Coordinates for each point to be used in the polyline.
let line = [
    // [33.9416, -118.4085],
    // [37.6213, -122.3790],
    [40.7899, -111.9791], //SFO
    [39.8561, -104.6737], //Denver
    [30.1975, -97.6664], //AUS
    [43.6777, -79.6248], //YYZ
    [40.6417, -73.7809] // JFK
    // [47.4502, -122.3088]
];


// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
    color: "blue",
    weight: 4,
    opacity: 0.5,
    dashArray: '1, 5'
}).addTo(map);

// reading cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
            radius: city.population / 200000,
            fillColor: "orange",
            color: "orange",
            lineweight: 4
        })
        .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
        .addTo(map);
});
//for (i = 0; i = line.length; i++) {
line.forEach(function(lines) {
    console.log(lines)
    L.circleMarker(lines, {
            radius: 50,
            fillColor: "orange",
            color: "orange",
            lineweight: 4
        })
        .bindPopup("<h2>" + lines + "</h2>")
        .addTo(map);
});

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);