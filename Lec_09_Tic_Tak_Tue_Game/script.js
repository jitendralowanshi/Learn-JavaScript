let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn")

let turnO = true;

let arr = [

    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]

];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        
        if(turnO === true ) {
            box.innerText="O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        

    });
});