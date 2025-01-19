// let name = prompt("enter you name ");
// Strings are immutable in js 




// double qouts 
let str = "jitendra lowanshi";
console.log(str);

// single quots 
let str2 = 'jitendra lowanshi'
console.log(str2);

// length 
let len = str.length;
console.log("length is : ",len);



// ACCEES POSITION CHAR IN JS 
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);


// ==========================================

// TEMPLATE LITERALS IN JS 
// A way to have embedded expressions in strings 

let specialStr = `this is templet literal`;
console.log(specialStr);
console.log(typeof(specialStr));

let obj = {
    item: "pen",
    price: 10,
};

console.log("the cost of ",obj.item, "is", obj.price, "Rs");


// using template literals 
let output = `the cost of ${obj.item} is ${obj.price} Rs`;
console.log(output);

