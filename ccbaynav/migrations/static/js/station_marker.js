/**
 * Initialize and display Google maps
 * Add Google marker to the data stations.
 * The Stations are Bob Hall, Lexington, and Port Aransas
 */


var initial_lat = 27.81688;         //  The corresponding latitude of map center at initialization.
var initial_long = -97.344177;      //  The corresponding longitude of map center at initialization.
var initial_zoom = 10;

function initMap() {

    map = new google.maps.Map(document.getElementById('map'), {
        zoom: initial_zoom,
        center: new google.maps.LatLng(initial_lat, initial_long),
        mapTypeId: 'roadmap'
    });
}

