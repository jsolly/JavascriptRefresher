
function likesMeat(likesMeat) {

  var likesMeat = false;

  if (likesMeat) {
    console.log("Here is the meat menu");
  } else {
    console.log("Here is the vegetarian menu");
  }
}

function Age(myAge) {
  var myAge = 5;

  if (0 < myAge < 21) {
    console.log("You're a child!");
  } else if (myAge == 21) {
    console.log("You can drink alcohol in the US!");
  } else if (21 < myAge < 40) {
    console.log("You're middle-aged!");
  } else {
    console.log("I don't know what do say about you!");
  }

  // Can you go to the young person's group?
  if (myAge >= 13 && myAge <= 18) {
    console.log("You can go!");
  } else {
    console.log("You can't go!");
  }

  // Are you in a life crisis (quarter or midlife or 3/4 life)
  if (myAge === 25 || myAge === 50 || myAge === 75) {
    console.log("Yup, you are!");
  } else console.log("No, you're not!");

  while (myAge < 10) {
    console.log(myAge);
    myAge++;
  }

}

function LoopLinks(links) {

  links = document.getElementsByTagName("a");

  for (var i = 1; i <= links.length; i++) {
    if (i === 5) {
      break;
    }

    if (i === 2) {
      continue;
    }
    console.log(i);
  }
  console.log("I broke out of the loop!");


  links = document.getElementsByTagName("a");

  for (var i = 0; i < links.length; i++) {
    links[i].className = "link-" + i;
  }

}

function TernaryAndSwitch() {
  // Ternary operator (shorthand if statment...asign variables based on a condition)

  //the ? is like an 'if' the ':' is like an else
  const x = 11
  const color = x > 10 ? 'red' : "blue"


  // switches

  switch (color) {
    case 'red': console.log('color is red!');
      break;
    case 'blue': console.log('color is blue!')
      break;
    default:
      console.log('Color is not red or blue');
      break;
  }
}

TernaryAndSwitch()