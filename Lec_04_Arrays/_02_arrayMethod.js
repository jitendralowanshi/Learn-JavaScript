/*

push()          add to end
pop()           delet from the end
toString()      converts array to string

concat()        joins multiple arrays & returns result
unshift()       add to start 
shift()         delet from start & return 


slice()         return piece of the array
Splice()        change original array (add, remove, replace)
 */

let num = [1];
num.push(2);
num.push(3);
console.log(num);
// delet from the end 
num.pop(); 
console.log(num);



// toString()  convert array to string 
// ex 
let num1 = ["ram", "shyam", "gyan", "sanjog"];
console.log(num1);
// return new string original array doesnot change 
let a = num1.toString();
console.log(a);



// concat() method 
let marHero = ["thor", "spiderman", "ironman", "shaktiman", "antman"];
let dcHero = ["superman", "batman"];
let concatTwoArrays = marHero.concat(dcHero);
console.log(concatTwoArrays);



// unshift() method        ADD TO START 
// unshift method kisi bhi array ke start me element ko add karne ke kaam aata hai 
// add to start 
marHero.unshift("jitendra", "lowanshi");
console.log(marHero);



// delet start array element and return 
let delEle = marHero.shift();
console.log(delEle);
// delet start element jitendra in array 
console.log(marHero);



// Slice() Method 
let peace =  marHero.slice(1,4);
console.log(peace);

// splice() method 
//change original array (add, remove, replace)
let arr = [1, 2, 3, 4, 5, 6];
// splice(addElement, removeElement, replace1, replce2); 
arr.splice(2, 0, 101,102);
console.log(arr);

arr.splice(2, 1, 201);
console.log(arr);