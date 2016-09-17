// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};

var geoMarker;


// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');
var element = document.querySelector('main .map');
var marker;
var map;
// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
if ("geolocation" in navigator) {

function clickButton(initMap) {
	navigator.geolocation.watchPosition(geoSuccess, geoError, options)
	};map.setCenter( { lat: latitude, lng: longitude } ); 
    map.setZoom(17);
	

	function geoError(positionError) {
	error.innerHTML = 'Error: Unable to retrieve your location. ' +  positionError.code + ': ' + positionError.message;
};
};

// Geolocation callback functions
// ------------------------------------------
function geoSuccess(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	console.log('geoSuccess',latitude,longitude);
	updateLocation(latitude, longitude);
/*	placeMarker(latitude,longitude);
*/};



// Update page functions
// ------------------------------------------




// Callback when Google Maps has loaded
// ------------------------------------------

function initMap() {
	map = new google.maps.Map(element, {
		center: {lat: 37.790841, lng: -122.40128},
		zoom: 12
	});
	function updateLocation(latitude, longitude) {
	console.log('updateLocation',latitude,longitude);

	var li = document.createElement('li');
	li.innerHTML = latitude + ' , ' + longitude;
	locations.appendChild(li);


	placeMarker(latitude,longitude);
};
};


// Add / update the location marker
// ------------------------------------------


function placeMarker(latitude,longitude) {
	console.log('placeMarker',latitude,longitude);

	if (marker) {
		marker.setMap(null);
	};
	console.log('past if marker!');

	marker = new google.maps.Marker({
		map:map,
		position: {lat:latitude, lng:longitude}
	});
	map.setCenter( { lat: latitude, lng: longitude } ); 
    map.setZoom(17);

};
