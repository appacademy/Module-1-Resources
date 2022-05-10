// your code here
// console.log('"Join a bootcamp," they said. "It will be fun," they said.')
// console.log('\W\hat\'s up?\\');

// let greeting = "hello";

// console.log(greeting.length);
// console.log("hell\\"o".length);")
// console.log("".length);


// let animal = "CATS"

// console.log(animal[0] + animal[1] + animal[2])
// console.log(animal[0].concat(animal[1], animal[2])+animal[3])
// console.log(animal[1])
// console.log(animal[2])
// console.log(animal[3])
01234567
let playoffs = "playoffs play"

// console.log(playoffs.indexOf("a"))
// console.log(playoffs.indexOf("f"))
// console.log(playoffs.indexOf("f",6))
let firstIndex = playoffs.indexOf("play")
console.log(playoffs.indexOf("play", firstIndex + 1))
console.log(playoffs.indexOf("Sabres"))

// blankFunc("second", "first", "third")

// function greetName(name){
//   return "Hello there " + name
//   console.log("Hello there " + name)
//   console.log("I will be ignored!")
//   console.log("And so forth")
// }

// let greeting = greetName("General Kenobi")
// let newGreeting = greeting + "!!"


// console.log(newGreeting)

function sum (num1, num2) {
    return num1 + num2
  }; 
  let response = sum(3, 5); 
  console.log(8 === response);

  // your code here

// if (true) {
// 	console.log(1)
// } 
// if (!!" ") {
// 	console.log(2)
// } else {
//     console.log(3)
// }


// function isItFive(num){
//     if (typeof num !== "number") return "That's not a number!"
// 	if (num < 5) return num + " is less than 5";
//     else if (num > 5) return num + " is greater than 5";
//     else if (num === 5) return num + " is 5";
//     else return "I'm not really sure what that is"
// }

// console.log(isItFive("5"))

// Loops!
// Initial Expression
// Conidition for which we keep looping
// step towards completing the loop

// let i = 1 // initial expression

// while (i <= 5){ // i must be less than or equal to 5
//   console.log(i) // log i to console
//   i+=2 // increment i
// }

// console.log(i)

   //init,  condition, increment

// console.log(typeof console.log)

// for (let i = 1; i <= 5; i++) {
// 	console.log(i)
// }

// console.log(i)

let words = "Journey before destination";

let eChar;
for (let index = 0; index < words.length; index = index + 1 ){
	let char = words[index]
    if (char === 'e'){
      eChar = char
      break
    }
    console.log(char)
    // index = index + 1
} 

console.log("I found an " + eChar) 
// your code here
// let arr2 = [
//   42,
//   false,
//   "\n Let's \n go \n Pens",
//   undefined,
//   [[1], 2, [3]]
// ];

// console.log("My array:", arr2)
// for (let currentIndex  = 0; currentIndex < arr2.length; currentIndex++){
// 	console.log("current index:", currentIndex)
//     let currentEle = arr2[currentIndex]
//     let type = typeof currentEle 
//     console.log("current element:", currentEle)
//     console.log("its type is:", type)
// }

let array1 = [1,2,3]
let array2 = [4,5,6]
let array3 = [7,8,9]

// let combined = array1 + array2 + array3

// let combined = array1.concat(array2, array3)
// console.log(combined)
// // console.log(Array.isArray(combined[0]))
// console.log(combined.indexOf(1))

let arr2 = [
  42,
  false,
  "\n Let's \n go \n Pens",
  undefined,
  [[1], 2, [3]]
];

console.log(arr2[4][0][0])
