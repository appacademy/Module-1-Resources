let characters = ['Aang', 'Zuko', 'Katara', 'Sokka', 'Toph', 'Azula', 'Ozai', 'Appa', 'Momo', 'Suki', 'Iroh'];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// I want to use a forEach to iterate through and console.log all of the characters

// characters.forEach(function (character) {
//   console.log('this is character', character)
// })

// I want to console.log each index in my characters array

characters.forEach(function (element, index, arr) {
  arr[index] += 'ish'
})

console.log(characters)

// I want to console.log the array itself from within my characters array
// console.log(characters)


let newChars = []

// function adder (elem) {
//   newChars.push(elem)
// }

// function adder (elem) {
//   newChars.push(elem)
// }

// characters.forEach(function (elem, idx, arr){ adder(elem) })
// characters.forEach(adder(elem))

// console.log(newChars)


let characters = ['Aang', 'Zuko', 'Katara', 'Sokka', 'Toph', 'Azula', 'Ozai', 'Appa', 'Momo', 'Suki', 'Iroh'];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// I want an array of all of the characters with ' eats cabbages' tagged on the end

let cabbages = characters.map(function (element, idx, array) {
  console.log('this is idx: ' + idx);
  console.log('this is array: ' + array);
  return element + ' eats cabbages'
})

console.log(cabbages)
console.log(characters)




let characters = ['Aang', 'Zuko', 'Katara', 'Sokka', 'Toph', 'Azula', 'Ozai', 'Appa', 'Momo', 'Suki', 'Iroh'];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// I want an array of only the antagonist in Avatar

let bads = characters.filter(function(elem, idx, array) {
  console.log('index: ', idx)
  console.log('array: ', array)
  let smallName = elem.toLowerCase()
  return !smallName.includes('z')
})

console.log(bads)




let characters = ['Aang', 'Zuko', 'Katara', 'Sokka', 'Toph', 'Azula', 'Ozai', 'Appa', 'Momo', 'Suki', 'Iroh'];

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// I want the sum of all of the numbers in the nums array

let sum = characters.reduce(function (acoooom, elem) {
  if (elem.toLowerCase().includes('z')) {
    return acoooom + elem
  }
  return acoooom
}, '')

// console.log(sum)

// I want 5 more than the sum of all of the numbers in the nums array
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum2 = nums.reduce(function (accum, elem, idx, array) {
  console.log('this is our idx ==>', idx);
  console.log('this is our array ==>', array);
  console.log('this is our accum ==>', accum);
  console.log('this is our elem ==>', elem);
  return accum + elem;
}, 0)



let newObject = {};

newObject['name'] = 'Caleb';
newObject['age'] = '24';
newObject['job'] = 'App Academy';

console.log(newObject['name'])
console.log(newObject['age'])
console.log(newObject['job'])