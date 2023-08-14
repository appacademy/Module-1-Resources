/*



  Iterating through objects
    * Objects store unordered key:value pairs
      ! Objects do not have order
    * Cannot rely on indices to access values
    * We will have to use different ways to access keys and values in an object

    Well be covering
      * for in
      * Object.values
      * Object.keys
      * Object.entries

*/


// A people object with nested person objects
let people = {
  person1: {
    name: "brandon",
  },
  person2: {
    name: "anthony",
  },
  person3: {
    name: "anabel",
  },
  person4: {
    name: "charles",
  },
  person5: {
    name: "trevor",
  },
};


// * access a person
console.log(people.person1);//{ name: 'brandon' }
console.log(people.person2);// { name: 'anthony' }
console.log(people.person3);// { name: 'anabel' }
console.log(people.person4);// { name: 'charles' }
// can use bracket
console.log(people['person2']);// { name: 'anthony' }


/*

  For in loop
  * Can be used to get all the keys
  * the variable after the let is bananable
    * meaning that you can name it anything
    * it will be the variable used to represent the key
  * We can use this key variable to 'key' into the object to get the value

  ! Dont use for in loop with arrays/strings
  ! Use only on objects

*/
console.log(people);
// * for in loop
// * key is bananable variable
for(let key in people) {
  console.log('key: ', key);// person1 | person2 | person3
  // console.log('value: ', people[key]);// <- this will work!
  // console.log('value: ', people.key);// <- cannot use dot notation to key into a variable

  // store in for variable for readability
  let value = people[key];
  console.log('value: ', value);
  console.log('name: ', value.name)
  let name = value.name;
  // console.log(name)
}

// * as we loop, the key changes; we can use the changing keys to get the values in the object

// console.log(people.person1.name);//
// console.log(people.person2.name);//
// console.log(people.person3.name);//
// console.log(people.person4.name);//
