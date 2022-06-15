// // callbacks vs helper functions
// // callbacks are always passed as an argument to another function
// // helper functions just help out

// let cb1 = (element, index, array) => {
//     return element * 2
// }

// let cb2 = (num) => {
//     if (num <= 1) return false
//     for(let i = 2; i < num; i++){
//         if (num % i === 0) return false
//     }
//     return true
// }

// let nums = [1,2,3,4,5]

// console.log(nums.filter(cb2))
// console.log(nums.filter((num, i, arr) => {
//     if (num <= 1) return false
//     for (let i = 2; i < num; i++){
//         if (num % i === 0) return false
//     }
//     return true
// }))

let pokemonCreator = () => {
    let selectionOfPokemon = [
      { name: "Bulbasaur", type: "Grass"},
      { name: "Charmander", type: "Fire"},
      { name: "Squirtle", type: "Water"},
      { name: "Pidgey", type: "Flying"},
      { name: "Pikachu", type: "Electric"},
      { name: "Eevee", type: "Normal"},
      { name: "Gyrados", type: "Water"},
      { name: "Articuno", type: "Ice"},
      { name: "Zapados", type: "Electric"},
      { name: "Moltres", type: "Fire"},
      { name: "Dragonite", type: "Dragon"},
      { name: "Mewtwo", type: "Psychic"},
      { name: "Mew", type: "Psychic"},
    ];
  
    let pokemons = [];
  
    for (let i = 0; i < 1000; i++) {
      let pokemonNumber = Math.floor(Math.random() * selectionOfPokemon.length);
      let level = Math.ceil(Math.random() * 100);
  
      pokemons.push({
        ...selectionOfPokemon[pokemonNumber],
        level,
      });
    }
  
    return pokemons;
  }

let listOfPokemon = pokemonCreator(); // storing the array of 1000 results

function pokemonSorter(pokemons, callback, opt1){ // defining a higher order function, that wants the list
                                                  // a callback, and any options
    if (callback === undefined) return pokemons   // check to see if callback is undefined, and return list
    else {  
        return callback(pokemons, opt1)           // else, invoke callback with list and options
    }
}

let certainKind = function(pokemons, name){ // define callback that will take in list as well as name to find
    function pokeFilter(pokemon, index, arr){ // define filter callback that will return true or false if given
                                              // input has correct name
        return pokemon.name === name
    }
    return pokemons.filter(pokeFilter) // call .filter method on list of all pokemon, making use of filter callback
}

let highLevels = (list, level) => { // define callback that will return only pokemon that are at or above a 
                                    // certain level
   return list.filter(poke => poke.level >= level).map(poke => ({name: poke.name, level: poke.level}))
   // use .filter method to find pokemon that meet level condition, then map through return data to
   // remove extraneous type key
}

console.log(pokemonSorter(pokemonSorter(listOfPokemon, certainKind, "Squirtle"), highLevels, 80))
// console.log(pokemonSorter(listOfPokemon, onlyBulba, "Squirtle"))

