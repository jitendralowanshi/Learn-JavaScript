/**
 some more  arraay methods 
 map

 creates a new array with the  results of some operation.
 the value is callback return are 

 arr.map(callBackfun(val, idx, array ))

 */

 let arr = [11, 12, 13, 14];

 let newArr = arr.map((val) => {
    val = val**2 // sqr
    return val;
 });

 console.log(newArr);