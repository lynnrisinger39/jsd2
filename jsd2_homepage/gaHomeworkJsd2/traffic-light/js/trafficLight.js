// Setup
// ----------------------------------------------

// Structure
// ----------------------------------------------
var stopButton = document.querySelector('.stop-button');
var slowButton = document.querySelector('.slow-button');
var goButton = document.querySelector('.go-button');
var caution = document.querySelector('.caution-button');
var stopLight = document.querySelector('.stop-light');
var slowLight = document.querySelector('.slow-light');
var goLight = document.querySelector('.go-light');
var trafficLight = document.querySelector('#traffic-light');

// Events
// ----------------------------------------------

stopLight.addEventListener('click',redLight,false);
/*slowButton.addEventListener('click', yellowLight, false);
goButton.addEventListener('click',goLight,false);
// Event handlers*/
// ----------------------------------------------

function redLight(e){
	trafficLight.classList.add('stop');
	trafficLight.classList.remove('go');
	trafficLight.classList.remove('slow');
/*	clearInterval(cautionLight);
*/};


