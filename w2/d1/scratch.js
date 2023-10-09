





// let brandon = {
//   name: 'brandon',
//   age: 27,
//   favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
//   location: { city: "Tampa", state: "Florida" },
//   sayHello: function(name) {
//     return 'Hello ' + name;
//   }
// }


let cat1 = {
  name: "pumpkin",
  age: 3,
  color: "orange",
  "1key": null,
  "is cute": true,
};

// Dot notation
// cannot use variables as keys
let variable = 'name';
// console.log(cat1.variable);//undefined
// console.log(cat1['variable'])
// js is trying to find a key of variable

// bracket notation
// console.log(cat1[variable]);//pumpkin


// console.log(cat1.is cute);
// console.log(cat1['is cute']);// true

// console.log(cat1.1key)
// console.log(cat1['1key']);


// keys are coerced into strings
let fakeArr = {
  1:'ele1',
  2:'ele2',
  3:'ele3'
}


console.log(fakeArr);
//{ '1': 'ele1', '2': 'ele2', '3': 'ele3' }

