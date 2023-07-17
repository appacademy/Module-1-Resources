

/*


  Dot notation!
  - We cannot use variables
  - Use dot notation because its simply easier to write
  - whatever is after the dot when using dot notation, will be used at the string to key into that object

*/


let brandon = {
  name: "brandon",
  age: 27,
  softwareEngineer: true,
  favoriteBands: ["Joyce Manor", "Neck Deep", "Idles"],
  location: {
    city: "tampa",
    state: "Florida",
  },
  sayHello: function (param) {
    return "Hello " + param;
  },
};


// console.log(brandon.name); //brandon
// console.log(brandon.age); //27
// console.log(brandon.favoriteBands); //["Joyce Manor", "Neck Deep", "Idles"]

// you cant do this
let example = 'name';

// console.log(brandon.example); //undefined
// js trying to find the key with a name of example
// but one does not exists
// so you will get undefined


// Edit a object


// change key/value pairs
// change name

// console.log(brandon);

// console.log(brandon.name); //brandon

// we keyed into brandon object to get the name
// and reassign the value to krandon
// can use either bracket or dot notation to edit a object
brandon.name = 'krandon';
brandon['name'] = 'lrandon';

// console.log(brandon['name']); //lrandon

// change the age
console.log(brandon.age); //27
brandon.age++;
console.log(brandon.age); //28

// can edit a nested object
console.log(brandon.location); //{ city: 'tampa', state: 'Florida' }
brandon.location.city = 'Brooksville';
brandon['location']['city'] = 'Brooksville';

console.log(brandon.location);
// { city: 'Brooksville', state: 'Florida' }



// Create/add a key/value pair
// The syntax is the same as editing a object
// but if the key doesnt exists that youre trying to access, then a key-val pair will be created
// if it does exists, overwrite the value

// so if key does not exists create the entry
brandon.height = `5'11`;
// console.log(brandon);

// if it does, overwrite the value
brandon.height = '6ft'
// console.log(brandon);

// add a favColor key-val pair
brandon.favColor = 'red';

// add a favorite key-val pair
brandon['favFood'] = 'chicken';

// console.log(brandon);


// console.log(brandon);
// adding a key value pair to a nested object

brandon.location.country = 'usa';
brandon['location'].country = 'usa';

// console.log(brandon);

// check if value exists in a obj
if(brandon.name !== undefined) {
  console.log('value exists'); //value exists
}


// check if key exists
if('name' in brandon) {
  console.log('key exists'); //key exists
}

// check if nested object key exists
if('city' in brandon.location) {
  // console.log('there is a city key')
}


// Delete a key:val pair
console.log(brandon);

// provide object and key
// then you can use the delete keyword

delete brandon.age;

// console.log(brandon);

/*
{
  name: 'lrandon',
  softwareEngineer: true,
  favoriteBands: [ 'Joyce Manor', 'Neck Deep', 'Idles' ],
  location: { city: 'Brooksville', state: 'Florida', country: 'usa' },
  sayHello: [Function: sayHello],
  height: '6ft',
  favColor: 'red',
  favFood: 'chicken'
}
*/
