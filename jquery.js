var myPara = document.getElementById("content").getElementsByTagName("p")[5]

var myPara2 = $("#content p:last-child");

// Try these in the browser console
myPara2.addClass("test")
myPara2.css({ position: "relative", color: "red" })
myPara2.animate({ left: "50px" });