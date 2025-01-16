// variavle in JavaScript
// Variable are containers for data 
// javascript is a dynamically typed language 

name = "jitendra";
age2 = 24;
price1 = 98.50;
x = null;
y = undefined;

// name = 30;

console.log(x);
console.log(name)

// ===================================================================


/*
let,  const & var

var:  variable can be re-Declared & updated. A global scope varible,GLOBAL VARIABLE  
let:  Variable cannot be re-declared but can be updated. A block scope variable
const: Variable cannot be re-declared or updated. A block scope variable
*/

// let dowara same name ke varible ko define nhi krta hai, lekin update kr sakte hai
let fullName = "jitendra Lowanshi";
let age1 = 24;
// let age = 30;

// age = 30;  //update age

// {
//     let a = 5;
//     console.log(a);
// } 



// const constate ko change nhi kar sakte or re declare bhi nhi kar sakte hai 
const  Pi = 3.14



// =============================================================


/*
// DATA TYPES IN JAVASCRIPT 
primitive data types 

1> Number
2> String
3> Boolean
4> Undefined
5> Null
6> bigint
7> Symbol
*/

//1>  NUMBER 
let Age = 24;
let price = 100.5;
console.log(typeof price);


//2> STRING
let FullName = "jitendra lowanshi";
console.log(typeof FullName);


//3> BOOLEAN
isFollow = true;
console.log(typeof isFollow);


//4> Undefined
let jk;
let gk;
console.log(typeof gk);


//5> Null is a type of object
let obj = null;
console.log(typeof obj);


//6> Bigint
let num = BigInt("12345");
console.log(num)
console.log(typeof num);


//7> Symbol
let sym = Symbol("Hello!");
console.log(sym);
console.log(typeof sym);


// NON PRIMITIVE 
// OBJECT 

const Student = {
    // key   :   Value 
    fullName1: "jitendra Lowanshi",
    age3 : 32,
    cgpa: 9.2,
    isPass: true,
};


console.log(Student);
console.log(typeof Student);
console.log(Student.fullName1);
console.log("age is", Student.age3);
console.log(Student.cgpa);

// practical Qs 