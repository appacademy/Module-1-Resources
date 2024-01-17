/*
Using Object.values
Write a function that accepts and object, obj, and uses Object.values to print all values in the object.
*/

const obj = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    // Write your solution here.

  let values = Object.values(obj)
  // console.log(values)

  for (let val of values) {
  	console.log(val)
  }
}

printValues(obj);    // "1", 2, "three" 
