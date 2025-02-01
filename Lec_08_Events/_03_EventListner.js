/**
 node.addEventListener( event, callback)
 node.removeEventListener( event, callback)

 *Note: the callback reference should be same to remove
 */


//  ADD EVENT LISTENER 
//  btn1.addEventListener("click", (eVT) => {
//     console.log("button was clicked");
//     console.log(evt);
//     console.log(evt.type);

//  });


 btn1.addEventListener("click", () => {
    console.log("button was clicked- handeler 1");
 });

 btn1.addEventListener("click", () => {
    console.log("button was clicked- handeler 2");
 });


//  if remove handler 3 then function strore in a variable 
 const handler3 = () => {
    console.log("button was clicked- handeler 3");
 }

 btn1.addEventListener("click", handler3);

 btn1.addEventListener("click", () => {
    console.log("button was clicked- handeler 4");
 });


//  REMOVE EVENT 
btn1.removeEventListener("click", handler3);




// paractice q 

