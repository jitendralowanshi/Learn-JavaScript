/*
forEach loop in arrays 

arr.forEach(callBackFunction)
callBackFunction : Here it is a function to execute for each element in the array

A callBack is a function passed as an arguments to another function 
Ex,:

arr.forEach((val) => {
    console.log(val);
    })

   A functions javaScript ke under parameter ki tarah paas bhi ho sakte hai 

   ** for each loop is a Higher Order function/method

 */


let arr = [1, 2, 3, 4,  5];


//    using normal function 
arr.forEach(function myFun(val) {
    console.log(val);
});


//  Using arrow function 
arr.forEach((val) => {
    console.log(val);
});


// another example 
// forEach use three parameters val index and array itself --> (val, idx, StringArr)
let stringArr = ["pune", "delhi", "mumbai", "khandwa"];

stringArr.forEach((val, idx, stringArr) => {
    console.log(val.toUpperCase(), idx, stringArr);
});


//   
// Practice quetion 
// Qs. for a given array of numbers print the square of each value  using the forEach loop

let arrSqr = [1, 2, 3, 4, 5];
arrSqr.forEach((val) => {
    // val = val * val;          //sqr is 
    val = val**2                //squre 
    console.log(val);
});


//second tarika  
let cal = [11, 12 ,13, 14];
let calcSquare = (num) => {
    num = num * num;
    console.log(num);
};

cal.forEach(calcSquare);




