let parks = ["Zion", "Yellowstone", "Acadia", "Yosemite"];
/* 
for loop

for(let i = 0; i < parks.length; i++){
  let park = parks[i];
  console.log(park);
}

*/

//refactor with forEach
parks.forEach(function (park) {
  console.log(park);
});

//takes in multiple params
parks.forEach(function (ele, i, array) {
  console.log(ele);
  console.log(i);
  console.log(array);
  console.log("---");
});

//example of using forEach
let str = "";

parks.forEach(function (park) {
  str += park;
});

console.log(str);

/* 
What are some examples of when to NOT use a forEach?

*/
