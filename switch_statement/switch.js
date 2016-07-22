var food;

switch (food){
	case 'donuts':
		console.log('I like donuts');
		break;
	case 'mac n cheese':
		console.log('I like mac n cheese');
		break;
	case 'bananas':
		console.log('I like bananas');
		break;
}

//var grade = 'C';
/*var grade = prompt('Whats your grade?');

if (grade === 'A') {
	console.log('awesome job');
} else if (grade === 'B'){
	console.log('good job');
} else if (grade === 'C');{
	console.log('Cs get degrees');
} 

switch(grade) {
	case 'A':
		console.log('awesome job');
		break;
	case 'B':
		console.log('good job');
		break;
	case 'C':
		console.log('Cs get degrees');
	default:
		console.log('system error');

}

*/
switch(grade) {
	case 'A':
	case 'B':
		console.log('good job');
		break;
	case 'C':
		console.log('Cs get degrees');
	default:
		console.log('system error');

}