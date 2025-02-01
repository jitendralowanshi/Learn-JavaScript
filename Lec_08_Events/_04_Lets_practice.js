/**
 *Qs. Create a toggle button taht chages the screen to dark-mode when clicked & light-mode
 when clicked again.

 */
let modeBtn = document.querySelector("#mode");
let currMode = "ligth";
let Body = document.querySelector("body");


modeBtn.addEventListener("click", () => {
    // console.log("you are trying to change mode");
    if(currMode === "light") {
        currMode = "dark";
        document.querySelector("body").style.backgroundColor="black";
        // using css 
        // Body.classList.add("dark");
    }
    else {
        currMode = "light"; 
        document.querySelector("body").style.backgroundColor="white";
        // using css 
        // Body.classList.add("light");
    }

    console.log(currMode);
});