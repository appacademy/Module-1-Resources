/*



  Assigning values in a object
    * You can assign the values using either notation
    * object['key'] = value
    * object.key = value

  Reassigning
    * When assigning/reassigning
      If the key:value pair exists in the object
        * the key:value pair will be over written
      If the key:value pair does not exists in the object
        * the key:value pair is created

*/

// Assigning key:value pairs
// * Create object literal
let car = {};

// ! note the use of the assignment operator
// we are assigning the value at a specific key ina object to be a value

// * assign using dot notation
// key name is name model
// value is challenger
car.model = 'challenger';
// accessing
console.log(car);// { model: 'challenger' }
console.log(car.model)// challenger
console.log(car['model'])// challenger

// * assign using bracket notation
car['year'] = 2016;
console.log(car);// { model: 'challenger', year: 2016 }
console.log(car.year);// 2016

// * assigning using bracket notation with a variable
let variable2 = 'make';
car[variable2] = 'dodge';
// so were saying is add to the object as a key, whatever variable2 evaluates to. In this case 'make'; assign to make the value of 'dodge;
console.log(car);// { model: 'challenger', year: 2016, make: 'dodge' }


// Reassigning existing values

// * can use either dot or bracket notation
console.log('before: ',car);

// * reassign model
car.model = 'mustang';
console.log(car);// { model: 'mustang', year: 2016, make: 'dodge' }

// * reassign year
car['year'] = '2020';
console.log(car);// { model: 'mustang', year: '2020', make: 'dodge' }

// * reassign make
car.make = 'ford';
console.log(car);// { model: 'mustang', year: '2020', make: 'ford' }

// assign nested object
car.stats = {};
console.log(car);// { model: 'mustang', year: '2020', make: 'ford', stats: {} }

// populate the nested object
// use either dot or bracket
// populate nested obj with mpg of 16, horsepower: 777

// * dot notation
car.stats.mpg = 16
// * bracket notation
car['stats']['horsepower'] = 777;

console.log(car);
/*
{
  model: 'mustang',
  year: '2020',
  make: 'ford',
  stats: { mpg: 16, horsepower: 777 }
}
*/

let stats1 = car.stats;
console.log(stats1);// { mpg: 16, horsepower: 777 }
console.log(stats1.mpg)// 16

car.nestedArr = [1,2,3];
// console.log(car);
car.nestedArr.push(4);
// console.log(car);

/*


  Deleting a values
    * use the delete operator
    * Just provide they key
      * key:value pair will be deleted
*/


console.log('before delete: ', car);

// delete operator followed by object.key
delete car.make

console.log('after: ', car);// year:2022 is gone; it has been deleted
