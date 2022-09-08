// let foo = function() {
//     console.log("hello");
//     return 42;
//   };

//   foo;


// SCOPE!!

// Global scope 
let global = "out here!"
// localScope()
function localScope(scope) {
  // Local scope!
  // var
  var local = "local scope!"
  // console.log(variable)
  if (true) {
    block = "block scope!"
    console.log(local)
    // Block scope!
  }
  for (let i = 0; i < 5; i++) {
    // also block!
    let variable = "block scope!"
  }
  {
    let variable = "again!";
    // A block all by itself!
  }
}

// localScope()

let pensGoat = "mario"; // Globally scoped variable

function letsGoPens(cap) { // function that creates local scope
  let alt = "dumo";
  if (true) { // if statement creates block scope
    let alt = "letang"
    for (let i = 0; i < 5; i += 5) { // for loop creats another block scope
      let pensGoat = cap;
      let alt = "malkin"
      {
        var goalie = "jarry"
      }
    }
  }
  var goalie = "desmith"
  var goalie = "domingue"
  console.log(pensGoat, cap, alt, goalie)
}

// letsGoPens("crosby")

// let and const
// 

// const a = []
// a.push("")
// a[100] = "b"
// console.log(a)

for (let i = 0; i < 5; i++){
  console.log(i)
  for(let i =0; i < 6; i++){
    console.log(i)
  }
}

//myForEach
function myForEach(arr, cb){
  for (let i = 0; i < arr.length; i++){
      let ele = arr[i]
      cb(ele)
  }
}

//myMap
function myMap(arr, cb){
  let newArr = []
  for (let ele of arr){
      newArr.push(cb(ele))
  }
  return newArr
}

//myFilter
function myFilter(arr, cb){
  let newArr = []
  for (let ele of arr){
      if (cb(ele)) newArr.push(ele)
  }
  return newArr
}

//myEvery
function myEvery(arr, cb){
  for (let i = 0; i  < arr.length; i++){
      if(!cb(arr[i])) return false
  }
  return true
}
