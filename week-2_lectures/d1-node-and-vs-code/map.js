let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];

let newParks = [];

for(let i = 0; i < parks.length; i++){
  let park = parks[i];
  newParks.push(park.toUpperCase());
}

console.log(newParks)




let newParks = parks.map(function(park) {
  return park + 'national park';
})

console.log(newParks)