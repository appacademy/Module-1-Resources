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
//   qualityOrder: [2,1,3],
// };

// console.log(series)

// // // access name
// console.log(series["name"]);
// console.log(series.name);


// // access movies
// console.log(series["movies"]["first"]);
// console.log(series["movies"].second);
// console.log(series.movies.third);


// change goodTrilogy to true
// series.goodTrilogy = true;
// console.log(series);


// increment the number of rogues to include Talia
// series.numberOfRogues++;
// console.log(series);


// Arrays inside of objects
// console.log(series.qualityOrder[0]);
// series.qualityOrder.push(4);
// console.log(series);
// series.qualityOrder.pop();
// console.log(series);


// add in new key/value pair
// series.favoriteQuote = "Swear to me.";
// console.log(series);


// use variables to access key/value pairs
// let obj = {
//   school: "Wisconsin",
//   footballTeam: "Actually Kinda Decent",
//   location: "Madison",
// }

// let someVariable = "school";
// let some = "football";
// let variable = "Team";
// let place = "LoCaTiOn";

// console.log(obj[someVariable]);
// console.log(obj[some + variable]);
// console.log(obj[place.toLowerCase()]);


// check if a key is in an obj
// console.log(obj.place);

// if (obj.place === undefined) console.log("This is not in the object");

// if ("location" in obj) console.log("In the object");
// if (place.toLowerCase() in obj) console.log("In the object");


// let show = {
//   name: "Dragonball",
//   series: ["OG", "Z", "GT", "Super"],
//   characters: {
//     main: "Goku",
//     son: "Gohan",
//   },
// };

// for in loop
// for (let key in show) {
//   console.log(key, show[key]);
// };

// // Get all the keys
// let keyArray = Object.keys(show);
// // console.log(keyArray);

// // Get all values
// let valueArray = Object.values(show);
// // console.log(valueArray);

// // Get all entries
// let entryArray = Object.entries(show);
// console.log(entryArray);


// Primitives
// let age = 10;
// let newAge = age;
// age = newAge + 1;

// // console.log(age, newAge);


// // Reference
// let biff = {
//   type: "Cat",
//   age: 16,
// }

// let buster = biff;

// buster.age = 3;
// console.log(biff, buster);


// Destructuring
let character = {
  name: "Ani",
  homeWorld: "Tatooine",
  isMaster: false,
  favoriteThings: {
    person: "Padme",
    activity: "Killing Younglings"
  },
};

// let { name, homeWorld, isMaster, favoriteThings } = character;
// console.log(name, homeWorld, isMaster, favoriteThings);

// let { name: aniName, homeWorld: world, isMaster, favoriteThings } = character;
// console.log(aniName, world, isMaster, favoriteThings)
// // console.log(name, homeWorld); // Reference Error
// console.log(character)

// let { favoriteThings: { person, activity } } = character;
// console.log(person, activity);
// console.log(favoriteThings); // Reference Error



// let arr = ["Kristen", "Jeff", "Javier"];
// let [first, second, third] = arr;

// console.log(first, second, third);

// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);


// // Swap some variables
// let lastName = "Jeff";
// let firstName = "Granof";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);


// Rest operator
// let yeller = function (...strings) {
//   console.log(strings)
//   let result = strings.map(function (string) {
//     return string.toUpperCase();
//   });
//   return result.join(" ") + "!";
// }

// console.log(yeller("i", "am", "the", "senate"));


// Spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];

// console.log(arr3);

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);


let obj1 = { name: "Jeff" };
let obj2 = { anmial: "dog", game: "Brilliant Diamond" };
let obj3 = { obj1, obj2, movie: "Gladiator" };
console.log(obj3);

let obj4 = { ...obj1, ...obj2, movie: "Gladiator", game: "Matt" };
console.log(obj4);