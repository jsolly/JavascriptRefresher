var content = document.getElementById("content")

//functions without names (like below) are called anonymous functions
// content.onclick = function(){
//     alert("you clicked me!")

// }

// content.onmouseover = function(){
//     alert("You hovered over me!!!")
// }


function setUpEvents() {
    // event listeners 
    var content = document.getElementById("content")
    var button = document.getElementById("show-more")

    button.onclick = function () {

        if (content.className == "open") {
            //shrink the box
            content.className = "";
            button.innerHTML = "Show More"

        } else {
            //expand the box
            content.className = "open";
            button.innerHTML = "Show Less"

        }
    };

}
// onload allows you to wait for the window (all the DOM) to load before firing off any javascript. 
window.onload = function () {
    setUpEvents();

};