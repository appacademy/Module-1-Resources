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
  },
  variable: 'hello'
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
// console.log(obj.name);//brandon
// console.log(obj.age);//27


//bracket notation
//can use variables, values in square brackets will resolve before it tries to key into the object
// console.log(obj['name'])//brandon
// console.log(obj['age'])//27

//can use variable with bracket notation
let variable = 'name';

//evaluate the code inside the square brackets, which is just the name string
// console.log(obj[variable])//brandon
//same as obj['name'] because the variable variable holds the string name

//does not work with dot notation
//i want to key into the obj, using variable as the key
//the variable key does not exists in our object
// console.log(obj.variable)//undefined

//access nested data types

// console.log(obj.location.city)//tampa
// console.log(obj['location']['city'])//tampa
// console.log(obj.location['city'])//tampa


//edit a object
//change a key/value pair
//change the name
obj.name = 'krandon';
// console.log(obj.name);//krandon
obj['name'] = 'brandon';
// console.log(obj.name)//brandon


//change nested obj
obj['location'].city = 'Brooksville'
// console.log(obj.location['city']);//brooksville

//can increment age
obj.age++;
// console.log(obj['age']);//28



//add new key/value pair
//syntax is the same as reassigning a value
//if key doesnt exist it will create it, if it does it will overwrite its value
obj.favColor = 'red';//this will create it because it does not yet exists
// console.log(obj)
obj.favColor = 'blue'//this will overwrite it because it already exists
// console.log(obj)

//adding to a nested obj
obj['location']['country'] = 'usa';
obj.location.country = 'USA'
// console.log(obj.location.country)//usa
// console.log(obj)

//check is value exists in a obj
//check if name key has a value
// if(obj.name !== undefined) console.log('value exists')


//check is key exists
//check if name key exists
// if('name' in obj) console.log('key exists')



//delete a key value pair
// console.log(obj);
delete obj.age
// console.log(obj);

//if you want to change a keys name, you have to delete the key/value pair, but assign to the new key the old key's value


let arr2 = obj.favBands;
// console.log(arr2)

//for of loop!
//will not work on objects
//works on array
//when used on an array, it grabs all the values
for(let band of arr2) {
  // console.log(band)
}

// for(let i = 0; i < arr2.length; i++) {
//   let band = arr[i];
// }

//cannot use for of loop on object
// obj is not iterable
// for(let key of obj) {
//   // console.log(key)
// }

let show = {
  name: "Star Trek",
  series: ["TOS", "TNG", "DS9", "VOY"],
  captains: {
    TOS: "Kirk",
    TNG: "Picard",
    DS9: "Sisko",
    VOY: "Janeway"
  },
}


//iterate through objects
//for in
//if used on object, will grab the keys
//if used on array, will grab the indexes
for(let key in show) {
  // console.log('key - ', key)//because we have access to the keys, we can get the values!
  // console.log('value - ',show[key]);//we are dynamically changing the key, so as we iterate we can key into all the values in the obj
  // console.log('dot notation', show.key) show.key trying to access the string 'key' in our obj
}

//another way to access value
//either this or the above approach is fine
//getting all keys
//object.keys
//is return an array of all the keys
let keyArray = Object.keys(show);
// console.log(keyArray)

for(let i = 0; i < keyArray.length; i++) {
  let key = keyArray[i];
  // console.log('key - ', key);
  // console.log('value - ', show[key])
}


//get all values
//returns an array of values
let valuesArray = Object.values(show);
// console.log(valuesArray);


//get all the entries
let entryArray = Object.entries(show);
console.log(entryArray)
