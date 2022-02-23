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

module.exports = pokemonCreator; 