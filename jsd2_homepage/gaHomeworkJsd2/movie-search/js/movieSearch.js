// Setup
// ----------------------------------------------
var results = document.querySelector('.results');
var details = document.querySelector('.details');
var search = document.querySelector('.search');
var posterImage = document.querySelector('.poster');
var title = document.querySelector('.title');
var plot = document.querySelector('.plot');
var form = document.querySelector('form');
var OMDbAPI = "https://www.omdbapi.com/?s=" + search.value;
var rating = document.querySelector('.imdb-link');
// Structure
// ----------------------------------------------


// Events
// ----------------------------------------------
form.addEventListener('submit',movieInfo);
results.addEventListener('click', details);



var li = document.querySelectorAll("li");
	li.forEach(function(i) {
		i.addEventListener("click", getDetails);
	})
/*results.addEventListener('click', movieDetails)
*/// Event handlers
// ----------------------------------------------

/*function searchForMovie(e){
	e.preventDefault();

	var movie = search.value;
	var url = "https://www.omdbapi.com/?s=" + movie;
	$.getJSON(url, searchResults);
}
*/

function movieInfo(event){
	event.preventDefault();
	console.log(event);
	$.getJSON(OMDbAPI, jData);
}

function getDetails(event){
	event.preventDefault();
	$.getJSON(OMDbAPI, movieSearchResults)
	OMDbAPI = "https://www.omdbapi.com/?i=" + event.currentTarget.id;

	// clear old
	poster.innerHTML = '';
	movieSearchResults.innerHTML = '';
}

function jData(event) {
	results.innerHTML = ' ';
	posterImage.src = ' ';
	console.log(event);
	event.Search.forEach(movieSearchResults);
}

function movieSearchResults(movie){
	var li = document.createElement('li');
	var img = document.createElement('img');
	var p = document.createElement('p');

	li.id = movie.imdbID;
	p.textContent = movie.title;
	img.src = movie.poster;

	li.appendChild(img);
	li.appendChild(p);
	results.appendChild(li);

}
/* in class targeting work
var target = e.target;

li.click('')


if (e.target.tagName != 'li') {
	alert('didnt get the li')
	return;
	target.closest
}*/

// Update page
// ----------------------------------------------
