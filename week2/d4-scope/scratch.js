// let car = "vroom";

// function makeSounds(dogSound) {
//   let cow = "moo";

//   if (true) {
//     let turkey = "gobble";
//     for (let i = 0; i < 2; i++) {
//       //blank
//     }
//   }
// }
// makeSounds("woof");
// console.log(car, makeSounds);

// let hungry = false;

// function sayHungry() {
//   // let hungry = true;
//   if (hungry) {
//     console.log("I'm hungry!");
//   } else {
//     console.log("I'm coding");
//   }
// }

// sayHungry(); //

// function blockScope() {
//   var test = "upper scope";
//   console.log(test); //
//   if (true) {
//     var test = "lower scope";
//     console.log(test); //
//   }
//   console.log(test); //
// }
// blockScope();

// function hoist() {
//   console.log(hair.toUpperCase());
//   let hair = 'brown';
// }

// hoist();

// let concatBot = function (str1, str2, robo) {
//   return robo(str1 + str2);
// }

// let upperBot = function (str) {
//   return str.toUpperCase();
// }

// console.log(concatBot('hello ', 'world', upperBot));

let loud = function (str) {
  return str.toUpperCase();
};
let quiet = function (str) {
  return str.toLowerCase();
};

let roboBuilder = function (str) {
  let voiceChip = str;
  return function (volume) {
    let result = volume(voiceChip);
    voiceChip += " " + str;
    return result;
  };
};

console.log(roboBuilder("Boop")(loud));
console.log(roboBuilder("Boop")(loud));

let beepBot = roboBuilder("bEep!"); // returns robo that will beep
let bopBot = roboBuilder("boP!"); // returns robo that will bop

console.log(beepBot(loud)); // BEEP!
console.log(beepBot(quiet)); // beep!
console.log(beepBot(loud)); // BEEP!

console.log(bopBot(loud)); // BOP!
console.log(bopBot(quiet)); // bop!
