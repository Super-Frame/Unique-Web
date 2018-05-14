var header = document.querySelector('header');
var section = document.querySelector('section');

var requestURL = '../Web-Data/pages.web.json';

var request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function() {
	var superHeroes = request.response;
	showHeroes(superHeroes);
}

function showHeroes(jsonObj) {
	var paginas = jsonObj['paginas'];
	var menu ="";
	var title ="";  
	for (var i = 0; i < paginas.length; i++) {
		menu += '<li><a href="'+paginas[i].path+'">'+paginas[i].name+'</a></li>';
	}
	menu += '<li>';
	menu += '<a href="#" class="icon fa-angle-down">Account</a>';
	menu += '<ul>';
	menu += '<li><a href="generic.html">Your games</a></li>';
	menu += '<li><a href="contact.html">Contact</a></li>';
	menu += '<li><a href="elements.html">Elements</a></li>';
	menu += '<li>';
	menu += '</ul>';
	menu += '</li>';
	menu += '<li><a href="#" class="button">Download App</a></li>';

	document.getElementById('menu--c').innerHTML += menu;
}