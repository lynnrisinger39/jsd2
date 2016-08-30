localStorage.setItem('name','steve');

/*var carString = JSON.stringify(car);
*/
/*localStorage.setItem('car', carString);
*/
var myCar = localStorage.getItem('car');
var car = {
	model: 'ford',
	color: 'white'
}
var myCar = JSON.parse(myCar);

var model = document.querySelector('.model');

var button = document.querySelector('button');
var color = document.querySelector('.color');
button.addEventListener('click', saveCar);
window.addEventListener('load', updateCar)
var p = document.querySelector('p');

function saveCar(e) {
	var car = {
		color: color.value,
		model: model.value
	}
	console.log('saveCar');
	console.log(color.value);
	car = JSON.stringify(car);
	localStorage.setItem('car', car);
//  ^^ why is car in " " ^^
	updateCar();
}

function updateCar(e) {

	localStorage.getItem('car');

	if (car == null){
		return;
	}

	car = JSON.parse(car);
	p.innerHTML = car.color+' '+car.model;
}

function clearCar(e) {
	localStorage.removeItem('car');
}

