// // let printer = function (str, cb) {
// //   str = cb(str);
// //   return str;
// // }

// // let upper = function(str) {
// //   return str.toUpperCase();
// // };

// // let lower = function(str) {
// //   return str.toLowerCase();
// // };

// // let str = "I lost in my Fantasy semi-finaLs last nigHt";

// // console.log(printer(str, upper));
// // console.log(printer(str, lower));


// /*
// 1. Build up a Pokemon Array with 1000 random pokemon
// 2. Get a new array with the names of all the pokemon
// 3. Get a new array with only the fire pokemon
// 4. Count the number of pokemon in between levels 30 and 50
// */

// let selectionOfPokemon = [
//   { name: "Bulbasaur", type: "Grass"},
//   { name: "Charmander", type: "Fire"},
//   { name: "Squirtle", type: "Water"},
//   { name: "Pidgey", type: "Flying"},
//   { name: "Pikachu", type: "Electric"},
//   { name: "Eevee", type: "Normal"},
//   { name: "Gyrados", type: "Water"},
//   { name: "Articuno", type: "Ice"},
//   { name: "Zapdos", type: "Electric"},
//   { name: "Moltres", type: "Fire"},
//   { name: "Dragonite", type: "Dragon"},
//   { name: "Mewtwo", type: "Psychic"},
//   { name: "Mew", type: "Psychic"},
// ];


// let pokemons = [];

// for (let i = 0; i < 1000; i++) {
//   let pokemonNumber = Math.floor(Math.random() * selectionOfPokemon.length);
//   let level = Math.ceil(Math.random() * 100);
//   // console.log(level)
//   pokemons.push({
//     ...selectionOfPokemon[pokemonNumber],
//     level
//   });
// };

// // console.log(pokemons);


// let displayPokemon = function(pokemons, cb) {
//   let results = cb(pokemons);
//   return results;
// };

// let names = function(pokemons) {
//   return pokemons.map(function (pokemon) {
//     return pokemon.name;
//   });
// };

// let fires = function(pokemons) {
//   return pokemons.filter(function (pokemon) {
//     return pokemon.type === "Fire"
//   });
// };

// let levels = function(pokemons) {
//   return pokemons.reduce(function (count, pokemon) {
//     if (pokemon.level >= 30 && pokemon.level <= 50) return count + 1
//     else return count
//     // return pokemon.level >= 30 && pokemon.level <= 50 
//     //   ? count + 1 
//     //   : count
//   }, 0);
// };


// console.log(displayPokemon(pokemons, names));
// console.log(displayPokemon(pokemons, fires));
// console.log(displayPokemon(pokemons, levels));



let people = ["Eli Manning", "Brad Simpson", "Nick Foles"]

// people.forEach(function (el, i, arr) {
//   console.log(el + ' is at idx ' + i);
// });


// Custom For Each Loop
let myForEach = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    cb(el, i, arr);
  };
};

let func = function(ele, index, arr1) {
  console.log(ele + ' is at idx ' + index);
};

myForEach(people, func);