// Setup
// ------------------------------------------
var options = {
    enableHighAccuracy: true,
    maximumAge: 3000,
    timeout: 2700
};

var geoMarker;

// Setup for weather layers//

var map;
var geoJSON;
var request;
var gettingData = false;
var openWeatherMapKey = "AIzaSyCxked12r3cSN8vz5fZJ0aTlfNyiVl1T10";



// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var locations = document.querySelector('main .locations');
var error     = document.querySelector('main .error');
var element = document.querySelector('main .map');
var marker;
var map;

// Weather structure//
map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
    // Add interaction listeners to make weather requests
google.maps.event.addListener(map, 'idle', checkIfDataRequested);
 // Sets up and populates the info window with details
    map.data.addListener('click', function(event) {
      infowindow.setContent(
       "<img src=" + event.feature.getProperty("icon") + ">"
       + "<br /><strong>" + event.feature.getProperty("city") + "</strong>"
       + "<br />" + event.feature.getProperty("temperature") + "&deg;C"
       + "<br />" + event.feature.getProperty("weather")
       );
      infowindow.setOptions({
          position:{
            lat: event.latLng.lat(),
            lng: event.latLng.lng()
          },
          pixelOffset: {
            width: 0,
            height: -15
          }
        });
      infowindow.open(map);
    });
  
  function initialize() {
    var mapOptions = {
      zoom: 4,
      center: new google.maps.LatLng(50,-50)
    };


  // stops extra data requests for optimization//



   var checkIfDataRequested = function() {
    // Stop extra requests being sent
    while (gettingData === true) {
      request.abort();
      gettingData = false;
    }
    getCoords();
  };
  // Get the coordinates from the Map bounds
  var getCoords = function() {
    var bounds = map.getBounds();
    var NE = bounds.getNorthEast();
    var SW = bounds.getSouthWest();
    getWeather(NE.lat(), NE.lng(), SW.lat(), SW.lng());
  };

   // Make the weather request
  var getWeather = function(northLat, eastLng, southLat, westLng) {
    gettingData = true;
    var requestString = "http://api.openweathermap.org/data/2.5/box/city?bbox="
                        + westLng + "," + northLat + "," //left top
                        + eastLng + "," + southLat + "," //right bottom
                        + map.getZoom()
                        + "&cluster=yes&format=json"
                        + "&APPID=" + openWeatherMapKey;
    request = new XMLHttpRequest();
    request.onload = proccessResults;
    request.open("get", requestString, true);
    request.send();
  };

  // Take the JSON results and proccess them//

  var proccessResults = function() {
    console.log(this);
    var results = JSON.parse(this.responseText);
    if (results.list.length > 0) {
        resetData();
        for (var i = 0; i < results.list.length; i++) {
          geoJSON.features.push(jsonToGeoJson(results.list[i]));
        }
        drawIcons(geoJSON);
    }
  };

  var infowindow = new google.maps.InfoWindow();

 // For each result that comes back, convert the data to geoJSON
  var jsonToGeoJson = function (weatherItem) {
    var feature = {
      type: "Feature",
      properties: {
        city: weatherItem.name,
        weather: weatherItem.weather[0].main,
        temperature: weatherItem.main.temp,
        min: weatherItem.main.temp_min,
        max: weatherItem.main.temp_max,
        humidity: weatherItem.main.humidity,
        pressure: weatherItem.main.pressure,
        windSpeed: weatherItem.wind.speed,
        windDegrees: weatherItem.wind.deg,
        windGust: weatherItem.wind.gust,
        icon: "http://openweathermap.org/img/w/"
              + weatherItem.weather[0].icon  + ".png",
        coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
      },
      geometry: {
        type: "Point",
        coordinates: [weatherItem.coord.lon, weatherItem.coord.lat]
      }
    };

    // Set the custom marker icon
    map.data.setStyle(function(feature) {
      return {
        icon: {
          url: feature.getProperty('icon'),
          anchor: new google.maps.Point(25, 25)
        }
      };
    });
    // returns object
    return feature;
  };

    // Add the markers to the map
  var drawIcons = function (weather) {
     map.data.addGeoJson(geoJSON);
     // Set the gettingData flag to finished
     gettingData = false;
  };

  // Clear data layer and geoJSON
  var resetData = function () {
    geoJSON = {
      type: "FeatureCollection",
      features: []
    };
    map.data.forEach(function(feature) {
      map.data.remove(feature);
    });
  };
google.maps.event.addDomListener(window, 'load', initialize);




// Events
// ------------------------------------------
button.addEventListener('click', clickButton);
button.addEventListener('click', clickNewsButton);


// Event Handlers
// ------------------------------------------
if ("geolocation" in navigator) {

function clickButton(initMap) {
    navigator.geolocation.watchPosition(geoSuccess, geoError, options);
    function newsByDate(){
    };

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
/*  placeMarker(latitude,longitude);
*/};



// Update page functions
// ------------------------------------------
function updateLocation(latitude, longitude) {
    console.log('updateLocation',latitude,longitude);

    var li = document.createElement('li');
    li.innerHTML = latitude + ' , ' + longitude;
    locations.appendChild(li);


    placeMarker(latitude,longitude);
};



// Callback when Google Maps has loaded
// ------------------------------------------

function initMap() {
    map = new google.maps.Map(element, {
        center: {lat: 37.790841, lng: -122.40128},
        zoom: 8
    });
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
        position: {lat:latitude, lng:longitude},
        zoom: 13
    });
 map.setCenter( { lat: latitude, lng: longitude } ); 
    map.setZoom(17);
};
};
};
/*

 $(function clickNewsButton () {
        var params = {
            // Request parameters
        };
      
        $.ajax({
            url: "https://api.fantasydata.net/mlb/v2/{format}/NewsByDate/{date}?" + $.param(params),
            beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","{subscription key}");
            },
            type: "GET",
            // Request body
            data: "{body}",
        })
        .done(function(data) {
            alert("success");
        })
        .fail(function() {
            alert("error");
        });
    });
*/