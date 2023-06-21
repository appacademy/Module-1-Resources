let names = ["brandon", "anthony", "anabel", "charles", "trevor"];

//  forEach
// used to iterate, touch, access elements in an array
// cannot return in a forEach

// names.forEach( (name, i, arr) =>  console.log(name, i, arr) );

const myForEach = (arr, cb) => {

  //iterating through the arr and passing every element to the callback function
  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
   cb(name, i, arr);//passing values to callback
    //callback logs the name, i, arr
  };


};


// myForEach(names, (name, i, arr) =>  console.log(name, i, arr) )

// map
// map is used when you want to return a new array of elements modified in some way

// passing every name in the names array to the callback function and taking the return and storing in an array, which is the return value of map
let upperCasedNames = names.map( (name) => name.toUpperCase() );
// console.log(upperCasedNames);//[ 'BRANDON', 'ANTHONY', 'ANABEL', 'CHARLES', 'TREVOR' ]


//imitating .map under the hood
// passing values to a callback function and storing them in a new array
const myMap = (arr, cb) => {
	let newArr = [];//store modified values

  	for(let i = 0; i < arr.length; i++) {
     let name = arr[i];
     let upperCasedName = cb(name);// storing the return value of passing the name to the callback function in a variable called upperCasedNames
     // console.log('before:', name, 'after:', upperCasedName);
      newArr.push(upperCasedName);
    };

  return newArr;//map returns a new array
}

console.log(myMap(names, (name) => name.toUpperCase() ))


let filteredNames = names.filter( (name) => name.includes('o') )
// console.log(filteredNames)

const myFilter = (arr, apple) => {
// console.log(arr, cb)

  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
   let name = arr[i];
    console.log(apple(name))
  	if(apple(name) === true) {
     newArr.push(name)
    }
  }
  return newArr;
};


console.log(myFilter(names, (name) => name.includes('o')))




let res = names.every( name => name.includes('o') )
// console.log(res);


const myEvery = (arr, cb) => {
	// console.log(arr, cb);

  for(let i = 0; i < arr.length; i++) {
    let name = arr[i];

    if(cb(name) === false){
     return false;
    }

  }

  return true;
}


console.log(myEvery(names, (name) => name.includes('o')));
