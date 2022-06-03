// function sayHi(name){
//     return "Hi " + name
// }

// function greeting(name, cb){
//    return cb(name) + " how are you today?"
// }

// console.log(greeting("Bill", sayHi))

// function calculator(num1, num2, operation){
//     return operation(num1, num2)
// }

// function addition(num1, num2){
//     return num1 + num2
// }

// let subtraction = (num1, num2) => num1 - num2

// let multiply = (num1, num2) => num1 * num2

// let divide = (num1, num2) => num1 / num2

// let exponent = (num1, num2) => num1 ** num2


// console.log(calculator(6, 2, multiply))

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

let bigOlList = pokemonCreator()

let displayPokemon = (pokemons, filterFunc) => {
    if (!filterFunc) return pokemons
    let results = filterFunc(pokemons)
    return results
}
//                                         (ele, i, arr) => ele.name
// let getNames = (pokemons) => pokemons.map(pokemon => pokemon.name)
function getNames(pokemons){
    let names = pokemons.map(function(pokemon){
        return pokemon.name
    })
    return names
}

let getBulbasaur = pokemons => pokemons.filter(pokemon => pokemon.name === "Bulbasaur")
// function getBulbasaur(pokemons){
//     let bulbaPedia = pokemons.filter(function(pokemon){
//         return pokemon.name === "Bulbasaur"
//     })
//     return bulbaPedia
// }

let levels = pokemons => pokemons.reduce((count, pokemon)=>{
    if (pokemon.level >= 30 && pokemon.level <= 50) count++
    return count
}, 0)



// console.log(displayPokemon(bigOlList, levels))
// Hi!

function myForEach(array, callback){
    // console.log(sum)
    for (let i = 0; i < array.length; i++){
        let ele = array[i]
        callback(ele, i, array)
    }
}
function myMap(array, callback){
    let newArray = []
    // console.log(sum)
    for (let i = 0; i < array.length; i++){
        let ele = array[i]
        newArray.push(callback(ele, i, array))
    }
    return newArray
}

let myArray = [100,200,300,500]
let addToSum = num => sum += num;
let doubler = num => num * 2
let sum = 0

console.log(myForEach(myArray, addToSum))

console.log(sum)
console.log(myMap(myArray, doubler))