/*

Objects!
  What is an object?
    - Objects or POJO give us a way of creating collections of values that can be accesed witha given key
    - A set of keys and values
    - A data structure delinated by {}
    - keys are almost always strings
    - can set any data type as a value, even functions!
    - They do not have a guarantee order

*/

//arrays are accessed by keying into an index
//each index corresponds to a value at that index
let arr = ['c','a','t'];
// console.log(arr[0])//c


//objects are similar
//delinated by curley braces
//can hold all sortss of data types
//values can be any data type - object, number, array, string
//key almost always a string

let obj = {
  name: 'brandon',
  age: 27,
  softwareEnginner: true,
  favoriteBands: ['Joyce Manor', 'idles', 'Neck deep'],
  location: {
    city: 'Tampa',
    state: 'Florida'
  },
  sayHello: function() {
    return 'Hello'
  },
  bio: undefined,
}


//lets talk about assessing data in our objects
//bracket notation vs dot notation

//dot notation
// console.log(obj.name)//brandon
// console.log(obj.age)//27
console.log(obj.location.city)//Tampa
