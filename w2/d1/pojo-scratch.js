







// let matrix = [[1,2,3]];
// let obj2 = { key: { key: ''}}

// console.log(object);


let object = {
  key: 'value',
  name: 'brandon',
  age: 27,
  favoriteBands: [ 'idles', 'neck deep', 'joyce manor'],
  location: { city:"tampa", state: 'florida'},
  sayHello: function(name) {
    return 'Hello ' + name;
  },
}

// console['log']('hello')
// console.log(object.sayHello('brandon'))
// assess a method

// console.log([1,2,3].includes(2));//true
// console.log([1,2,3].includes)// [Function: includes]

// console.log(object.sayHello);// [Function: sayHello]
// console.log(object.sayHello('brandon'))//

// console.log(object.location);
// // { city: 'tampa', state: 'florida' }
// console.log(object.location.city)// tampa
// console.log(object['location'])// { city: 'tampa', state: 'florida' }
// console.log(object['location']['city']);// tampa


// let nestedObj = object.location;
// console.log('==>',nestedObj.state);

// console.log(object.location['state']);

// let variable = 'age';
// console.log(object.variable);// undefined
// console.log(object['age'])

// console.log(object);
// let variable = 'favoriteBands';
// console.log(object[variable]);// [ 'idles', 'neck deep', 'joyce manor' ]
// console.log(object['favoriteBands']);// [ 'idles', 'neck deep', 'joyce manor' ]


// console.log(object.name);
// console.log(object['name']);

function makeObj(param) {

  console.log(object.param);
  // console.log(object['name']);
  // console.log(param);// name

  console.log(object[param]);//
  //object['age']

};

makeObj('name');
makeObj('age');
makeObj('location');



// let arr = [1,2,3];
// console.log(arr[0]);// 1

// console.log(object);
// console.log(object['key']);// value
// console.log(object['name']);// brandon
// console.log(object['age']);// 27

// dot notation
// console.log(object.key);// value
// console.log(object.name);// brandon
// console.log(object.age);// 27


let pumpkin = {
  name:' pumpkin',
  '1key': 4,
  'is cute': true,
  '0': 'example'
};


// console.log(pumpkin.name);
// // console.log(pumpkin.1key);
// console.log(pumpkin['1key']); //4
// // console.log(pumpkin.is cute);
// console.log(pumpkin['is cute']);
let arr = {
  0: 'ele 1',
  1: 'ele 2',
  2: 'ele 3'
};

// console.log(arr[0])


let car = {};
// console.log(car);

// car.model = 'mustang';
// console.log(car);

car.model = 'challenger'
car['year'] = 2016
// console.log(car);

let variable = 'make';
car['make'] = 'dodge';
// console.log(car)


car.model = 'mustang';
car['year'] = 2023;
car['make'] = 'ford';

car.nestedObj = { hp: 500 }
// console.log(car)
// { model: 'mustang', year: 2023, make: 'ford', nestedObj: { hp: 500 } }


car.nestedObj.hp = 1000;
// console.log(car);


car.nestObj = { key: 'nested value'}
// console.log(car);


console.log(car);

delete car.model;

console.log(car);
