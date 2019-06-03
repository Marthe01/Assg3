/*function for question 1*/
let myTest1 = () =>{

	document.getElementById("myTest1").innerHTML = "I'm right!";
}

let myTest2 = () => {

	document.getElementById("myTest2").innerHTML = "No, I'm right!";
}


/* function for question 2*/
function mOver(){
	document.getElementById("mOver").innerHTML = "Don't hover over me!";


	
}

function mOut(){
	document.getElementById("mOver").innerHTML = "I told you don't hover over me!";
}

/* function for question 4*/

/*function checkPassword(){

	document.getElementById("myForm").onsubmit = myFunction(){
		myFunction()
	};*/

function calculate() {
	"use strict";
	let volume;
	let radius = document.getElementById("radius").value;
	
	radius = Math.abs(radius);
	volume = (4/3) * Math.PI * Math.pow(radius, 3);
	volume = volume.toFixed(4);
	document.getElementById("volume").value = volume;
	return false;
}
	function init() {
		"use strict";
		document.getElementById("MyForm").onsubmit = calculate;
		
	
	window.onload = init;
}


