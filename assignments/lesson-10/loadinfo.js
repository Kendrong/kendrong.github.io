var franklinmotto = document.getElementById("franklinmotto");
var franklinfounded = document.getElementById("franklinfounded");
var franklinpop = document.getElementById("franklinpop");
var franklinrainfall = document.getElementById("franklinrainfall");

var greenvillemotto = document.getElementById("greenvillemotto");
var greenvillefounded = document.getElementById("greenvillefounded");
var greenvillepop = document.getElementById("greenvillepop");
var greenvillerainfall = document.getElementById("greenvillerainfall");

var springfieldmotto = document.getElementById("springfieldmotto");
var springfieldfounded = document.getElementById("springfieldfounded");
var springfieldpop = document.getElementById("springfieldpop");
var springfieldrainfall = document.getElementById("springfieldrainfall");

var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();    
request.onload = function() {
	var cityinfo = request.response;
	var towns = cityinfo['towns'];
	franklinmotto.innerHTML = towns[0].motto;
	franklinfounded.innerHTML = towns[0].yearFounded;
	franklinpop.innerHTML = towns[0].currentPopulation;
	franklinrainfall.innerHTML = towns[0].averageRainfall;
	
	greenvillemotto.innerHTML = towns[1].motto;
	greenvillefounded.innerHTML = towns[1].yearFounded;
	greenvillepop.innerHTML = towns[1].currentPopulation;
	greenvillerainfall.innerHTML = towns[1].averageRainfall;
	
	springfieldmotto.innerHTML = towns[3].motto;
	springfieldfounded.innerHTML = towns[3].yearFounded;
	springfieldpop.innerHTML = towns[3].currentPopulation;
	springfieldrainfall.innerHTML = towns[3].averageRainfall;
}