// let pokemonCreator = require('./pokemons');

// let pokemons = pokemonCreator();

// let displayPokemon = function(pokemons, cb) {
//   if (!cb) return pokemons;
//   let results = cb(pokemons);
//   return results;
// };

// // To print a list of all 1000 pokemons names - 1000 pokemon back
// let names = function(pokemons) {
//   return pokemons.map(function (pokemon) {
//     return pokemon.name;
//   });
// };

// // To print a list of all of the Fire type pokemon - about 150 back
// let fires = function(pokemons) {
//   return pokemons.filter(function (pokemon) {
//     return pokemon.type === "Fire";
//   });
// }


// // To print the number of pokemon between levels 30 and 50 (including them) - about 200 back
// let levels = function(pokemons) {
//   return pokemons.reduce(function (count, pokemon) {
//     if (pokemon.level >= 30 && pokemon.level <= 50) return count + 1;
//     else return count;
//   }, 0);
// }



// // console.log(displayPokemon(pokemons));
// // console.log(displayPokemon(pokemons, names));
// // console.log(displayPokemon(pokemons, fires));
// console.log(displayPokemon(pokemons, levels));


let people = ["Jeff", "Caleb", "Jojo", "Wes", "Colton"];

// people.forEach(function (el, i, arr) {
//   console.log(el + ' is at idx ' + i);
// });

let myForEach = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    cb(el, i, arr);
  };
};

let func = function(el, i, arr) {
  console.log(el + ' is at idx ' + i);
};

myForEach(people, func)


