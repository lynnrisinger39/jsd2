// 2: Bind click events to the +5 and -5 
//point buttons and change the innerHTML 
//of the score display appropriately.

var increase = document.querySelector('#increase-5');
var decrease = document.querySelector('#decrease-5');
var scoreField = document.querySelector('#custom-score')
var scoreboard = document.querySelector('#score');
var setScore = document.querySelector('#submit-custom-score')
var counter = 0;

increase.addEventListener('click', increaseScore);
decrease.addEventListener('click', decreaseScore);
setScore.addEventListener('click', setCustomScore);


function increaseScore(e){
	counter += 5;
	scoreboard.innerHTML = counter + " Points";
}

function decreaseScore(e){
	if (counter >= 5) {
		counter -= 5;
		scoreboard.innerHTML = counter + " Points";
	}else {
	alert("retry");
}
}

function setCustomScore(e){
	scoreboard.innerHTML = scoreField.value + " Points";
	counter = parseInt(scoreField.value);
}
