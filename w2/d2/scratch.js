// let obj = {
//     name: "Jeff",
//     age: 31,
//     favoriteTrilogy: {
//         name: "Prequel Trilogy",
//         favoriteCharacter: "Mace Windu",
//         favoriteLine: "I AM THE SENATE!"
//     }
// };

// access the age
// console.log(obj["age"]);
// console.log(obj.age);

// access my favoriteLine
// console.log(obj["favoriteTrilogy"]["favoriteLine"]);
// console.log(obj["favoriteTrilogy"].favoriteLine);
// console.log(obj.favoriteTrilogy.favoriteLine)

// change my name
// obj.name = "John Microsoft";

// console.log(obj);

// obj["name"] = "Dylan Microsoft";

// console.log(obj);

// chage my age - increment it by one year
// obj.age++;
// console.log(obj.age)

// add in a location key/value pair to obj
// obj.location = "Milwaukee";
// obj.favoriteTrilogy.hatedCharacter = "Jar Jar Binks";


// console.log(obj);


// let obj = {
//     first: 'a',
//     second: 'b',
//     third: 'c'
// };

// let someVariable = "first";

// console.log(obj[someVariable]);
// console.log(obj.first, obj["first"]);



// let obj = {
//     firstName: "Isaac",
//     lastName: "Pak",
//     frequency: "everyday"
// };

// let someVariable = "firstName";
// let some = "last";
// let variable = "Name";
// let time = "FreQUenCy";

// console.log(obj[someVariable])  // obj.firstName
// console.log(obj[some + variable]) // obj.lastName
// console.log(obj[time.toLowerCase()]) // obj.frequency



// Check if a key is in an object
// console.log(obj.age);

// if (obj.firstName !== undefined) console.log("This is in the object");

// if (someVariable in obj) console.log("This is in the object");


// let obj = {
//     firstName: "Isaac",
//     lastName: "Pak",
//     frequency: "everyday",
//     game: {
//         name: "Rocket League",
//         skillLevel: "Terrible"
//     }
// };

// for in loop 
// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// };

// // Getting all of the keys
// let keyArray = Object.keys(obj);
// console.log(keyArray);

// // Getting all of the values
// let valueArray = Object.values(obj);
// console.log(valueArray);

// // Getting all of the entries
// let entryArray = Object.entries(obj);
// console.log(entryArray);



// Primitives
// let age = 31;
// let newAge = age; // newAge === 31
// age = newAge + 1; // age === 32

// console.log(age, newAge);


// let biff = {
//     type: 'cat',
//     age: 16
// };

// // console.log(biff);
// let buster = biff;
// // console.log(buster);
// buster.age = 5;
// console.log(biff, buster);

let character = {
    name: "Mace Windu",
    homeWorld: "Haruun Kal",
    species: "Human",
    lightsaberColor: "violet",
    isMaster: true,
    death: {
        year: "19 BBY",
        place: "Coruscant"
    }
};

// let { name, homeWorld, species, lightsaberColor, isMaster, death } = character;
// console.log(name, homeWorld, species, lightsaberColor, isMaster, death);

// let { name: maceName, homeWorld: world, species, lightsaberColor, isMaster, death } = character;
// console.log(maceName, world);

// console.log(character);


// let { death: { year, place } } = character;
// console.log(year, place);

// console.log(character);



// let arr = ["John", "Jim", "Jack"];
// let [first, second, third] = arr;

// console.log(first, second, three);

// Switch some variables
// let lastName = "Jeff";
// let firstName = "Granof";

// [lastName, firstName] = [firstName, lastName];
// console.log(firstName, lastName);

// console.log(arr);
// [arr[0], arr[1], arr[2]] = [arr[1], arr[2], arr[0]];
// console.log(arr);



// Rest operator

// let yeller = function (...strings) {
//     let result = strings.map(function (string) {
//         return string.toUpperCase();
//     });
//     return result.join(" ") + "!";
// }

// console.log(yeller("i", "am", "the", "senate"));


// Spread operator
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [0, arr1, arr2];
// console.log(arr3);

// // let [first, second, third] = arr3;
// // // arr5 = [first, ...second, ...third];
// // console.log(arr5)

// let arr4 = [0, ...arr1, ...arr2];
// console.log(arr4);


let obj1 = { name: "Jeff" };
let obj2 = { animal: 'dog', game: 'Fallen Order' };
let obj3 = {obj1, obj2, movie: "The Two Towers"};

console.log(obj3);

let obj4 = {...obj1, ...obj2, movie: "The Two Towers"}
console.log(obj4);
