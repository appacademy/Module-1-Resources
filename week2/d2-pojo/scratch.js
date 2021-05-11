// // /* Array - Objects
// // Syntax

// // [] => {}

// // ORDER

// // ORDERED => UNORDERED

// // KEYING INTO....

// // index number => key name

// // DOT NOTATION...

// // no dot notation => dot notation

// // */

// // let contestants = [
// //   "Kelly Clarkson",
// //   "Rubben Studdard",
// //   "Fantasia Barrino",
// //   "Carrie Underwood",
// // ];
// // // contestant 3 please step forward
// // console.log(contestants[3]); //Carrie Underwood

// // let roomOfRichPeople = {
// //   Importantpersonson: "That's me!",
// //   Bezos: "Yes?",
// //   Gates: "That's my hat!",
// //   thePersonWhoLostTheirHat: "yooooo",
// // };

// // roomOfRichPeople['someDoctor'] = 'howdy';
// // console.log(roomOfRichPeople)

// // let thePersonWhoLostTheirHat = "Gates";

// // // Mr. Importantpersonson, are you here?
// // // console.log(roomOfRichPeople["Importantpersonson"]); // 'That's me!'
// // // console.log(roomOfRichPeople.Importantpersonson); // That's me!

// // // Excuse me, someone lost their hat...
// // console.log(roomOfRichPeople[thePersonWhoLostTheirHat]); // That's my hat!
// // console.log(roomOfRichPeople.thePersonWhoLostTheirHat);

// let store = {
//   banana: 6,
//   apple: 5,
//   orange: 4,
//   kiwi: undefined
// };

// // console.log(store.banana);
// // console.log(store.kiwi);

// let favFruit = "kiwi";

// if (store[favFruit] !== undefined) { // does a key/value exist?
//   console.log('YUM')
// } else {
//   console.log("EW")
// }

// if (favFruit in store) { // if favFruit in store
//   // does a key/value exist?
//   console.log("YUM");
// } else {
//   console.log("EW");
// }

// // console.log(store.banana); // 6
// // console.log(store["orange"]);
// // console.log(store[favFruit]);

// // let fruitsIHave = Object.keys(store); // Cap Object... method name... pass it the obj

// // // let aFruits = fruitsIHave.filter(function (fruit) {
// // //   return fruit[0] === "a";
// // // });

// // // console.log(aFruits);

// // let numbers = Object.values(store);
// // console.log(numbers);

// let age = 10;
// let numberOfFingers = age;
// age = numberOfFingers + 1;
// console.log(age, numberOfFingers);

// let Biff = {
//   type: "dog",
//   age: 10,
// };

// let Buster = Biff;
// Buster.age = 0;

// // console.log(Biff === Buster);
// // console.log(Biff, Buster);

// // let obj = {
// //   "02": true,
// //   10: true,
// //   "01": true,
// //   2: true,
// // };

// // console.log(Object.keys(obj))
// let example = {
//   person: "Mylo",
//   animal: "elephant",
//   car: { year: 1998, make: "Ford" },
// };

// let animal = "dog";

// let {
//   animal: animal2,
//   person,
//   car: bestCar,
//   car: { year: bestYear, make },
// } = example
//   // let person = (the Object).person // 'Mylo'
//   // let animal = (the Object).animal // 'elephant

// // console.log(person, animal2, animal, bestCar, bestYear);
// // console.log(example);

// let [game, _player, computer] = ["Dota 2", "Austin", "PC"];
// // let game = (the Array)[0]
// // let player = (the Array)[1]
// console.log(computer, game);

// let makeThemBig = function (...strings) {
//   // console.log(strings);
//   let result = strings.map(function (word) {
//     if (typeof word === 'string') {
//       return word.toUpperCase();
//     }

//   });
//   return result.join(" ");
// };

// console.log(makeThemBig("hello", "world"));
// // console.log(makeThemBig("hello"));
// console.log(makeThemBig("Hello", "world,", 0, "how's", "it", "going", "today?"));

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

// let Biff = {
//   type: "dog",
//   age: 10,
//   food: {
//     brand: "pedigree",
//     type: "dry",
//   },
// };

// let Buster = { ...Biff };
// Buster.age = 0;
// Buster.food.type = 'wet'

// console.log(Biff, Buster);
