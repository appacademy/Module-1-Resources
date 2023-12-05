/*
Using Object.keys II
Given the object below, use Object.keys() to iterate through the object and
print the key if there are 2 or more "c"s within the value.
*/

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

// Write your solution here.
let keys = Object.keys(obj)

for (let key of keys){
	let cCount = 0;
  let value = obj[key]
  // console.log(value)
  for (let char of value) {
  	// console.log(char)
    if(char === 'c') cCount++
  }
  // console.log(cCount)
  if (cCount >= 2) console.log(key)

}


// Should print "red"
