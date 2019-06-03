/*function for question 1*/
let myTest1 = () =>{

	document.getElementById("btn").innerHTML = "I'm right!";
}

let myTest2 = () => {

	document.getElementById("btn").innerHTML = "No, I'm right!";
}


/* function for question 2*/
function mOver(){
	document.getElementById("mOver").innerHTML = "Don't hover over me!";


	
}

function mOut(){
	document.getElementById("mOver").innerHTML = "I told you don't hover over me!";
}

/* function for question 4*/

function checkPassword(){
	
	let password = document.getElementById("pass").value;
	/*let p_check = 12345678;*/
	console.log(password)
	if (password==="12345678") {
		document.getElementById("pass").innerHTML = "It's correct";
		return false;

	} else{
		alert("You put a wrong password!");
		return false;


	}
}
// function  checkPass(){
//     let mypass =document.getElementById("pass").value;
//     if(mypass != 12345678){
//         alert ("Password Incorrect")
//     }else{
//         document.getElementById("text").innerHTML = "Information Correct";
//     }
// }



// function calculate() {
// 	"use strict";
	
// 	let radius = document.getElementById("radius").value;
// 	let volume;
	
// 	radius = Math.abs(radius);
// 	volume = (4/3) * Math.PI * Math.pow(radius, 3);
// 	volume = volume.toFixed(4);
// 	document.getElementById("volume").value = volume;
// 	return false;
// }
// 	function init() {
// 		"use strict";
// 		document.getElementById("MyForm").onsubmit = calculate;
		
	
// 	window.onload = init;
// }
function myFunc() {
    document.getElementById("formvol").submit();
}
function volSphere(){
    var radius = document.getElementById("radius").value;
    var vol = (4/3) * Math.PI * Math.pow(radius, 3);
    alert("The volume is " + vol)
}

