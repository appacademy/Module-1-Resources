// let pokemonCreator = () => {
//     let selectionOfPokemon = [
//       { name: "Bulbasaur", type: "Grass"},
//       { name: "Charmander", type: "Fire"},
//       { name: "Squirtle", type: "Water"},
//       { name: "Pidgey", type: "Flying"},
//       { name: "Pikachu", type: "Electric"},
//       { name: "Eevee", type: "Normal"},
//       { name: "Gyrados", type: "Water"},
//       { name: "Articuno", type: "Ice"},
//       { name: "Zapados", type: "Electric"},
//       { name: "Moltres", type: "Fire"},
//       { name: "Dragonite", type: "Dragon"},
//       { name: "Mewtwo", type: "Psychic"},
//       { name: "Mew", type: "Psychic"},
//     ];
  
//     let pokemons = [];
  
//     for (let i = 0; i < 1000; i++) {
//       let pokemonNumber = Math.floor(Math.random() * selectionOfPokemon.length);
//       let level = Math.ceil(Math.random() * 100);
  
//       pokemons.push({
//         ...selectionOfPokemon[pokemonNumber],
//         level,
//       });
//     }
  
//     return pokemons;
//   }
  
  
// let pokemons = pokemonCreator()
// // console.log(pokemonCreator)
// // console.log(pokemonCreator())

// function pokemonDisplayer(listOfPokemon, cb, option1){ // define function to display pokemon, accepting list and optional cb and other options
//   if (cb === undefined) return listOfPokemon // if no callback, return list as is
//   return (cb(listOfPokemon, option1)) // else, return list after being passed through cb with options
// }

// function getNames(list){ // define function to get names, takes in list
//   return list.map(function(ele){ //map through list to create new array
//     return ele.name //fill array with the .name values from each element
//   })
// }

// function filterByType(list, type){ // build filter function for type
//   return list.filter(function(ele){ // filter list by specified type
//     // if (ele.type === type) return true
//     return ele.type === type // only add elements that much our type
//   })
// }

// function noRepeats(list){ // define function to filter out repeated names
//   let seenPokemon = {} // create object to track seenPokemon that we've seen
//   let result = [] // create array to hold unique pokemon
//   list.forEach(function(pokemon){ // use forEach to iterate accross list
//     let currentName = pokemon.name
//     if (!seenPokemon[currentName]){
//       seenPokemon[currentName] = "Have seen this Pokemon"; // add name to object 
//       result.push(pokemon) // push pokemon into result array
//       // console.log("Names so far:", names)
//       // console.log("Unique Pokemon:", result)
      
//     // } return; // check to see if name is present in names object
//     // else {  // if not, 
//     }
//   })
//   console.log("Found", result.length,"unique pokemon")
//   return result //after looking at each individual pokemon, return our result
// }

// console.log(pokemonDisplayer(pokemons, filterByType, "Dragon"))


//   // let nums = [7987, 46, 2100, 400, 125030, 12359, 6, 8778, 9001, 24563, 789987, 125445, 45665421]
    
//   // function callBack(num, i, arr){
//   //   return num > 9000
//   // }
//                      // function(num, i, arr){return num > 9000}
//   // let powerfulNums = nums.filter(callBack)
  
//   // console.log(powerfulNums)

let instructors = ["Bill", "Jojo", "Cam", "Peter", "Cody"]

// instructors.forEach(function(instructor, index, array){
//   console.log(instructor, "is at index", index)
// })

function myForEach(array, cb){ // begin define myForEach
  
  for (let i = 0; i < array.length; i++){ //setup loop structure to iterate through array
    let ele = array[i] // give variable to refer to element at current index
    cb(ele, i) //invoke callback, passing in bot ele and i
  }
 
}

let sum = 0

function adder(num){
  sum += num
}

function logger(ele, index){ //begin define logger
  console.log(ele,"is at index", index) //log our params with clarifying text
}
// myForEach(instructors, logger)
myForEach([1,2,3,4], adder)
console.log(sum)

//heres change