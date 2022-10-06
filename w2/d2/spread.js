let object1 = {name: 'Rupert', age: 5, speak: 'Meow'};
let object2 = {location: 'NY', borough: 'Brooklyn'};

const breakDownObj = obj => {
  // return Object.entries(obj); // Not what we want
  
  let keys = Object.keys(obj) // ['name', 'age', 'speak']
  let values = Object.values(obj)
  
  let newArray = [...keys, ...values]
  return newArray;
  
  // return [keys[0], keys[1], keys[2] , ...values]
}

console.log(breakDownObj(object1));          // => [ 'name', 'age', 'speak', 'Rupert', 5, 'Meow' ]
console.log(breakDownObj(object2));          // => [ 'location', 'borough', 'NY', 'Brooklyn' ]