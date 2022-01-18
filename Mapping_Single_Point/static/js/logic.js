// Add console.log to check to see if our code is working.
console.log("working");


// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([41.1977, -97.4231], 4);
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// We create the tile layer that will be the background of our map.

//  Add a marker to the map for Los Angeles, California.
// var marker = L.marker([34.0522, -118.2437]).addTo(map);

// var circle = L.circle([34.0522, -118.2437], {
//     color: 'black',
//     fillColor: 'yellow',
//     // fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// better way to give the above circle
// L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "yellow"
// }).addTo(map);

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);