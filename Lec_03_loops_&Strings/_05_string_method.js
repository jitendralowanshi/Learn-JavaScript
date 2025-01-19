// These are built in function to manipulate a string 
/*
 * strings are immutable in js 
 
    str.toUpperCase()
    str.toLowerCase()
    str.trim()                  // remove all white spaces
    str.slice(start, end)       //return part of String
    
    str1.concat(str2)           //joins atr2 with str1
    str.replace(searchVal, newVal)
    str.charAt(idx)

*/

let str = "JiTEndra";
let str2 = "lowanshi";
let str3 = "    jitendraLowanshi    "; 



console.log(str.toLowerCase());
console.log(str2.toUpperCase());


// console.log(str3.trimStart());
console.log(str3.trimEnd());
console.log(str3.trim());

// method return new string --> does not change original string in js 

let newStr = "surname";
let app = newStr.toUpperCase();

// this return new string 
console.log(app);

// original string does not change 
console.log(newStr);


// replace 
// replcaAll