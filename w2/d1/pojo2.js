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


