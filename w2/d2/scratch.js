// let obj = {
//   name: "Mylo",
//   age: 1000,
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// // How would I print Mylo's favorite game's name?
// console.log(obj["game"]["name"]);
// console.log(obj.game.name);
// // How would a key:value pair to the inner object
// obj.game.lane = "safe";
// console.log(obj);
// // How can I override a key:value pair
// obj.name = "Justin";
// console.log(obj);

// //How would I print Mylo's name from the object?
// console.log(obj["name"]);
// console.log(obj.name);
// //How would I add his location, Chicago?
// obj.location = "Chicago";
// console.log(obj);
// //How would I change his age to 1001?
// obj["age"] = 1001;
// obj.age++
// console.log(obj);

// let obj = {
//   first: 'a',
//   second: 'b',
//   third: 'c'
// }

// let position = 'first';

// console.log(obj.first, obj['first'], obj[position], obj.position) // a a

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: undefined,
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// // console.log(obj[someVariable]); // Oscar
// // console.log(obj[some + variable]); // Mayer
// // console.log(obj[time.toLowerCase()]);

// // Check if a key is in an object
// if (obj.firstName !== undefined) {
//     console.log('This is in the object')
// }

// if ('firstName' in obj) {
//     console.log('This is in the object')
// }

// // for in loop
// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// // for (let key in obj) {
// //   console.log(key);
// //   let value = obj[key];
// //   console.log(value);
// // }

// // Object.keys
// let keyArr = Object.keys(obj);
// console.log(keyArr); //Object.keys(<an object>)
// //Object.values
// let valueArr = Object.values(obj);
// console.log(valueArr); //Object.values(<an object>)
// // Object.entries
// let entryArr = Object.entries(obj);
// console.log(entryArr); //Object.entries(<an object>)
// Primitive vs Reference
// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let biff = {
//   type: "dog",
//   age: 10,
// };

// let buster = biff;
// buster.age = 0;

// console.log(biff, buster);

//Destructuring

// let user = {
//   firstName: "Jeff",
//   lastName: "Granof",
//   username: "jeffy5",
//   age: 900,
// };

// // let firstName = user.firstName;
// // let lastName = user.lastName;
// // let username = user.username;
// // let age = user.age;
// // // console.log(firstName, lastName);

// let firstName = "Mylo";
// let { age, firstName: jeffName, lastName, username } = user;

// console.log(jeffName, lastName, username, age);

// someFunc = function (string) {
//   return string.toUpperCase();
// };

// someFunc(user.firstName);

// let arr = ["a", "b", "c"];

// let [first, second, third] = ["a", "b", "c"];

// console.log(first, second, third);

// Switching variables
// let lastName = "Mylo";
// let firstName = "James";

// console.log(firstName, lastName);

// [firstName, lastName] = [lastName, firstName];

// console.log(firstName, lastName);

// let makeThemBig = function (...strings) {
// //   console.log(strings, "strings");
//   console.log(Array.isArray(strings)); //true
//   let result = strings.map(function (string) {
//     return string.toUpperCase();
//   });
//   return result.join(" ");
// };

// console.log(makeThemBig("hello", "world"));
// console.log(makeThemBig("hello"));
// console.log(makeThemBig("Hello", "world,", "how's", "it", "going", "today?"));

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr3);
// console.log(arr4);

// let obj1 = { name: "Mylo" };
// let obj2 = { animal: "elephant", game: "Dota 2" };
// let obj3 = { obj1, obj2, movie: "Fantastic Mr. Fox" };
// let obj4 = { ...obj1, ...obj2, movie: "Fantastic Mr. Fox" };
// console.log(obj3);
// console.log(obj4);


let biff = {
  type: "dog",
  age: 10,
};

let buster = { ...biff, age: 0 };
// buster.age = 0;

console.log(biff, buster);