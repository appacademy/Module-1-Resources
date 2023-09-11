/*




  Assigning values in a object
    * You can assign the values using either notation
    ** object['key'] = value
    ** object.key = value

  Reassigning
  * When assigning/reassigning:
    If they key:value pair exists in the object
      * they key:value pair will be overwritten
    If they key:value pair does not exist in the object
      * the key:value pair will be created
*/


// Assigning key:value pairs
// create object literal
let car = {};

// ! Note the use of the assignment operator - =
// we are assign the value at a specific key in a object to a value

// assigning using dot notation
car.model = 'challenger';
// console.log(car);

// assigning using bracket notation
car['year'] = '2016';
// car[year] = 'test'; // this throw a reference error because year is not defined

// assigning using bracket with a variable
let variable = 'make';
car[variable] = 'dodge';
// console.log(car);
// { model: 'challenger' }
// { model: 'challenger', year: '2016', make: 'dodge' }


// Reassigning existing value
// * can use either bracket or dot

// * reassign model
car.model = 'mustang';
// console.log(car);
// { model: 'mustang', year: '2016', make: 'dodge' }

// *  reassign year
car['year'] = 2023;
// console.log(car);
//{ model: 'mustang', year: 2023, make: 'dodge' }

// reassign make
car.make = 'ford';

// console.log(car);
// { model: 'mustang', year: 2023, make: 'ford' }

console.log(car);


// * assign nested objects
car.stats = {};
// console.log(car);

// console.log(car.stats);//{}

car.stats.mpg = 16;
car['stats']['hp'] = 500
// console.log(car);


console.log(car);
//e: 'ford' }
// {
//   model: 'mustang',
//   year: 2023,
//   make: 'ford',
//   stats: { mpg: 16, hp: 500 }
// }

console.log(car.stats);
// { mpg: 16, hp: 500 }

console.log(car.stats.mpg);//16
