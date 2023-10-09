/*

Iterating through objects
  * Objects store unordered key:value pairs
  * Cannot rely on indices to access values
  * We will have to use different ways to access and keys and values in an object

  * Well be covering
    ** for in
    ** Object.values
    ** Object.keys
    ** Object.entries

  ! If we can can gain access to the key; we can gain access to the value

*/

// * a people object with nested person objects
let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "maica",
  },
  person3: {
    name: "charles",
  },
  person4: {
    name: "trevor",
  },
};

// access a person in order to do so; we need the key
// console.log(people);
// console.log(typeof [1,2,3]);// object
// console.log(Array.isArray([1,2,3]));
// console.log(people.person1);// { name: 'brandon' }
// console.log(people.person2);// { name: 'maica' }
// console.log(people.person3);// { name: 'charles' }

// console.log(people.length);// undefined
// ! cant loop through object
// for(let i = 0; i < people.length; i++){
//   console.log('hello');
// }

/*

  For in loop
  * Can be used to get all the keys
  * the variable after the let keyword is bananable
    ** meaning you can name it anything
    ** it will be the variable used to represent the key
  * We can use this key variable to 'key' into the object to get the value

  ! Don't use for in loop with arrays/strings
  ! Use only on objects

*/

for (let key in people) {
  // console.log(key);
  // console.log(people);
  // let value = people[key];

  // console.log(people. key);// ! will print undefined
  // console.log("key:", key, "value:", value);

  let personObj = people[key];
  // console.log(personObj)
  let name = personObj.name;
  // console.log(name);
}

// * we could loop or do this
// ? which is more dynamic?
// console.log(people.person1.name);
// console.log(people.person2.name);
// console.log(people.person3.name);
// console.log(people.person4.name);


let brandon = {
  name: 'brandon',
  age: 27,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: { city: "Tampa", state: "Florida" },
  sayHello: function(name) {
    return 'Hello ' + name;
  }
}


for(let key in brandon){
  // console.log(key)
  let value = brandon[key];
  console.log(value);
}
