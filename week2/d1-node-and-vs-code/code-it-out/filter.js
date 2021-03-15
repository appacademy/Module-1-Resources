let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];

/* 
without .filter
let yParks = [];

for(let i = 0; i < parks.length; i++){
  let park = parks[i];
  
  if (park[0] === "Y") {
    yParks.push(park)
  }
}

console.log(yParks)
*/
// with .filter
selectedParks = parks.filter(function (park) {
  return park[0] === "Y";
  //if the condition returns true then that means
  //that we are going to choose the element
});
console.log(selectedParks);

// example2
withO = parks.filter(function (park) {
  return park.includes("o");
});
console.log(withO);

//example2
longParks = parks.filter(function (park) {
  return park.length > 7;
});

console.log(longParks);
