// Setup / Data
// ------------------------------------------
var startupX = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter'];
var startupY = ['Slack', 'Trello', 'Tesla', 'Hyperloop', 'Harvest'];
var startupIdea;
var favorites = [];

// Structure
// ------------------------------------------
var startup  = document.querySelector('.startup');
var generate = document.querySelector('.generate');
var save     = document.querySelector('.save');
var print    = document.querySelector('.print');
var list     = document.querySelector('.list');
var clear    = document.querySelector('.clear');

// Events
// ------------------------------------------
generate.addEventListener('click', generateStartup);
save.addEventListener('click', saveFavorite);
print.addEventListener('click', printFavorites);
clear.addEventListener('click', clearFavorites);


// Event Listeners
// -----------------------------------------
function generateStartup(){
	// TODO: generate two random index numbers, one for each array
	var randX  =Math.floor(Math.random() * startupX.length-1)+1;
	var randY  =Math.floor(Math.random() * startupY.length-1)+1;
	// TODO: concatenate the fixed text with the two random values
	//       to create a new startup idea like:
	//       "A startup that is Apple, but for Trello"
	startupIdea = 'A startup that is like '+ startupX[randX] +', but for '+ startupY[randY];
	// Update page with new startup idea
	startup.innerHTML = startupIdea;
};

function saveFavorite() {

	favorites.push(startupIdea);
};

function printFavorites() {
	var favoritesText = " ";
	// clear out favorites element
	list.innerHTML = " ";
	
	favorites.forEach(createString);
	function createString(item){
		favoritesText = favoritesText + item + '<br>';
	};

	// update the list element with the new concatenated string
	list.innerHTML = favoritesText;
};

function clearFavorites(){
	favorites = [];
	list.innerHTML = " ";
};

// Init
// ------------------------------------------
generateStartup();

