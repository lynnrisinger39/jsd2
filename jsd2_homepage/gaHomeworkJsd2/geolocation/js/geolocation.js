// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');


// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
function clickButton(initMap) {
	console.log('getLocation', initMap);
	function initMap(){
		getLocation();
	}
}


// Geolocation callback functions
// ------------------------------------------
function getLocation(){
	var el = document.querySelector('#geolocation-map');

	var options = {
		center: { lat: 36.7783, lng: -119.4179 },
		zoom: 5
	};

	var map = new google.maps.Map(el, options);

	navigator.geolocation.getCurrentPosition(updateLocation);



// Update page functions
// ------------------------------------------
function updateLocation(position) {
		console.log("updateLocation", position);
// LAT AND LONG.

var latitude = position.coords.latitude;
var longitude = position.coords.longitude;

map.setCenter( { lat: latitude, lng: longitude } ); 
		map.setZoom(17);
	}
}


// Callback when Google Maps has loaded
// ------------------------------------------




// Add / update the location marker
// ------------------------------------------
