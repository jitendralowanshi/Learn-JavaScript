/*
function is a block of code that perform a specific task can be invoked whenever needed
two types of functions 
1> normal function
2> arrow function 

functionn FunName(val1, val2) {
//do some work
}


ARROW FUNCTION 
compact way of writing a function 
Ex-

const FunctionName = (val1, val2) => {
    //do some work
    }

 */


// FIRST FUNCTION
function myFunction() {
    console.log("Hello!");
    console.log("bonjor");
}

// SECOND FUNCTION 
function mySecFunction(name, val) {
    console.log("this is my second function");
    console.log(name, val);
}


// functionS call 
myFunction();
mySecFunction("jitendra", 12);


// SOME OF TWO NUMBERS 
function sum(a, b) {
    s = a + b;
    return s;
}

let totalSumIs = sum(10, 101);
console.log(totalSumIs);


// =============================================================
// AROOW FUNCTION 
//No argument function 

const printello = () => {
    console.log("hello");
}
printello();



// fun one 
//Args function 
const sumIs = (a, b) => {
    s = a + b;
    return s;
}
// function call 
let s1 = sumIs(10, 88);
console.log(sumIs);
console.log("total sum is : ", s1);



// second fun 
const mulIs = (a, b) => {
    m = a * b; 
    return m;
}
// function call 
let m1 = mulIs(10, 5);
// function defination mulIs
console.log(mulIs);
console.log("multiplication is :", m1);


