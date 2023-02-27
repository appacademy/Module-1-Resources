/*




    Objects - POJO's plain old javascript objects
      - a object is defined by {} - a object literal
      - a data structure used to hold collections of data
      - hold key - values pairs => { key: value, key1: value2 }
      - key - usually a string, if its a number, it will be type casted(type is changed from number to string) into a string
      - value - can be any data type! - array, object, string, number, boolean, null, undefined
      - unordered
      - in order to access the value we need the key
*/


//lets take a look at an array
//indexes - 0 1 2
//value   - c a t
let arr = ['c', 'a', 't'];
// console.log(arr);
//in order to access the value at an index we must key into it
// console.log(arr[0]);//c
// console.log(arr[1]);//a
// console.log(arr[2]);//t

//when you think of an object, think about arrays, were keying to an array to get the value
//same thing with an object, we key into a object using a key, to get the value
//difference is, objects keys can be strings

//objects
let catObj = { 0: 'c', 1: 'a', 2: 't' }
// console.log(catObj)
//if we i wanted to gain access to 'c' i need the key
//i want the value associated with the key 0
// console.log(catObj[0])//c
// console.log(catObj[1])//a
// console.log(catObj[2])//t
// console.log(catObj[5] + catObj[1] + catObj[2]);//cat


//brandon

let obj = {
  name: 'brandon',
  age: 27,
  softwareEngineer: true,
  favBands: ['joyce manor', 'neck deep', 'idles'],
  location: {
    city: 'Tampa',
    state: 'Florida'
  },
  sayHello: function() {
    return 'hello'
  }
}

//IF WE WANT TO ACCESS THE VALUE WE NEED THE KEYS!!!
//key unlocks the value

//two ways to access variables
//dot notation vs bracket notation

//dot notation
//easier to read
//cannot use variable as a key
//will key into whatever the string is after the dot, not the variable
//access name


