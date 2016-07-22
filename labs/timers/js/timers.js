// Timeout //

function boom() {
	console.log("boom!");
}

var bomb = window.setTimeout(boom,5000);
setTimeout(boom, 4000);

var i = 0;

function count(){
	i++
	console.log("Count:", i);
}

/*setInterval(count, 1000);*/

// clear timer ex //

var counter = window.setInterval(count, 2000);

function stop() {
	clearTimeout(counter);
}