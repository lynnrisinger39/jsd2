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

// Events
// ------------------------------------------
button.addEventListener('click', clickButton);


// Event Handlers
// ------------------------------------------
if ("geolocation" in navigator) {

function clickButton(initMap) {
	console.log('geoSuccess', initMap);
	navigator.geolocation.watchPosition(geoSuccess, geoError, options);
	};

	function geoError(positionError) {
	error.innerHTML = 'Error: Unable to retrieve your location. ' +  positionError.code + ': ' + positionError.message;
};

// Geolocation callback functions
// ------------------------------------------
function geoSuccess(position){
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	listLocation(latitude.toFixed(4),longitude.toFixed(4));
	placeMarker(latitude,longitude);
}



// Update page functions
// ------------------------------------------
function updateLocation(latitude, longitude) {
		var li = document.createElement('li');
	li.innerHTML = latitude + ' , ' + longitude;
	locations.appendChild(li);
};



// Callback when Google Maps has loaded
// ------------------------------------------

function initMap() {
	var map = new google.maps.Map(element, {
		center: {lat: 37.790841, lng: -122.40128},
		zoom: 5
	});
};


// Add / update the location marker
// ------------------------------------------


function putMarker(latitude,longitude) {
	if (marker){
		marker.setMap(null);
	};

	marker = new google.maps.Marker({
		map:map,
		position: {lat:latitude, lng:longitude}
	});
};