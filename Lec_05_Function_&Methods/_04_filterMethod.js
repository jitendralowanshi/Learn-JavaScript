/**
 Filter 
 Create a new array of element that give true for a condition / filter 
 Eg. all even elements 

 this filter value return new array with filtered values 

 let newArr = arr.filter( (val) => {
    return val % 2 === 0;
    })

 */


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenArr = arr.filter( (val) => {
    // return even values 
    val = val % 2 === 0;
    return val;
})

// this print statement return filtered even array and save another copy arrays 
console.log(evenArr);


