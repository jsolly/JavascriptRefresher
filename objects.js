var car = new Object();
car.color = "red";
console.log(car.color);
car.add = function (a, b) {
  console.log(a + b);
};

car.add(10, 20);

var car2 = {
  color: "red",
  add: function (a, b) {
    console.log(a + b);
  },
};
car.add(5, 1);
