let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];

let yParks = [];

for(let i = 0; i < parks.length; i++){
  let park = parks[i];
  
  if (park[0] === "Y") {
    yParks.push(park)
  }
}

console.log(yParks)




selectedParks = parks.filter(function(park) {
  return park[0] === "Y" //if the condition returns true then that means that we are going to choose the element
})

selectedParks = parks.filter(function(park) {
  return park.includes("o");
})


selectedParks = parks.filter(function(park) {
  return park.length > 7;
})