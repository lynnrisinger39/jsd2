// Structure
// ------------------------------------------
var button    = document.querySelector('main button');
var addresses = document.querySelector('main .addresses');


// Events
// ------------------------------------------
button.addEventListener('click', generateAddress);


// Setup
// ------------------------------------------
// TODO: create your arrays here (street, city, state, etc)
var streetNumber = [1,2,3];
var streetName = ['a','b','c'];
var cityName = ['mountain view','palo alto','san francisco'];
var stateName = ['ca', 'nv', 'or'];
var postalCode = [94024, 94040, 95010];


// Event Listeners
// ------------------------------------------
function generateAddress(randomAddresses) {
	// TODO: randomly select one item from each of these arrays 
	//       and then use them to construct a random address

var randAddress  =Math.floor(Math.random() * streetNumber.length-1)+1;
var randStreet  =Math.floor(Math.random() * streetName.length-1)+1;
var randCity  =Math.floor(Math.random() * cityName.length-1)+1;
var randState =Math.floor(Math.random() * stateName.length-1)+1;
var randPostal =Math.floor(Math.random() * postalCode.length-1)+1;

var randomAddresses = streetNumber[randAddress] + ' ' + streetName[randStreet] + ' ' + cityName[randCity] + ' ' + stateName[randState] + postalCode[randPostal];
addAddress(randomAddresses);
}




// Update page functions
// ------------------------------------------
function addAddress(address) {
	var li = document.createElement('li');
	li.innerHTML = address;
	addresses.appendChild(li);
}

 console.log(randomAddresse);



