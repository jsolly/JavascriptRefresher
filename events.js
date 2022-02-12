var content = document.getElementById("content")

//functions without names (like below) are called anonymous functions
// content.onclick = function(){
//     alert("you clicked me!")
    
// }

// content.onmouseover = function(){
//     alert("You hovered over me!!!")
// }

// event listeners
var content = document.getElementById("content")
var button = document.getElementById("show-more")

button.onclick = function() {

    if(content.className = "open"){
        //shrink the box
        content.className = "";

    } else {
        //expand the box
        content.className="open";
        
    }
}
