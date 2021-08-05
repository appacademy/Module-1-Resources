// let car = "vroom";
// function makeSounds(dogSound) {
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble";

//     for (let i = 0; i < 2; i++) {
//       console.log(car, dogSound, cow, turkey, i); // move around to see scope stuff
//     }
//   }
// }
// makeSounds("woof");

// let hungry = false;

// function sayHungry() {
//   let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry();

// function blockScope() {

//   const test = "upper scope";
//   // const test = "whoops";
//   if (true) {
//     const test = "lower scope";
//     console.log(test);
//   }
//   console.log(test);
// }
// blockScope();

// function varScope() {
//   console.log(test);
//   var test = "upper scope";
//   var test = "whoops";
//   if (true) {
//     // var test = "lower scope";
//     console.log(test);
//   }
//   console.log(test);
// }
// varScope();

// const arrSum = function (arr) {
//   return arr.reduce(function (sum, num) {
//     return num + sum;
//   });
// };

// const arrSum = (arr) => {
//   return arr.reduce((sum, num) => {
//     return sum + num
//   })
// }

// const arrSum = (arr) => arr.reduce((sum, num) => sum + num);

// console.log(arrSum([1, 2, 3])); //6

// Closure
/* 
So I want to make a business that sells some robots
These robots will say 'boop hello' anytime someone interacts with them.

So I'll need a factory to build the robots
Then I can interact with the robots that I build.

I want to choose what my robo says....
I also it to tell me how many times it has run...
So they want to robo to say the name of who they're talking to...
*/

const roboFactory = function (voiceChip) {
  let count = 0;
  return function (name) {
    count += 1;
    console.log(voiceChip + " I have said this " + count + " time(s), " + name);
  };
};

const robo1 = roboFactory("Boop Hello"); // factory gives me a robot || the HOF returns another function
const robo2 = roboFactory("Boop Goodbye");
console.log(robo1);
robo1("Mylo");
robo1("Jeff");
robo2("Mylo");
robo1("Thanh");
robo2("Thanh");
robo1("Drew");
robo2("Drew");
console.log(robo1 === robo2);
