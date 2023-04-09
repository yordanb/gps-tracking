// Initialize leaflet.js
var L = require("leaflet");

// Initialize the map
var map = L.map("map", {
  scrollWheelZoom: true,
});

// Set the position and zoom level of the map
map.setView([-1.927927, 115.844607], 15);

// Initialize the base layer
var osm_mapnik = L.tileLayer(
  "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  {
    maxZoom: 19,
    attribution:
      '&copy; OSM Mapnik <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }
).addTo(map);
