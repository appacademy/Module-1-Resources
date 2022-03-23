// let pokemonCreator = require('./pokemons');

// let pokemons = pokemonCreator();

// let displayPokemon = function(pokemons, cb) {
//   if (!cb) return pokemons;
//   let results = cb(pokemons);
//   return results;
// };

// // Getting back 1000 pokemon
// let names = function(pokemons) {
//   return pokemons.map(function (pokemon) {
//     return pokemon.name;
//   });
// };


// // Get ~154 Pokemon back
// let fires = function(pokemons) {
//   return pokemons.filter(function (pokemon) {
//     return pokemon.type === 'Fire';
//   });
// };


// // Get back about ~210
// let levels = function(pokemons) {
//   return pokemons.reduce(function (count, pokemon) {
//     if (pokemon.level >= 30 && pokemon.level <= 50) return count + 1;
//     else return count;
//   }, 0);
// };

// // console.log(displayPokemon(pokemons)); 
// // console.log(displayPokemon(pokemons, names)); 
// // console.log(displayPokemon(pokemons, fires)); 
// console.log(displayPokemon(pokemons, levels)); 


let people = ['Jeff', 'Caleb', 'Wes', 'Jojo', 'Cam'];

// Regular forEach Loop
// people.forEach(function (ele, i, arr) {
//   console.log(ele + ' is at idx ' + i);
// });

// Custom forEach Function
let myForEach = function (arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    cb(ele, i, arr);
  }
};

let func = function(ele, i) {
  console.log(ele + ' is at idx ' + i);
}

myForEach(people, func);