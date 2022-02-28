// The access token of mapbox
var map2 = new mapboxgl.Map({
    container: 'map2',
    style: 'mapbox://styles/chsongunimelb/ckur39e3m21uy17ldzkizrs6k/draft',
    attributionControl: false,
    scrollWheelZoom: true,

    center: [144.94, -37.500], // starting position, [lng, lat]
    zoom: 7 // starting zoom value

});

document.getElementById('fit2').addEventListener('click', () => {
    map2.fitBounds([
        // Get the idea of function from the website of mapbox examples
        [151.070, -33.993], // southwestern corner of the bounds
        [151.210, -33.746] // northeastern corner of the bounds
    ]);
});



// Add the control to the map.
map2.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);

// From the mapbox examples website
// Add zoom and rotation controls to the map.
map2.addControl(new mapboxgl.NavigationControl());