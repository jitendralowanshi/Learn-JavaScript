/*
Loops are used to execute a piece of code again & again 
for Loop
for(let i=1; i<= 5; i++) {
    console.log("lets learn javascript");
}
*/

// FOR LOOPS

for(let i = 0; i<= 5; i++) {
    console.log("i = ",i);
    // console.log("jitendra");
}


// CALCULATE SUM 
let sum = 0;
for(let i=1; i<=5; i++) {
    sum += i;     //sum = sum + i
    console.log(sum);
}
console.log("final sum is = ",sum);


// ====================================================================
// while loop 

let i = 1;
while (i<=5){
    console.log("using while loop",i);
    i++;
}





// ====================================================================
// do while loop 
let j = 1;
do {
    console.log("jitendra", j);
    j++;
} while(j<=5);
