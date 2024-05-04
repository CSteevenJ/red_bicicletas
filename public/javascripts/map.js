//Cristian Steeven Jimenez Silva
//20221578020

// Crea un nuevo mapa Leaflet y lo asigna al elemento HTML con el id 'main_map', centrado en una ubicación y con un nivel de zoom determinados.
var map = L.map('main_map').setView([4.5802019,-74.1572601], 15);

// Agrega una capa de mosaico de OpenStreetMap al mapa, especificando el formato de los tiles y el nivel máximo de zoom.
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 30,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Crea un marcador en una ubicación específica y lo añade al mapa.
var marker = L.marker([4.579410556665517, -74.15799768034594]).addTo(map);

// Realiza una solicitud AJAX para obtener datos de bicicletas desde la API.
$.ajax({
    dataType: "json",
    url: "api/bicicletas",
    success: function(result){
        console.log(result);
        result.bicicletas.forEach(function(bici){
            L.marker(bici.ubicacion, {title: bici.id}).addTo(map);
        });
    }
})