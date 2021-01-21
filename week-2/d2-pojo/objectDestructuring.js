// Destructuring
  // A way to extract data from objects and arrays

// 1. Array Destructuring + Object Destructiong
// 2. Destructuring With an Alias
// 3. Destructuting Function Parameters
//      Extracting values in the function parameters from a passed in argument


// ---------------------------------------------------------
// Array Destructuring Vs. 
// Object Destructing


// Array - order matters
let colors = ['red', 'orange', 'yellow' ];
let [ firstColor, secondColor, banana ] = colors;

// debugger


// Object - order does NOT matter 
let instructorObject = {
  b: 'Bart',
  s: 'Sergey',
  r: 'Rose'
};

// let { b, s, r } = instructorObject;
let { r, b, s } = instructorObject;
debugger  

// ---------------------------------------------------------
// Alias Destructuring - (fancy obj dest)
// destructures & renames your data in one line
// note- alias' are NOT copies of the data. They point to the data. 

let data = { 
  username: "Jill" , 
  age: 100, 
  thingz: ['pomegranate', 'mango', 'strawberry']
}

let { thingz: fruit, username: papaya } = data;
// debugger
// fruit.push('mangooo')
// console.log(fruit)
// console.log(data["thingz"])


// ---------------------------------------------------------
// Nested destructuring
// Access the values stored in objects
//  which are nested inside of other objects

let dog = {
  name: 'Marley',
  age: 3,
  status: 'Good dog',
  tricks: ['sit', 'speak', 'roll over', 'solve calculus'],
  owner: {
    firstName: 'Alissa',
    lastName: 'Crane',
    treats: {
      'special' : 5,
      regular: 3
    }
  }
};
// let specialPrice = dog.owner.treats['special']; 

let { owner: { firstName } } = dog;
// console.log(firstName);
let {owner: {treats: { regular } } } = dog
debugger
let { tricks: [ trick1, trick2, trick3 ] } = dog;

// console.log('This dog is loved by ' + firstName);
// console.log('This dog can ' + trick1 + " and " + trick3 );

// -----------------------------------------------------------
// Destructuring Objects for function parameters.



let alvin = { name: 'Alvin', city: 'NYC', neighborhood: 'Brooklyn' };
let rose = { name: 'Rose', city: 'SF', neighborhood: 'Oakland' };

function intro(person) {
  let name = person.name;
  let city = person.city;
  let neighborhood = person.neighborhood;

  console.log(name + ' is from ' + city + ', ' + neighborhood);
}
// intro(alvin);

// vs.

function destructuredIntro( { name, city , neighborhood, banana } ) {
  if (banana === undefined) {
    banana = '';
  }
  console.log(name + ' is from ' + city + ', ' + neighborhood + ', ' + banana);
}

intro(alvin);
destructuredIntro(rose);
