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

stopButton.addEventListener('click',redLight);
slowButton.addEventListener('click', yellowLight);
goButton.addEventListener('click',goLight);
caution.addEventListener('click', cautionLight)
// Event handlers
// ----------------------------------------------

function redLight(e){
	trafficLight.classList.toggle('stop');
	trafficLight.classList.remove('go');
	trafficLight.classList.remove('slow');
/*	console.log("hi")
*/};

function yellowLight(e){
	trafficLight.classList.toggle('slow');
	trafficLight.classList.remove('go','stop');
};

function goLight(e){
	trafficLight.classList.toggle('go');
	trafficLight.classList.remove('stop','slow');

};

var cautionFlash = setInterval(cautionLight, 500);

function cautionLight(e){
	clearInterval(cautionLight);
	trafficLight.classList.toggle('slow');
};