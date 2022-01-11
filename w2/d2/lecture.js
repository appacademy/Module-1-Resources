// Objects

let series = {
  name: "Dark Knight Trilogy",
  movies: {
    first: "Batman Begins",
    second: "The Dark Knight",
    third: "The Dark Knight Rises",
  },
  numberOfRogues: 5,
  goodTrilogy: false,
  qualityOrder: [2, 1, 3],
}

// Access name
// console.log(series["name"]);
// console.log(series.name);

// Access Movies
// console.log(series["movies"]["first"]);
// console.log(series.movies.second);
// console.log(series["movies"].third);

// console.log(series)


// change goodTrilogy to true]
// series.goodTrilogy = true;
// console.log(series)


// icrement the number of rogues to include Talia
// series.numberOfRogues++;
// console.log(series)


// key into array inside of the object
// console.log(series.qualityOrder[0]);
// console.log(series)


// add in favorite quote as a key/value pair
// series.favoriteQuote = "Swear to me.";
// console.log(series)


// using variables to access keys
// let obj = {
//   school: "Wisconsin",
//   footballTeam: "Kinda Bad",
//   location: "Madison",
// };

// let someVariable = "school";
// let some = "football";
// let variable = "Team";
// let place = "LoCaTiOn";

// console.log(obj[someVariable]);
// console.log(obj[some + variable]);
// console.log(obj[place.toLowerCase()]);

// // Check if a key is in the object
// console.log(obj.place)

// if (obj.location !== undefined) console.log("This is in the object")
// if (someVariable in obj) console.log("This is in the object");




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
//   console.log(key);
//   console.log(show[key]);
// }

// Getting all the keys
// let keyArray = Object.keys(show);
// console.log(keyArray);

// Getting all the values
// let valueArray = Object.values(show);
// console.log(valueArray)

// // Getting all the entries
// let entryArray = Object.entries(show);
// console.log(entryArray);




// Primitives
// let age = 56;
// let newAge = age;
// age++;

// console.log(age, newAge);


// Reference
// let biff = {
//   type: 'cat',
//   age: 16,
// };

// console.log(biff)

// let buster = biff;
// console.log(buster);

// buster.age = 3;
// console.log(biff, buster);


// Destructuring

// let jeff = {
//   name: "Jeff",
//   age: 31,
// }

// let name = jeff.name
// let age = jeff.age


// let character = {
//   name: "Ani",
//   homeWorld: "Tatooine",
//   isMaster: false,
//   favoriteThings: {
//     person: "Padme",
//     activity: "Killing Younglings",
//   },
// }

// let { name, homeWorld, isMaster, favoriteThings } = character;
// console.log(name, homeWorld, isMaster, favoriteThings);

// favoriteThings.jeff = "Jeff";

// console.log(character.favoriteThings)

// let { name: aniName, homeWorld: world, isMaster, favoriteThings } = character;

// console.log(aniName, world);
// console.log(character);

// let { favoriteThings: { person, activity } } = character;
// // console.log(favoriteThings)
// console.log(person, activity)



// let arr = ["Kristen", "Jeff", "Javier"];
// let [first, second, third] = arr;

// // console.log(first, second, third);

// console.log(arr);

// [arr[0], arr[1]] = [arr[1], arr[0]];
// console.log(arr);



// Switch some variables
// let lastName = "Brad";
// let firstName = "Simpson";
// // let name4 = "asdf"

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName + " " + lastName);



// Rest operator
// let yeller = function (...strings) {
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
let obj2 = { animal: "dog", game: "Brilliant Diamond" };
let obj3 = { obj1, obj2, movie: "No Way Home" };

// console.log(obj3);


let obj4 = { ...obj1, ...obj2, movie: "No Way Home" };
console.log(obj4);

obj4.name = "Kat"
console.log(obj1);


