/*
array is collection of items
array is type of an object in js 
Array is mutable but string are not in array
CREAT AN ARRAY

*/

let marks = [96, 75, 48, 55, 10];
console.log(marks);
console.log(marks.length);


let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
console.log(heroes);
console.log(heroes.length);


// ====================
// ARRAY INDICES 
let arr = [1, 2, 3, 3, 5, 6];
console.log(arr);

// change array index val 
arr[3] = 4;
console.log(arr)

//  this changes is not possible in stings 
// string are immutable 
// Ex -
let name = "jitendra";
name[0] = "g";
console.log(name);


// print marks using looops 
// for-of-loop most used in array
for(let val of marks) {
    console.log(val);
}


// for-in-loop 
// for(let val in heroes) {
//     console.log(val);
// }



// lets practice 
// Qs. for a given array with marks of student [85,97,44,37,76,60]
// find the average marks of th=e enttire class 

let mark = [85,97,44,37,76,60];

let sum = 0;

for(let val of mark) {
    sum += val;
}
let avg = sum / mark.length;
console.log(sum);
console.log(`avg marks of the class = ${avg}`);


