// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 10);

// Add GeoJSON data.
let sanFranAirport = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "properties": {
            "id": "3469",
            "name": "San Francisco International Airport",
            "city": "San Francisco",
            "country": "United States",
            "faa": "SFO",
            "icao": "KSFO",
            "alt": "13",
            "tz-offset": "-8",
            "dst": "A",
            "tz": "America/Los_Angeles"
        },
        "geometry": {
            "type": "Point",
            "coordinates": [-122.375, 37.61899948120117]
        }
    }]
};

// Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
    // pointToLayer: function(feature, latlng) {
    onEachFeature: function(feature, layer) {
        console.log(layer);
        layer.bindPopup().bindPopup("<h2>" + feature.properties.city + "</h2>");
        layer.bindPopup().bindPopup("<h2>" + feature.properties.state + "</h2>");
        layer.bindPopup().bindPopup("<h2>" + feature.properties.name + "</h2>");

        // "<h2>" + feature.properties.state + "</h2>"
        // "<h2>" + feature.properties.name + "</h2>"

        // return L.marker(latlng).bindPopup("<h2>" + feature.properties.city + "</h2>");
    }

}).addTo(map);



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
    strokeOpacity: 0,
    // // line - dasharray: 5,
    // 1;
    // fillOpacity: 0.5,
    lineweight: 4,
    // line: dashed

}).addTo(map);

// reading cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
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

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);