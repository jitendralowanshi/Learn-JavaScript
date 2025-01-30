/**
 *INSERT ELEMENT

 let el = document.createElement("div")

 node.append(el)        // adds at the end of node (inside)
 node.prenend(el)       // adds at the start of node (inside)
 node.before(el)        // adds before the node (outside)
 node.after(el)         // add after the mode (outside)

 *DELET ELEMENT
 NODE.REMOVE() //remove the node
 
 */

//  create a new button 
let newBtn = document.createElement("button");
newBtn.innerText = "Click Me";
console.log(newBtn);

// insert button 
 let div = document.querySelector("div");
//  div.append(newBtn);
//  div.prepend(newBtn);
//  div.before(newBtn);
 div.after(newBtn);

 
//  EX 
//  if button ko p tag ke baad place krna ho to 
let p = document.querySelector("p");
p.after(newBtn);



// creat h1 heading on body tag 
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>Hii i am new </i>";


// let body = document.querySelector("body");
// body.prepend(newHeading);

// sort form 
document.querySelector("body").prepend(newHeading); 
