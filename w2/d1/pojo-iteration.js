/*

  Iterating through objects
  * Objects store unordered key:value pairs
  * Cannot rely on indices to access values
  * we will have to use different ways to access to the key and therefore the values

  Well be covering
  * for in
  * object.values
  * object.keys
  * object.entries

  ! If we want to gain access to value we need to know the key
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
    name: "trevor",
  },
  person4: {
    name: "charles",
  },
};


// * access a person
// * we need a key
// console.log(people.person1);// { name: 'brandon' }
// console.log(people.person2);// { name: 'maica' }
// console.log(people.person3);// { name: 'trevor' }

// how can we go about this dynamically
// * by iterating!


/*


  For In loop
  * can be used to get all the keys
  * the variable after the let keyword is bananable
  * we can use this key variable to access or key into the object as we iterate
  * because we will iterate the same amount of times as there are keys/values

  ! Dont use for in loop with arrays/strings
  ! use only objects
*/


// * for in loop
// * key is a bananable variable
for(let key in people) {
  console.log('key: ',key);// person1
  // console.log(people);

  console.log('value: ', people[key]);
  // use the key to get the value
  // * can store value in variable
  let person = people[key];

  // can key into the object to get the name
  console.log(person.name)

  // could also do this
  let name = person.name
  console.log(name);
}
