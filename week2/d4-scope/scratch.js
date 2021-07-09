// function sum(nums) {
//   return nums.reduce(function (sum, num) {
//     return sum + num;
//   });
// }

// const sum = (nums) =>
//   nums.reduce(function (sum, num) {
//     return sum + num;
//   });

// const sum = (nums) => nums.reduce((sum, num) => sum + num);

// console.log(sum([1, 2, 3])); //6
/* 
I want to build robots that will say, "Hi", and then tell you how many times they've said hi

Factory(voiceChip) => Robots

Robots(name) => "(voiceChip), (name)! I've said (voiceChip) ___ amount of times"
*/

function roboFactory(voiceChip) {
  let count = 0;
  console.log("I'm building a robot");
  return function sayHiRobot(name) {
    count += 1;
    console.log(
      voiceChip +
        ", " +
        name +
        "! I've said, " +
        voiceChip +
        " " +
        count +
        " time(s)"
    );
  };
}

let helloRobo = roboFactory("Hello");
let goodbyeRobo = roboFactory("Goodbye");

helloRobo("Mylo"); // first
helloRobo("Brad"); // first
helloRobo("Emily"); // first
helloRobo("Skye"); // first

goodbyeRobo("Geoffery"); // first
