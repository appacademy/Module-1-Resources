
// 1. Rest Operator - takes in the rest of parameters 

function smoothie(ingredient1, ingredient2) {
  console.log('Contains: ' + ingredient1 + ' & ' + ingredient2);
}
// smoothie('mango', 'strawberry');



// What if we had a lot more arguments / smoothie ingredients ?


// We can use rest parameters to make the function more dynamic and 
  // take in any number of arguments.

function restSmoothie(...allIngredients) {
  // let res = 'Contains: ' + ingredient1;
  let res = 'Contains: ';
  // console.log(otherIngredients)
  // for (let i = 0; i < allIngredients.length; i++) { 
  //   // console.log(allIngredients[i]) 
  //   // console.log(res);
  //   res = res + ' and ' + allIngredients[i];
  // }
  // res = 'Contains: and ginger and banana';
  allIngredients.forEach( function(ele) {
    res = res + ' and ' + ele;
    // = 'Contains: and ginger' + ' and ' + 'banana';
    // = 'Contains: and ginger and banana';
    // res = 'Contains: and ginger and banana';
  })

  console.log(res); // 'Contains: and ginger and banana';
}

// restSmoothie('ginger', 'banana'); // ['banana', 'kiwi']
// restSmoothie('ginger', 'pepper', 'turmeric', 'milk', ); // ['pepper', 'turmeric', 'milk',]
// restSmoothie('ginger', 'pepper', 'turmeric', 'milk', 'banana', 'kiwi');







// ----------------------------------------------------

// Spread Operator

// Spread with Arrays:
let smallDogs = ['chihuahua', 'pomeranian', 'maltese'];
let mediumDogs = ['poodle', 'collie', 'basset hound'];
let largeDogs = ['saint bernard', 'great dane', 'english mastiff'];
// => ...['chihuahua', 'pomeranian', 'maltese'];
//      = 'chihuahua', 'pomeranian', 'maltese'
let allDogsOneString = [ smallDogs + mediumDogs + largeDogs];
let allDogs = [ ...smallDogs, ...mediumDogs, ...largeDogs];
let allDogsV2 = [ smallDogs, mediumDogs, largeDogs];
// console.log(allDogs);
// console.log(allDogsOneString);
// console.log(allDogsV2); // 2d array  







// Spread with Objects
let sfInstructors = {
  c: 'carlos',
  m: 'mike',
  j1: 'jen',
  j3: 'julia'
};

let nyInstructors = {
  d: 'David',
  p: 'Paloma',
  k: 'Kafele',
  j1: 'Josh'
};

// let combinedInstructors = { ...sfInstructors, ...nyInstructors };
let combinedInstructors = { ...nyInstructors , ...sfInstructors};
combinedInstructors['j2'] = 'julia'
delete combinedInstructors['j3']
// delete combinedInstructors.j3
console.log(combinedInstructors['j1']); // Josh
console.log(combinedInstructors); // one j1 key



// spread in a function 
function spreadDemo(dog1, dog2, dog3) {
  console.log(dog1, dog2, dog3)
}


let dogs = ['bob', 'bill', 'betty']
// spreadDemo(...dogs)
