

// assigning key:value pairs to an object

// create object literal
let car = {};

// use the assignment operator to assign key:value to the car object

// dot notation
car.model = 'challenger';

// console.log(car);

// bracket notation
car['year'] = 2016;

// console.log(car);
//{ model: 'challenger', year: 2016 }


// we can do the same with variables
let variable = 'make';
car[variable] = 'dodge';

// console.log(car);
// { model: 'challenger', year: 2016, make: 'dodge' }

// we can reassign the value
// that if the key:value pair exists it will be overwritten

car.model = 'mustang';

car['year'] = '2023';

car.make = 'ford';

// console.log(car);
// { model: 'mustang', year: '2023', make: 'ford' }
// console.log(car.year);// 2023

// assign nested key:vals

car.stats = {};

// console.log(car);

car.stats.mpg = 15;
// console.log(car);
// { model: 'mustang', year: '2023', make: 'ford', stats: { mpg: 15 } }
// car.stats = {mpg, milage, etc}



/*

  Deleting a value
  * Use the delete operator
  * Just provide object and key
    ** key:value pair will be deleted

*/

console.log(car);
//{ model: 'mustang', year: '2023', make: 'ford', stats: { mpg: 15 } }

delete car.stats;

console.log(car);
// { model: 'mustang', year: '2023', make: 'ford' }
