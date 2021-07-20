// let obj = {
//   name: "Mylo",
//   age: 1000,
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// let person = "name";
// //How would I print Mylo's name from the object?
// console.log(obj["name"]);
// console.log(obj.name);
// console.log(obj[person]);
// console.log(obj.person);
// //How would I add his location, Chicago?
// obj["location"] = "Chicago";
// console.log(obj);
// //How would I change his age to 1001?
// obj["age"] += 1;
// console.log(obj);
// //Print Dazzle
// console.log(obj["game"]["favHero"]);
// console.log(obj.game.favHero);

// let someVariable = "firstName";
// let some = "second";
// let variable = "Name";
// let time = "FrEQUENcY";

// let obj = {
//   firstName: "Oscar",
//   secondName: "Mayer",
//   frequency: "everyday",
// };

// console.log(obj[someVariable]); // Oscar
// console.log(obj[some + variable]); // Mayer
// console.log(obj[time.toLowerCase()]);
// console.log(obj.firstName.toLowerCase());

// let obj = {
//   name: "Mylo",
//   age: 1000,
//   animal: undefined,
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// console.log(obj["animal"]);
// console.log("animal" in obj);
// console.log("drink" in obj);

// let obj = {
//   name: "Mylo",
//   age: 1000,
//   animal: undefined,
//   game: {
//     name: "Dota 2",
//     position: 5,
//     favHero: "Dazzle",
//   },
// };

// let keyArr = Object.keys(obj); //[ 'name', 'age', 'animal', 'game' ]
// let valueArr = Object.values(obj);
// let entriesArr = Object.entries(obj);
// console.log(entriesArr);

// keyArr.forEach(function (key) {
//   let value = obj[key];
//   console.log(key);
//   console.log(value);
// });

// for (let key in obj) {
//   console.log(key);
//   let value = obj[key];
//   console.log(value);
// }

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

// let person = "Emily";
// let obj = { person: "Mylo", animal: "elephant" };

// let { person: person2, animal } = obj;
// // let person = obj.person //obj['person']
// // let animal = obj.animal
// person2 = "Caleb";
// console.log(obj);
// console.log(person, person2, animal);

// let arr =
// let [num1, num2, num3, num4] = [1, 2, 3];
// console.log(num1, num2, num3, num4);

// let [favAnimal, secondFavAnimal] = ["dog", "elephant"];
// console.log(favAnimal, secondFavAnimal);

// [favAnimal, secondFavAnimal] = [secondFavAnimal, favAnimal];
// console.log(favAnimal, secondFavAnimal);

// function makeThemBig(firstString, ...strings) {
//   console.log(firstString.toLowerCase());
// //   console.log(strings);
//   strings.forEach(function (string) {
//     console.log(string.toUpperCase());
//   });
// }

// makeThemBig("HELLO", "hi", "bye");

// let arr = [1, 2, 3];
// // let arr2 = arr.concat([4])
// let arr1andAHalf = [4, 5, 6];
// let arr2 = [...arr1andAHalf, ...arr];

// console.log(arr2);

// let obj1 = {
//   name: "Mylo",
//   age: 1001,
// };

// let obj2 = {
//   name: "Geoff",
//   game: "Dota",
//   animal: "elephant",
// };

// let obj3 = { ...obj1, ...obj2, name: "Emily" };
// console.log(obj3);

let biff = {
  type: "dog",
  age: 10,
  game: {
    name: "fetch",
    speed: "fast",
  },
};

let buster = { ...biff };
buster.age = 0;
buster.game = { ...buster.game, speed: "medium" };

console.log(biff, buster);
