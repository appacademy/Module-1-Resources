// let name = "Jeff";
// let motto = "My apple crumble is by far the most crumble-est!"; 

// console.log(name + "'s motto is " + motto);
// console.log(`${name}'s motto is ${motto}`);


// let firstArr = ["Jeff", "Michael", "Aaron", "Wayne"];
// let lastArr = ["Granof", "Jordan", "Rodgers", "Gretzky"];

// for (let i = 0; i < firstArr.length; i++) {
//   console.log(`${firstArr[i]} ${lastArr[i]} is the greastest.`);
// }


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
  debugger;
  console.log(word);
  baz("bazaar");
}

function baz(word) {
  console.log(word);
  debugger;
}

foo("food")