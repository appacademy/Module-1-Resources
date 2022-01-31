// let firstName = "Jeff";
// let lastName = "Granof";

// console.log("Hello " + firstName + " " + lastName + "!");

// console.log(`Hello ${firstName} ${lastName}!`);


// let teachers = ["Jeff", "Caleb", "Wes", "Jojo", "Colton"];

// console.log("Your Module 1 teachers are:");

// teachers.forEach((teacher, i) => {
//   console.log(`${i+1}. ${teacher}`);
// });



// Debugger
// let arr = [1, 2, 3];
// debugger;
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
  // debugger;
  console.log(word);
  baz("bazaar");
}

function baz(word) {
  console.log(word);
  debugger;
}

foo("food");