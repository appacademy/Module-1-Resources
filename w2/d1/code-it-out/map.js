let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];

/* 
implementation without map

let newParks = [];

for(let i = 0; i < parks.length; i++){
  let park = parks[i];
  newParks.push(park.toUpperCase());
}

console.log(newParks)
*/

// with map method
let newParks = parks.map(function (park) {
  return park.toUpperCase();
});

console.log(newParks);

//concat
let concat = parks.map(function (park) {
  return park + " National Park";
});

console.log(concat);

/* 
Does .map mutate the original array?

*/