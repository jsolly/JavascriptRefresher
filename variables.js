// concatination
var a = "1";
var b = 2;

var c = a + b;
console.log(typeof c); // This actually makes a string.

Math.round(7.5); //no need to import
Math.max(4, 7, 10, 2);
Math.PI;
a = "apple" * 5;
if (isNaN(a)) {
  console.log("That's not a number!");
} else {
  console.log("That's a number!");
}

var special_string = "He said, \"I am a special 'string' !\" ";
console.log(special_string);
console.log(special_string.length);
console.log(special_string.toUpperCase());
console.log(special_string.indexOf("said"));

if (special_string.indexOf("ninja") === -1) {
  console.log("Not found!");
} else {
  console.log("I found it!");
}
console.log(special_string.slice(0, 5));
console.log(special_string.slice(5));
console.log(special_string.split(" "));

var myArray = [1, 5, 2, 3, 1, 10];
var otherArray = new Array(5); // Gives you 5 slots
console.log(otherArray.length);
console.log(myArray.sort());
console.log(myArray.reverse());
