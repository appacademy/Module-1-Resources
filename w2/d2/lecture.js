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

// access the name
// console.log(series["name"]);
// console.log(series.name);

// access movies
// console.log(series["movies"]["first"]);
// console.log(series["movies"].second);
// console.log(series.movies.third);


// change goodTrilogy to true
// series.goodTrilogy = true;
// console.log(series);


// increment the number of rogues since we forgot Talia
// series.numberOfRogues++;
// console.log(series);


// key into the array inside of the object
// console.log(series.qualityOrder[0]);


// add if favorite line key/value pair
// series.favoriteQuote = "Swear to me.";
// console.log(series);



// // using variables
// let obj = {
//   school: 'Wisconsin',
//   basketballTeam: "Decent",
//   location: "Madison",
// }

// let someVariable = "school";
// let some = "basketball";
// let variable = "Team";
// let place = "LocAtiON";

// // console.log(obj[someVariable]);
// // console.log(obj[some + variable]);
// // console.log(obj[place.toLowerCase()]);


// // Check if a key is in an object
// console.log(obj.place)

// // if (obj.school !== undefined) console.log("This is in the object")

// if ("location" in obj) console.log("This is also in the object")



// let series = {
//   name: "Dragonball",
//   shows: ["OG", "Z", "GT", "Super"],
//   characters: {
//     main: "Goku",
//     son: "Gohan",
//   },
// };


// // for in loop
// // for (let key in series) {
// //   console.log(key);
// //   console.log(series[key])
// // }


// // Get all the keys
// let keyArray = Object.keys(series);
// console.log(keyArray);

// // Get all the values
// let valueArray = Object.values(series);
// console.log(valueArray);

// // Get all the entries
// let entryArray = Object.entries(series);
// console.log(entryArray);



// // Primitives
// let age = 56;
// let newAge = age;
// age++;

// console.log(age, newAge);


// // Reference 
// let biff = {
//   type: "cat",
//   age: 16,
// }

// let buster = biff;

// buster.age = 3;
// console.log(biff, buster);




// Destructuring

// let character = {
//   name: "Ani",
//   homeWorld: "Tatooine",
//   species: "Human",
//   isMaster: false,
//   favoriteThings: {
//     person: "Padme",
//     activity: "Killing Younglings",
//   },
// }

// // let { name, homeWorld, species, isMaster, favoriteThings } = character;
// // console.log(name, homeWorld, species, isMaster, favoriteThings);

// // let { name: aniName, homeWorld: world, species } = character;
// // console.log(aniName, world, species);
// // console.log(name)

// let { favoriteThings: { person, activity } } = character;
// // console.log(favoriteThings) // cannot access
// console.log(person, activity);

// // what line 144 is doing
// let { favoriteThings: things } = character;
// let { person, activity } = things;



// let arr = ["Kristen", "Jeff", "Javier"];
// // let [first, second, third] = arr;
// // console.log(first, second, third);

// console.log(arr);
// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);


// // Switch some variables
// let lastName = "Jeff";
// let firstName = "Granof"; 

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);



// Rest operator

// let yeller = function (...strings) {
//   let result = strings.map(function (string) {
//     return string.toUpperCase();
//   });
//   return result.join(" ") + "!";
// }

// console.log(yeller("i", "am", "the", "senate"));


// Spread Operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2]
// console.log(arr3);

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);


let obj1 = { name: "Jeff" };
let obj2 = { animal: 'dog', game: 'Brilliant Diamond' };
let obj3 = { obj1, obj2, movie: 'Scream' };
console.log(obj3);

let obj4 = { ...obj1, ...obj2, movie: 'Scream' };
console.log(obj4);