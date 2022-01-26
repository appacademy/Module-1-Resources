let pokemonCreator = require('./pokemons');

// 1. Displaying all of the pokemons names (1000 pokemon)
// 2. Display all of the pokemon that have type 'fire' (around 150 pokemon)
// 3. Display and count all of the pokemon between lvls 30 and 50 (around 200 pokemon)

let displayPokemon = function(pokemons, cb) {
  if (!cb) return pokemons;
  let results = cb(pokemons);
  return results;
}

// Display Pokemon Names
let names = function(pokemons) {
  return pokemons.map(function (pokemon) {
    return pokemon.name;
  });
};

// Dispaly all the Fire Types
let fires = function(pokemons) {
  return pokemons.filter(function (pokemon) {
    return pokemon.type === 'Fire';
  });
};


// Display the Pokemon between levels 30 and 50
let levels = function(pokemons) {
  return pokemons.reduce(function (count, pokemon) {
    if (pokemon.level >= 30 && pokemon.level <= 50) return count + 1;
    else return count;
  }, 0)
};


let pokemons = pokemonCreator();
// console.log(displayPokemon(pokemons));
// console.log(displayPokemon(pokemons, names));
// console.log(displayPokemon(pokemons, fires));
console.log(displayPokemon(pokemons, levels));


let names = ['Jeff', 'Caleb', 'Jojo', 'Wes', 'Colton', 'Ryan'] 

// names.forEach(function(element, idx, array) {
//   console.log('element: ', element)
//   console.log('idx: ', idx)
//   console.log('array: ', array)
// })

// for (let i = 0; i < names.length; i ++) {
//   let name = names[i];
//   console.log(name.toUpperCase())
// }

function myForEach (array, potato) {
  for (let i = 0; i < array.length; i ++) {
    let element = array[i];
    console.log('potato --', potato)
    potato(element, i, array)
  }
}

function capitalize (elem, idx, array) {
  console.log(elem.toUpperCase())
  return false
}

myForEach(names, capitalize)

myForEach(names, function (elem, idx, array) {
  console.log('element: ', elem)
  console.log('idx: ', idx)
  console.log('array: ', array)
})