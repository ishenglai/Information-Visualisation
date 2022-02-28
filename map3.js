// The access token of mapbox
var map3 = new mapboxgl.Map({
    container: 'map3',
    style: 'mapbox://styles/chsongunimelb/ckuqzpopm4zne17rygwbfeuhq/draft',
    attributionControl: false,
    scrollWheelZoom: true,

    center: [144.94, -37.500], // starting position, [lng, lat]
    zoom: 7 // starting zoom value

});

document.getElementById('fit3').addEventListener('click', () => {
    map3.fitBounds([
        // Get the idea of function from the website of mapbox examples
        [151.070, -33.993], // southwestern corner of the bounds
        [151.210, -33.746] // northeastern corner of the bounds
    ]);
});



// Add the control to the map.
map3.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// From the mapbox examples website
// Add zoom and rotation controls to the map.
map3.addControl(new mapboxgl.NavigationControl());