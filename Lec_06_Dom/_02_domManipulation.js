/**
 * access elements using this 
 * 
 * 
1> selecting with id 
document.getElementById("#myId");

2> selecting with class
document.getElementByClassName(".myClass")

3> selecting with tag 
document.getElementByTagName("p")


 */

console.log(document);
let id = document.getElementById("idOne");
id = id.style.color="red";
console.log(id);
// console.log(id.style.color="blue");

// access tages 
// let para = document.getElementsByTagName("p");
// console.dir(para);


// console.dir(document.h1);


// ====================================================

// Query selector 
// querySelector automatic detect tag class and id 
// document.querySelector("myId / myClass / tag")

// first element access 
let firstEl = document.querySelector("p");
console.dir(firstEl);

// all elements access 
let allEl = document.querySelectorAll("p");
console.dir(allEl);


// ==================================================

/**
 Properties 

 tagName: returns tag for element nodes 
 innerText : return the text content of the element and all its children 
 innerHTML : return the plain text or HTML content in the element
 textContent : returns the textual content even for hidden elements 
 
 */