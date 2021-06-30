console.log('He said, "What\'s up?"');

// //length

let str = "hello world";

console.log(str.length); // property no invocation  != ()
// method we need to invoke = ()
console.log(str, str.length);

console.log("dogs"[0]); // d
console.log("cats"[4]); // undefined
console.log("mice"[-1]); // undefined
let animal = "elephant";
console.log(animal[animal.length - 1]);

// indexOf
console.log("doggos".indexOf("d")); // 0
console.log("doggos".indexOf("s")); // 5
console.log("doggos".indexOf("x")); // -1
console.log("doggos".indexOf("g")); // 2

//Concat - Join two things
let firstName = "Mylo";
let lastName = "James";

console.log(firstName + " " + lastName);
console.log("I have" + " " + 2 + " " + "dogs");
console.log(2 + "dogs");

// functions
/* 
Intake two numbers
and console.log the sum of the two nums
Do I return??
Do I console.log??
*/
function sum(num1, num2) {
  let sum = num1 + num2;
  return sum;
}

console.log(sum(1, 2)); //
console.log(sum(3, 2));
console.log(sum(1, 22));
console.log(sum(100, 2));

//Conditionals

let c = "cat";

if (c === "dog") {
  console.log("I'm a dog!");
} else if (c === "turtle") {
  console.log("I'm a turtle!");
} else if (c === "potato") {
  console.log("I'm a potato");
} else {
  console.log("I don't know what I am");
}

// Loops

let i = 0; // initial expression

while (i < 5) {
  // condition
  console.log(i);
  i++; //step
}

for (let i = 0; i < 5; i += 1) {
  console.log(i);
}

//Arrays

let arr = [1, 2, 3];
let strArr = ["hello", "world"];

console.log(arr[2]); // 3
// we can do whatever we want with the element we index
let firstEle = strArr[0]; //'hello'
console.log(firstEle.indexOf("l")); // 2
//indexOf
let arr2 = ["dogs", "cats", "turtles", "turtles", 1];

let animal2 = "turtles";

console.log(arr2.indexOf(animal2)); // 2
console.log(arr2.indexOf("elephants")); // -1

let arr3 = [1, 3, 4, 7, 12];

console.log(arr3.length);

let arr4 = [3, 2, 1];
let arr5 = [4, 5, 6];
let arr6 = [7];

console.log(arr4.concat(arr5, arr6));

console.log(arr5.concat(arr4, arr6, arr5));

console.log(arr4);

// Iterating over arrays

let arr7 = ["arrays", "are", "awesome", "!", "!", "?", [1, 2, 3]];

console.log(arr[0], arr[1], arr[2], arr[3]);

for (let i = 0; i < arr7.length; i++) {
  let word = arr7[i];
  console.log(word);
}
