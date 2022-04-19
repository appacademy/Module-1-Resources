// Destructuring

// Destructuring gives us a way to reference specific elements if we know the
// order they show up in an array, or the key attached to them in an object

let character = {
  name: "Ani",
  homeWorld: "Tatooine",
  species: "Human",
  lightsaberColor: "blue",
  isMaster: false,
  favoriteThings: {
    person: "Padme",
    activity: "Pod Racing",
  },
}


// We can create new variables that line up with the keys in our object: 
let { name, homeWorld, species, lightsaberColor, isMaster, favoriteThings } = character;
console.log(name, homeWorld, species);

// We can also alias, or create things with different names, the values in our
// keys. For example, rather than creating name and homeWorld variables, we
// could alias them into aniName and world, let's take a look:
let { name: aniName, homeWorld: world } = character;
console.log(aniName, world);


// We can also chain destructure: 
let { favoriteThings: { person, activity } } = character;
console.log(person, activity);

// The same pattern works in arrays, but is instead bound to the order of the 
// elements in the arrays. 
let arr = ["Bill", "Jeff", "Geoff"];
let [first, second, third] = arr;

console.log(first, second, third);


// We can also use destructuring syntax to swap the positions of array elements
console.log(arr);
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

// This same syntax works with other variables as well:
let lastName = "Bill";
let firstName = "Adams";

[lastName, firstName] = [firstName, lastName];
console.log(firstName, lastName);
