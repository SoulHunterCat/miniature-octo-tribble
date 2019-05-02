var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// L.tileLayer('toto.png', {
// }).addTo(map);

var bounds = [[0,0], [512, 256]];
var image = L.imageOverlay('toto.png', bounds).addTo(mymap);

mymap.fitBounds(bounds);

var marker = L.marker([51.5, -0.09]).addTo(mymap);

var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);