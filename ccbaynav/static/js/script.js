/**
 * Initialize and display Google maps
 */

var initial_lat = 27.802912;         //  The corresponding latitude of map center at initialization.
var initial_long = -97.355775;      //  The corresponding longitude of map center at initialization.
var initial_zoom = 11;              //  The corresponding zoom of map center at initialization.
var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: initial_zoom,
        center: new google.maps.LatLng(initial_lat, initial_long),
        mapTypeId: 'roadmap'
    });
}
