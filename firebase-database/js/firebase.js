// setup

//establish connection with firebase

var firebaseReference=new Firebase('https://jsd2-76dfe.firebaseio.com/');

var button = document.querySelector('button');

button.addEventListener('click',update);

window.addEventListener('load',restoreChanges)
function update(e) {
	console.log('save changes');
	var theme = {
		color:'red'
	}
	console.log(theme);
	firebaseReference.set(theme);
}

//save data to firebase with .set


function restoreChanges(){
	firebaseReference.on('value', changeColor)

}

function changeColor(snapshot){
	console.log('changeColor');
	var theme = snapshot.val();
	console.log(theme)
}