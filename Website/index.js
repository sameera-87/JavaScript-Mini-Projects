
const PI = .14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("radiusInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + " cm";
}

//console.log(circumference);

//window.alert(`The circumference is : ${circumference}`);





// let username;

// document.getElementById("mySubmit").onclick = function(){
//     username = document.getElementById("myText").value;
//     //console.log(username);
//     document.getElementById("myH1").textContent = `Hello ${username}`;
//     document.getElementById("usernameLabel").style.display = "none";
//     document.getElementById("myText").style.display = "none";
//     document.getElementById("mySubmit").style.display = "none";
// }


//console.log(`Hello`);
//console.log(`I love baseball`);

//window.alert(`This is an alert!`);
//window.alert(`I like pizza`);

//this is a comment

/*
this is a 
multiline
comments
*/


//document.getElementById("myH1").textContent = "Hello samee";
//document.getElementById("myP").textContent = "I like pizza"

/*

//variables in JS

let fullName = "kamal Jayawardhane";
let age = 25;
let student = false;

document.getElementById("para1").textContent = `Your Name is ${fullName}`;
document.getElementById("para2").textContent = `You are ${age} years old`;
document.getElementById("para3").textContent = `Enrolled: ${student}`;

*/

/*

let username;

username = window.prompt("What is your username?");

console.log(username);

*/