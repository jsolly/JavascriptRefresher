// var car = new Object();
// car.color = "red";
// console.log(car.color);
// car.add = function (a, b) {
//   console.log(a + b);
// };

// car.add(10, 20);
// car.add(5, 1);

// var car2 = {
//   color: "red",
//   driver: "Brad",
//   logDriver: function(){
//     console.log("This driver is "+ car2.driver )
//   }
// };
// car2.logDriver()
// A more generalized object is as follows:
var Car = function(color, driver){
  this.color = color;
  this.driver = driver;
  this.logDriver = function(){
    console.log("This driver is "+ this.driver );
  };
};
var myCar = new Car("Red", "Bob");
myCar.logDriver();
