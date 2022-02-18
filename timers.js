var myMessage = document.getElementById("message")

function showMessage() {
    myMessage.className = "show"
}

setTimeout(showMessage, 3000); // After 3 seconds, fire off showMessage

var colorChanger = document.getElementById("color-changer");
var colors = ["red", "blue", "green", "pink"];
var counter = 0;

function changeColor() {
    if (counter >= colors.length) {
        counter = 0;
    }
    colorChanger.style.background = colors[counter];
    counter++;
}

var myTimer = setInterval(changeColor, 1000); // Every 3 seconds, call ChangeColor


colorChanger.onclick = function() {
    clearInterval(myTimer);
    colorChanger.innerHTML = "Timer Stopped!"
};