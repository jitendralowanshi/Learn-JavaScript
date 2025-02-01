/**
 three types of event 
 1> Inline Event
 2> Event Object
 3> Event Listener     //this is most useful 
 


 * EVENTS - 
 The change in the state of an object is known as an Event
 Events are fired to notify code of "intresting change " that may affect code execution.

 Mouse Events (click,, double click etc)
 Keyword Events (keypress, keyup, keydown)
 Form events (submit etc.)
 Print Event & many more 


 Event Handling in js 

 node,event = () => {
    //handle here 
    }

 */
// fisrtly acces the element then work
let btn1 = document.querySelector("#btn1");

// event handling using js 
btn1.onclick = () => {
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};

// override this statement 
btn1.onclick = () => {
    console.log("HANDLER2");
    let a = 29;
    a++;
    console.log(a);
};