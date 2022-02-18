var myForm = document.forms.myForm

console.log(myForm.name.value)
console.log(myForm.color.value)

myForm.name.onfocus = function() {
    myForm.name.style.border = "8px solid pink"
}

myForm.name.onblur = function() {
    myForm.name.style.border = "none"
}

var message = document.getElementById("message");

myForm.onsubmit = function() {
    if (myForm.name.value == "") {
        // alert("you forgot to enter a name")
        message.style.opacity = 1
        message.innerHTML = "Please enter a name"
        return false;
    } else {
        message.innerHTML = "";
        message.style.opacity = 0
        return true;
    }
}