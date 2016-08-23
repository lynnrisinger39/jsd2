/*
  Please add all Javascript code to this file.
*/

var a = document.querySelector('a');
var h3 = document.querySelector('h3');
var h6 = document.querySelector('h6');
var image = document.querySelector('img');
var template = document.querySelector('.template');

/*
var sources = [
{
name: 'ESPN',
code: 'espn',
},
{
name: 'GOOGLE NEWS',
code: 'google-news'
},
{
name: 'REDDIT',
code: 'reddit-r-all'
}

]*/

search.addEventListener('submit',getJSON);

/*function renderSources(source){


}*/

function getJSON(code){

	var url = "https://newsapi.org/v1/articles?source=" + code + "&apiKey=dfc17d42054f4e498aaac5b3d331a3ab";
	
	$.getJSON(url, renderResults);

};

function renderResults(json){
	console.log('renderResults');
	console.log(json);
	var template = Handlebars.compile(template.innerHTML);

}

/*function renderArticle(){

$('search').submit(function(){)

}*/


