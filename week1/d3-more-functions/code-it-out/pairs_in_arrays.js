// Pairs in Arrays
let dogs = ['Fido', 'Digby', 'Fluffy'];

for (let i = 0; i < dogs.length; i++) {
  // i is the first position
  let dog1 = dogs[i];

  // console.log(dog1);
  for (let j = 0; j < dogs.length; j++) {
    // j is the second position
    let dog2 = dogs[j];

    // console.log('    ', dog2);
    console.log(dog1, dog2);
  }
}

console.log('-----------------');

// let's put it in a function!
// return an array of arrays of all pairs of dogs
/*
turning ['Fido', 'Digby', 'Fluffy']

into
[
  [Fido, Fido]
  [Fido, Digby],
  [Fido, Fluffy],
  [Digby, Fido],
  [Digby, Digby],
  [Digby, Fluffy],
  [Fluffy, Fido],
  [Fluffy, Digby],
  [Fluffy, Fluffy]
]
*/

// const DOG_BREEDS = [''];

function dogPairs(dogs) {
  const pairs = [];
  for (let i = 0; i < dogs.length; i++) {
    const dog1 = dogs[i];
    for (let j = 0; j < dogs.length; j++) {
      const dog2 = dogs[j];
      console.log(dog1, dog2);
      if (j >= i + 1) {
        const pair = [dog1, dog2];
        pairs.push(pair);
      }
    }
  }
  return pairs;
}

const pairs = dogPairs(dogs);
console.log(pairs);

console.log('-----------------');


// unique pairs in arrays
let cats = ['Paprika', 'Whiskers', 'Garfield'];

for (let i = 0; i < cats.length - 1; i++) {
  let cat1 = cats[i];

  // console.log(cat1);
  for (let j = i + 1; j < cats.length; j++) {
    let cat2 = cats[j];

    // console.log('    ', cat2);
    console.log(cat1, cat2);
  }
}

// let's put it in a function!
// return an array of arrays of all the unique pairs of cats
/*
turning ['Paprika', 'Whiskers', 'Garfield']

into
[
  [Paprika, Whiskers],
  [Paprika, Garfield],
  [Whiskers, Garfield]
]
*/

function uniquePairs(cats) { // cats = ['Paprika', 'Whiskers', 'Garfield']
  const pairs = [];
  for (let i = 0; i < cats.length; i++) { // i = 2
    for (let j = i + 1; j < cats.length; j++) { // j = 3
      const cat1 = cats[i]; // 'Whiskers'
      const cat2 = cats[j]; // 'Garfield'
      const pair = [cat1, cat2]; // ['Whiskers', 'Garfield']
      pairs.push(pair);
    }
  }
  return pairs; // [['Paprika', 'Whiskers'], ['Paprika', 'Garfield'], ['Whiskers', 'Garfield']]
}

console.log(uniquePairs(cats));