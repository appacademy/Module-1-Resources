// Objects 

let series = {
    name: "Dark Knight Trilogy",
    movies: {
        first: "Batman Begins",
        second: "The Dark Knight",
        third: "The Dark Knight Rises"
    },
    numberOfRogues: 4,
    goodTrilogy: false,
    qualityOrder: [2,1,3]
};

// access name
// console.log(series["name"]);
// console.log(series.name);

// access movies
// console.log(series['movies']['first']);
// console.log(series["movies"].second);
// console.log(series.movies.third);

// Change the trilogy to be good
// series.goodTrilogy = true;
// console.log(series);

// Increment number of rogues
// series.numberOfRogues++;
// console.log(series);

// console.log(series.qualityOrder[0]);

// add in Jeff's favorite line as a key/value Pair
// series.favoriteQuote = "Swear to me.";
// console.log(series);





// using variables
// let obj = {
//     school: "Wisconsin",
//     footballTeam: "Terrible :(",
//     location: "Madison"
// };

// let someVariable = "school";
// let some = "football";
// let variable = "Team";
// let place = "LoCaTiOn";

// console.log(obj[someVariable]);
// console.log(obj[some + variable]);
// console.log(obj[place.toLowerCase()]);

// console.log(obj.place);

// if (obj.school !== undefined) console.log("In the object");

// if (someVariable in obj) console.log("In the object");
// if ("location" in obj) console.log("In the obj");



// let show = {
//     name: "Dragonball",
//     series: ["OG", "Z", "GT", "Super"],
//     characters: {
//         main: "Goku",
//         son: "Gohan"
//     }
// };

// // for in loop
// for (let key in show) {
//     console.log(key);
//     console.log(show[key]);
// }

// // Get all the keys
// let keyArray = Object.keys(show);
// console.log(keyArray);

// // Get all the values
// let valueArray = Object.values(show);
// console.log(valueArray);

// // Get all the entries
// let entryArray = Object.entries(show);
// console.log(entryArray);



// Primitives
// let age = 56;
// let newAge = age;
// age = age + 1;

// console.log(age, newAge)


// Reference
// let biff = {
//     type: "cat",
//     age: 16
// };

// let buster = biff;
// console.log(biff, buster);

// buster.age = 3;
// console.log(biff, buster);



// Destructuring

// let character = {
//     name: 'Ani',
//     homeWorld: 'Tatooine',
//     species: 'Human',
//     lightsaberColor: 'blue',
//     isMaster: false,
//     favoriteThings: {
//         person: 'Padme',
//         activity: "Killing Younglings"
//     }
// };

// let { name, homeWorld, species, lightsaberColor, isMaster, favoriteThings } = character;
// console.log(name, isMaster, favoriteThings);

// let { name: aniName, homeWorld: world } = character;
// console.log(aniName, world);

// let { favoriteThings } = character;
// console.log(favoriteThings);

// let { favoriteThings: { person, activity } } = character;
// console.log(person, activity);
// console.log(favoriteThings); // favoriteThings is not defined

// let arr = ["John", "Jim", "Jack"];
// // let [first, second, third] = arr;

// // console.log(first, second, third);

// console.log(arr);
// [arr[0], arr[1], arr[2]] = [arr[2], arr[0], arr[1]];
// console.log(arr);


// let lastName = "Barry";
// let firstName = "Mattern";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);


// Rest operator
// let yeller = function (...strings) {
//     let result = strings.map(function (str) {
//         return str.toUpperCase();
//     });
//     return result.join(" ") + "!";
// }

// console.log(yeller("i", "am", "the", "senate"));



// Spread Operator
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = [0, arr1, arr2];

// // console.log(arr3);

// // let arr4 = [0, ...arr1, ...arr2];
// // console.log(arr4);

// let [first, second, third] = arr3;
// let arr5 = [first, ...second, ...third];
// console.log(arr5);



let obj1 = { name: 'Hector' };
let obj2 = { name: 'Jeff', pet: 'dog', game: 'the new pokemon snap'};
let obj3 = { obj1, obj2, tvShow: 'friends' };

// console.log(obj3);

let obj4 = { ...obj1, ...obj2, tvShow: 'friends' };
console.log(obj4);




