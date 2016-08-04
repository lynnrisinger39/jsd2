// Structure
// ------------------------------------

var results = document.querySelector(".results");
var form = document.querySelector("form");
var zip = document.querySelector("form .zip");


// Events
// ------------------------------------
form.addEventListener('submit', getRestaurants);


function getRestaurants(event){
	event.preventDefault();

	var search = zip.value;
	console.log(search);

	var url = "http://opentable.herokuapp.com/api/restaurants?zip=94040" + search;
	$.getJSON(url, updateRestaurants);
};
// Event Handler 
// ------------------------------------


// Update page
// ------------------------------------
function updateRestaurants(json){
	json.restaurants.forEach(createRestaurant)
	results.innerHTML = '';
};

function createRestaurant(restaurant){
var li = document.createElement('li');
var img = document.createElement('img');
var h2 = document.createElement('h2');
var p = document.createElement('p');


};



img.src = restaurant.image_url;
p.innerHTML = restaurant.name;
h2.innerHTML = restaurant.address;


results.appendChild(li);

var restaurants = [];

restaurants.push(thai, pizza);



var pizza = {
	name: " pizza hut",
	address: " ",
	image: " ",
}
	var thai = {
	name: "thai food ",
	address: " ",
	image: " ",
}
// li.innerHTML('')