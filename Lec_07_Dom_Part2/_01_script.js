/**
 *DOM Manipulation part two 
 Attributes

 * getAttribute(attr)    //to get the attribute value
 * setAttribute(attr, value)    // to set the attribute val th 
 
 Style 
 * node.style


 */


let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let div1 = document.querySelector("div");

div.style.backgroundColor="black";
div.style.fontSize = "25px";