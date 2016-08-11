var body = document.querySelector('body');
var ul = document.querySelector('ul');



ul.addEventListener('click',change);
/*event handler
*/

function clickColor(e) {
	/*console.log('clickColor',e.target);

console.log
change(e.target.dataset.color)


}


function change(color) {
body.className = color;
}