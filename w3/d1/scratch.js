// let firstName = "Bill";
// let lastName = "Adams";

// console.log("Hello " + firstName + " " + lastName + "!");

// let greeting = `Hello ${firstName} ${lastName}!`;
// console.log(greeting);

// let firstArr = ["Jeff", "Michael", "Tom", "Wayne"];
// let lastArr = ["Granof", "Jordan", "Brady", "Gretzky"];

// for (let i = 0; i < firstArr.length; i++) {
//   console.log(`${firstArr[i]} ${lastArr[i]} is the greatest of all time`);
// }

// let arr = [1,2,3];
// for (let i = 0; i < arr.length; i++) {
//   let el = arr[i];
//   console.log(el);
//   debugger;
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

foo('food');