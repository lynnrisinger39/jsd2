// Structure
// ------------------------------------------
var form = document.querySelector("body form");

var list = document.querySelector(".fav-thing");

var ul = document.querySelector("#fav-list");

var input = document.querySelector(".new-thing");

// Events
// ------------------------------------------
form.addEventListener('submit', createNewThing);


// Event Listeners
// ------------------------------------------
function createNewThing(e) {
	e.preventDefault();
	console.log('createNewThing');
	var newThing = input.value
	console.log(newThing);
	addToList(newThing);
	form.reset()


	}


// Update Page function
// ------------------------------------------
function addToList(newThing) {
	
	console.log('addToList');
	
	var newList =  document.createElement('li')
	newList.innerHTML = newThing;
	ul.appendChild(newList);


}

