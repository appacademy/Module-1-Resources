// Objects

// let series = {
//   name: "Dark Knight Trilogy",
//   movies: {
//     first: "Batman Begins",
//     second: "The Dark Knight",
//     third: "The Dark Knight Rises",
//   },
//   numberOfRogues: 5,
//   goodTrilogy: false,
//   qualityOrder: [2, 1, 3],
// };


// access name
// console.log(series["name"]);
// console.log(series.name);

// access movies
// console.log(series["movies"]["first"]);
// console.log(series["movies"].second);
// console.log(series.movies.third);

// change goodTrilogy to true
// series.goodTrilogy = true;
// console.log(series);

// incremement numberOfRogues to include Talia Al Ghul
// series.numberOfRogues++;
// console.log(series);


// key into the array inside of the object
// console.log(series.qualityOrder[1]);

// add in a key/value pair
// series.bestQuote = "FOR YOU";
// console.log(series);



// using variables
// let obj = {
//   school: "Wisconsin",
//   basketballTeam: "jeffs sad",
//   location: "Madison",
// }

// let someVariable = "school";
// let some = "basketball";
// let variable = "Team";
// let place = "LocAtIoN";

// // console.log(obj[someVariable]);
// // console.log(obj[some + variable]);
// // console.log(obj[place.toLowerCase()]);

// // console.log(obj.place); // undefined no key named place

// if ("school" in obj) console.log("Its in here")
// if (someVariable in obj) console.log("Its also in here")


// let show = {
//   name: "Dragonball",
//   series: ["OG", "Z", "GT", "Super"],
//   character: {
//     main: "Goku",
//     son: "Gohan",
//   },
// }

// // for in loop
// for (let key in show) {
//   console.log(key, ": ", show[key]);
//   // console.log(show[key]);
// }

// Get all the keys into an array
// let keyArray = Object.keys(show);
// console.log(keyArray);

// // Get all the values into an array
// let valueArray = Object.values(show);
// console.log(valueArray);

// Get all of the entries
// let entryArray = Object.entries(show);
// console.log(entryArray);


// Primitives
// let age = 56;
// let newAge = age;
// newAge++;

// console.log(age, newAge);


// Reference
// let biff = {
//   type: 'cat',
//   age: 16
// };

// let buster = biff;
// buster.age = 3;

// console.log(biff, buster);


// Destructuring

// let character = {
//   name: "Ani",
//   homeWorld: "Tatooine",
//   species: "Human",
//   lightsaberColor: "blue",
//   isMaster: false,
//   favoriteThings: {
//     person: "Padme",
//     activity: "Killing Younglings",
//   },
// }

// // let { name, homeWorld: world, species, lightsaberColor } = character;
// // console.log(name, world, species, lightsaberColor);

// let { favoriteThings: { person, activity: act } } = character;
// console.log(person, act);



// let arr = ["Kristen", "Jeff", "Javi"];
// // let [first, second, third] = arr;
// // console.log(first, second, third);

// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);


// let lastName = "Jeff";
// let firstName = "Granof";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);


// Rest Operator
// let yeller = function (...strings) {
//   let res = strings.map(function (string) {
//     return string.toUpperCase();
//   });
//   return res.join(" ") + "!";
// };

// console.log(yeller("i", "am", "the", "senate"));



// Spread Operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [0, ...arr1, ...arr2];

// console.log(arr3);


let obj1 = { name: "Jeff" };
let obj2 = { animal: 'dog', game: 'Elden Ring' };
let obj3 = { ...obj1, ...obj2, movie: "Shrek 2" };

console.log(obj3);