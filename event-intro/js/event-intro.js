// setup

var counter = 0;

// structure


var body = document.querySelector('body');

// create element 
var a = document.createElement('a');
a.innerHTML = 'Events';
body.appendChild(a);

var mouseEvent = document.createEvent('MouseEvent');
mouseEvent.initEvent('click');


a.addEventListener('click', count)

function count(){
	mouseEvent.preventDefault();
	counter++;
	console.log('count', counter);
	console.log(mouseEvent.type);
	console.log(mouseEvent.target.textContent);
}



// a.dispatchEvent(mouseEvent);
