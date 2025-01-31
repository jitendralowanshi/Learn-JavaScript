/**
 EVENT OBJECT
 It is a special object tha has details about ehe event.
 All event handlers have access to the Event Object's properties and methods.

 node.event = (e) => {
    //handle event 
    };

    e.target, e.type. e.clientx, e.clientY
 
 */

    let but = document.querySelector("#btn1");

    but.onclick = (e) => {
        let a = 100;
        a++;
        console.log(a);
        console.log(e);
        console.log(e.type);
        console.log(e.target);
        console.log(e.clientX, e.clientY);
    };