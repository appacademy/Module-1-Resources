// Array.prototype.push
let people = ['Miah'];
let firstPeople = people;

people.push('Adrian');
people.push('Tom');
people.push('Justin');
people.push('Emily');

console.log(people); // [ 'Gordon', 'Soon-Mi', 'Angela', 'Justin' ]
console.log(firstPeople === people); // true













// Array.prototype.pop
let dogs = ['Fido', 'Digby', 'Fluffy'];
let beforePop = dogs;

const lastDog = dogs.pop();

// console.log(lastDog); // 'Fluffy'
// console.log(dogs); // ['Fido', 'Digby']
// console.log(beforePop === dogs);
















// Array.prototype.shift
let cats = ['Paprika', 'Whiskers', 'Garfield'];
let beforeShift = cats;

let firstCat = cats.shift();

// console.log(firstCat); // 'Paprika'
// console.log(cats); // ['Whiskers', 'Garfield']
// console.log(beforeShift === cats);












// Array.prototype.unshift
let beforeUnshift = cats; 

cats.unshift('Sennacy');

// console.log(cats); // ['Sennacy', 'Whiskers', 'Garfield']
// console.log(beforeUnshift === cats);










// Array.prototype.splice
let drinks = ['coffee', 'oj', 'pumpkin juice'];
drinks.splice(1, 2, 'milk'); 

console.log(drinks); // [ 'coffee', 'milk' ]






function arrayToUpperCase(arr) {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (typeof element === 'string') {
      element = element.toUpperCase();
    }
  }
  return arr;
}