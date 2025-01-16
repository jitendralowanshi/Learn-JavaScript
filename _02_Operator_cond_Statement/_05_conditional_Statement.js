// if statement 
let age = 18;

if (age >= 18) {
    console.log("you can vote ");
}

if (age < 18) {
    console.log("you cant vote")
}

// ================================================
// if else statement 

let mode = "blue";
let color;

if (mode === "dark") {
    color ="black";
}
else {
    color = "white";
}
console.log(color);


// ============================================================
// else if statement 
// jab multiple condition check krna hot tab else if use karte hai 

if (age < 18){
    console.log("junior");
}
else if (age > 60) {
    console.log("senior");
}
else {
    console.log("middle");
}




if (mode === "dark") {
    color ="black";
}
else if (mode === "blue"){
    color ="blue";
}
else if ( mode === "pink") {
    color = "pink";
}
else {
    color = "white";
}
console.log(color);


// ==========================
// turnery operator 
age > 18? console.log("adult"):console.log("not adult");



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// lets practice
// Qs. Get user to input a number using prompt(:enter a number).
// check if the number is multiple of 5 or not 

let num = prompt("enter a number :");

if (num % 5 === 0) {
    console.log( num ," is multiple of 5");
}
else {
    console.log(num, "is not multiple of 5");
}
