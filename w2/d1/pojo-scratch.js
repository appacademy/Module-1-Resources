

// let arr = [1,2,3,4,5];




// let thor = {
//   name: 'Thor',
//   age: 1500,
//   favoriteBands: ['ACDC', 'Metallica'],
//   location: { realm: 'Asgard'},
//   forAsgard: () => console.log('for asgard!')
// };


// console.log(thor);
// console.log(thor.forAsgard());// We made it

// console.log(thor);
// console.log(age);// throws access do not have access
// console.log(thor);

// * in order to access the value, we will need the key
// * can use either bracket or dot notation

// access name
// console.log(thor.name);// Thor


// console.log(thor['name']);// Thor

let variable = 'location';
// console.log(thor[variable]);// Thor
// the same as
// console.log(thor['name']);// Thor

// console.log(thor[variable]);// { realm: 'Asgard' }

// console.log(thor.variable);// undefined

// console['log']('hey');// hey

let cat = {
  'first name': 'mochi',
  '1age': 2
}

// console.log(cat);
// // console.log(cat.first name)
// console.log(cat['first name']);// mochi

// // console.log(cat.1age);
// console.log(cat['1age'])// 2



/*


let thor = {
  name: 'Thor',
  age: 1500,
  favoriteBands: ['ACDC', 'Metallica'],
  location: { realm: 'Asgard'},
  forAsgard: () => {
    console.log('for asgard!');
  }
};


*/


// console.log(thor.favoriteBands);//
// // [ 'ACDC', 'Metallica' ]
// console.log(thor.favoriteBands[0])
// // ACDC

// console.log(thor.forAsgard)
// [Function: forAsgard]

// console.log(thor.forAsgard())
// for asgard!
// undefined


let thor = {
  name: 'Thor',
  age: 1500,
  favoriteBands: ['ACDC', 'Metallica'],
  location: { realm: 'Asgard'},
  forAsgard: () => {
    console.log('for asgard!');
  }
};



// console.log(thor);
// delete thor.age;
// console.log(thor);

console.log(thor.name);// Thor
console.log(thor.father)// undefined
// there is no key of father


thor.name = thor.name.toUpperCase();

thor.father = 'Odin'
console.log(thor);



// let fakeArr = {
//   'string': 'this',
//   'hey': 'is',
//   'cool': 'an array'
// };

// console.log(arr)
// console.log(arr[0]);// this
