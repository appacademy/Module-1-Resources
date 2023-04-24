let arr = ["this", "is", "an", "array"];

//for of loop used on in arr, will grab all of the elements of an array
for (let ele of arr) {
  console.log(ele); //prints out elements of an array
}

//for in loop used on in arr, will grab all the indexes of an array
for (let i in arr) {
  console.log(i); //prints out the indexes
  // console.log(arr[i])//prints out the values at that index
}

let obj = { 1: "this", 2: "is", 3: "an", 4: "object" };

//a for of loop used on an object will throw a type error
// for(let value of obj){
//   console.log(value)//Error: TypeError: obj is not iterable
//   //cannot use for of loop on in object
// }

//a for in loop used on in obj will grab all the keys of an object
for(let key in obj) {
  console.log(key)//prints out the keys

  //we can then use these keys, to key into our object to get the value
  console.log(obj[key])//prints outs values
}
