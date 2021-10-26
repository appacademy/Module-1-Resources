// // Objects

// let series = {
//   name: "Dark Knight Trilogy",
//   movies: {
//     first: "Batman Begins",
//     second: "The Dark Knight",
//     third: "The Dark Knight Rises",
//   },
//   numberOfRogues: 4,
//   goodTrilogy: false,
//   qualityOrder: [2, 1, 3],
// };

// // access name
// // console.log(series["name"]);
// // console.log(series.name);

// // access movies
// // console.log(series["movies"]["first"]);
// // console.log(series["movies"].second);
// // console.log(series.movies.third);



// // change goodTrilogy to true
// series.goodTrilogy = true;
// console.log(series);


// // Incremement numberOfRogues
// series.numberOfRogues += 2;
// console.log(series);


// // key into the array inside of the object
// console.log(series.qualityOrder[0]);


// // add in a new key/value pair
// series.favoriteQuote = "Swear to me.";
// console.log(series);


// using variables
// let obj = {
//   school: "Wisconsin",
//   footballTeam: "Terrible :(",
//   location: "Madison",
// };

// let someVariable = "school";
// let some = "football";
// let variable = "Team";
// let place = "lOcAtIoN";

// // console.log(obj[someVariable]);
// // console.log(obj[some + variable]);
// // console.log(obj[place.toLowerCase()]);


// console.log(obj.place); // undefined the key is actually called location

// if (obj.school !== undefined) console.log("This is in the object");
// if ("location" in obj) console.log("Also in here");
// if (place.toLowerCase() in obj) console.log("Same as above");



// let show = {
//   name: "Dragonball",
//   series: ["OG", "Z", "GT", "Super"],
//   characters: {
//     main: "Goku",
//     son: "Gohan"
//   },
// };

// // for in loop
// // for (let key in show) {
// //   console.log(key);
// //   console.log(show[key]);
// // }

// // Getting all the keys
// let keyArray = Object.keys(show.characters);
// console.log(keyArray);

// // Getting all the values
// let vauleArray = Object.values(show);
// // console.log(vauleArray);

// // Getting all of the entries
// let entryArray = Object.entries(show.characters);
// console.log(entryArray);


// // Primitives
// let age = 56;
// let newAge = age;
// age = newAge + 1;

// console.log(age, newAge);

// // Reference
// let biff = {
//   type: "cat",
//   age: 16
// }

// let buster = biff;
// biff.age = 3;

// // console.log(biff, buster);


// Destructuring

// let character = {
//   name: "Ani",
//   homeWorld: "Tatooine",
//   species: "Human",
//   lightsaberColor: "blue",
//   isMaster: false,
//   favoriteThings: {
//     person: "Padme",
//     activity: "Killing Younglings"
//   },
// };

// let { name, homeWorld, species, lightsaberColor, isMaster, favoriteThings } = character;
// console.log(name, homeWorld, species, lightsaberColor, isMaster, favoriteThings);

// let { name: aniName, homeWorld: world } = character;
// console.log(aniName, world);
// console.log(character);

// let { favoriteThings: { person, activity } } = character;
// console.log(person, activity);



// let arr = ["Kristen", "Jeff", "Javier"];
// let [first, second, third] = arr;

// console.log(first, second, third);
// // console.log(arr);

// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);

// let placeholder = arr[0];
// arr[0] = arr[1];
// arr[1] = placeholder;


// Switch some variables
// let lastName = "Jeff";
// let firstName = "Granof";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName);
// console.log(lastName);


// Rest operator 

// let yeller = function (...strings) {
//   let result = strings.map(function (string) {
//     return string.toUpperCase();
//   });
//   return result.join(" ") +  "!";
// }

// console.log(yeller("i", "am", "the", "senate"));


// Spread
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [0, arr1, arr2];

// console.log(arr3);

// // let arr4 = [0, ...arr1, ...arr2];
// // console.log(arr4);

// let [first, second, third] = arr3;
// let arr5 = [first, ...second, ...third];
// console.log(arr5);

let obj1 = { name: "Jeff" };
let obj2 = { name: "Bill", animal: 'dog', game: 'Ghosts of Tsushima' };
let obj3 = { obj1, obj2, movie: "Dune" };

// console.log(obj3);

let obj4 = { ...obj1, ...obj2, movie: "Dune", name: "Geoff" };
console.log(obj4);