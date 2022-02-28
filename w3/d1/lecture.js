// let firstName = "Jeff";
// let lastName = "Granof";

// let greeting = "Hello " + firstName + " " + lastName + "!";
// console.log(greeting);

// let newGreeting = `Hello ${firstName} ${lastName}!`;
// console.log(newGreeting);

// let firstArr = [`Jeff`, "Michael", "Tom", "Wayne"];
// let lastArr = ["Granof", "Jordan", "Brady", "Gretzky"];

// for (let i = 0; i < firstArr.length; i++) {
//   console.log(`${firstArr[i]} ${lastArr[i]} is the goat.`);
// } 

// let arr = [1, 2, 3];
// for (let i = 0; i < arr.length; i++) {
//   debugger;
//   let el = arr[i];
//   console.log(el);
// }

function foo(word) {
  debugger;
  console.log(word);
  bar("barber");
}

function bar(word) {
  debugger;
  console.log(word);
  baz("bazaar");
}

function baz(word) {
  console.log(word);
  debugger;
}

foo("food");