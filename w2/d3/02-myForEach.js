// myForEach

// Let's take a look at forEach and build our own version. We'll start with an
// array holding the names of the instructors in Mod 1:
let people = ["Bill", "Jojo", "Cam", "Peter", "Cody"];

people.forEach(function (el, i, arr) {
  console.log(el + ' is at idx ' + i);
});


// Now let's take a look at building that function ourselves: 
let myForEach = function(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    cb(el, i, arr);
  };
};

let func = function(el, i, arr) {
  console.log(el + ' is at idx ' + i);
};

myForEach(people, func)
