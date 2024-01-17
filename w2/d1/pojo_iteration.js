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

// let arr = [1,2,3];

let people = {
    person1: {
        name: 'brandon'
    },
    person2: {
        name: 'maica'
    },
    person3: {
        name: 'JacobDaPlug'
    },
    person4: {
        name: 'scott'
    }
}
// console.log(people.person1)
// console.log(people.person2)
// console.log(people.person3)

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

// 'key' can be anything!
for (let key in people){
    // key is referring to the keys in the obj
    // console.log(key)

    // accessing the values of the each ele/property in the obj
    let personObj = people[key];
    // console.log(personObj)

    let name = personObj.name
    // console.log(name)

    //thank you chris!
    // let personObj = people[key].name;
    // console.log(personObj)

}

// * we could loop or do this
// ? which is more dynamic?
// console.log(people.person1.name);
// console.log(people.person2.name);
// console.log(people.person3.name);
// console.log(people.person4.name);


// iterating through individual obj
let brandon = {
    name : "Brandon",
    age : 100,
    location: { city : "Tampa", state : "Florida" },
    favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
    // object can also store functions!
    sayHello : function(name){
        return "Hello " + name
    }
}

for (let key in brandon){
    let value = brandon[key]
    // console.log(value);
}

// Object.keys
// The Object.keys() static method returns an array of a given object's own enumerable string-keyed property names.


let keys = Object.keys(brandon)
// console.log(keys) // [ 'name', 'age', 'location', 'favoriteBands', 'sayHello' ]

for (let i = 0; i < keys.length; i++){
    let key = keys[i];
    // console.log(key)

    // calling the brandon obj from 78
    let value = brandon[key]
    // console.log('hello from for loop',value)
}

// Object.values
// The Object.values() static method returns an array of a given object's own enumerable string-keyed property values.

let values = Object.values(brandon)
// console.log(values)

/*
[
  'Brandon',
  100,
  { city: 'Tampa', state: 'Florida' },
  [ 'Joyce Manor', 'Neck Deep', 'Idles' ],
  [Function: sayHello]
]
*/

//Object.entries
// The Object.entries() static method returns an array of a given object's own enumerable string-keyed property key-value pairs.

let entries = Object.entries(brandon)
// console.log(entries) -> Result is one big ol' 2D array
/*


[
  [ 'name', 'Brandon' ],
  [ 'age', 100 ],
  [ 'location', { city: 'Tampa', state: 'Florida' } ],
  [ 'favoriteBands', [ 'Joyce Manor', 'Neck Deep', 'Idles' ] ],
  [ 'sayHello', [Function: sayHello] ]
]

*/

for (let i = 0; i < entries.length; i++){
    let entry = entries[i] // this is a sub array
    // each ele within the entries array
    // console.log(entry)

    // how to isolate just the val
    console.log(entry[1])

    //how to isolate just the key
    console.log(entry[0])
}
