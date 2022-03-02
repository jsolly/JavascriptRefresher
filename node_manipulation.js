

function findElementsByID() {
    var mycontentDivs = document.getElementsByClassName("myclass")
    var myH2 = mycontentDivs[0].getElementsByTagName("h2")
    myH2[0].innerHTML = "Yo NINJAS!";
    var myh2_2 = document.getElementById("myh2")

    var myBody = document.getElementsByTagName("body")
    myBody[0].innerHTML = "<p>I am a paragraph tag </p>";

    var mytitle = document.getElementById("myh2")
    console.log(mytitle.textContent);
    mytitle.textContent = "I am new text"
}

function findElemnentsByQuerySelector(){
    var myform = document.getElementById('my-form')
    var myform2 = document.querySelector('h1') // will only grab first one
    var allElements = document.querySelectorAll('.item');
    var ClassElements = document.getElementsByClassName('item'); //NOT RECOMMENDED This returns an HTML collections which does not support array methods.
    var tagElements = document.getElementsByTagName('li');
}

function ModifyAttributes() {
    var link = document.getElementById("subject")
    console.log(link.getAttribute("href"))
    console.log(link.getAttribute("class"))
    link.setAttribute("class", "Warrior");
    console.log(link.getAttribute("class"))
    link.setAttribute("alt", "helloworld");
    console.log(link.className);
    link.className = "Ninja"

    mytitle.setAttribute("style", "position: relative; left: 100px;");
    mytitle.style.left = "20px" //preferred method
    mytitle.style.color = "red"
    mytitle.style.backgroundColor = "black" //don't use hyphens
}


function CreateElements() {

    var newA = document.createElement("a")
    var newLi = document.createElement("li")
    menu = document.getElementById("main-nav").getElementsByTagName("ul")[0]
    menu.appendChild(newLi)
    newLi.appendChild(newA)
    newA.innerHTML = "Blog"
    menu.insertBefore(newLi, menu.getElementsByTagName('li')[0])
}

function DeleteElements() {
    var child = menu.getElementsByTagName("li")[0]
    var remove = menu.removeChild(child) // stores removed child within a variable (to re-insert later if you want)
    menu.appendChild(remove)
}

findElemnentsByQuerySelector()