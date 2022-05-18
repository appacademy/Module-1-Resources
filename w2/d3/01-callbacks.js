// Callbacks
// let nums = [7987, 46, 2100, 400, 125030, 12359, 6, 8778, 9001, 24563, 789987, 125445, 45665421]
// Callbacks are functions that we provide as arguments to other functions. We 
// can then use the callback like we would a helper function -- to perform some
// work or solve some task within our outer function. 

// We're going to make use of this pokemon creator to generate a list of pokemon

// For now, let's see if we can just make use of this function without really
// looking too deeply into it.
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
  
  
  // We'll save what we get back from our function in this pokemons variable
  let pokemons = pokemonCreator();
  
  // Let's see what's stored there,: 
  console.log(pokemons)
  console.log(pokemons.length)

  // That's _a lot_ of Pokemon. But we can see that each one is stored in an
  // object, and each object has some set keys that we can use to build some
  // functions. Let's build a function that can accept a function as an argument
  // that we can use to find pokemon that meet a certain criteria. If no such
  // function is provided, we'll just return the list un-adulterated:

  let displayPokemon = function(pokemons, cb) {
    if (!cb) return pokemons;
    let results = cb(pokemons);
    return results;
  };


// Next we'll build out some functions that we can provide as our callback args
// To print a list of all 1000 pokemons names
let names = function(pokemons) {
  return pokemons.map(function (pokemon) {
    return pokemon.name;
  });
};

// To print a list of all of the Fire type pokemon 
let fires = function(pokemons) {
  return pokemons.filter(function (pokemon) {
    return pokemon.type === "Fire";
  });
}


// To print the number of pokemon between levels 30 and 50 (including them)
let levels = function(pokemons) {
  return pokemons.reduce(function (count, pokemon) {
    if (pokemon.level >= 30 && pokemon.level <= 50) return count + 1;
    else return count;
  }, 0);
}



console.log(displayPokemon(pokemons));
console.log(displayPokemon(pokemons, names));
console.log(displayPokemon(pokemons, fires));
console.log(displayPokemon(pokemons, levels));