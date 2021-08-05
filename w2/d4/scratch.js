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

function varScope() {
  console.log(test);
  var test = "upper scope";
  var test = "whoops";
  if (true) {
    // var test = "lower scope";
    console.log(test);
  }
  console.log(test);
}
varScope();
