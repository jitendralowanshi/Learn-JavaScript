/**
 some more  arraay methods 
 map

 creates a new array with the  results of some operation.
 the value is callback return are 

 arr.map(callBackfun(val, idx, array ))

 map is used to create a new array using some return value based on each value 
 which is stored individual indices of the array
 
 */

//  map ko ham tab use karte hai jab hame koi kaam kar ke new array create krna ho 

 let arr = [11, 12, 13, 14];

//  return new array original aray does not change 
 let newArr = arr.map((val) => {
    val = val**2 // sqr
    return val;
 });

 console.log(newArr);