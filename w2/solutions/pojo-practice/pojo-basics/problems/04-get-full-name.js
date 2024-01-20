/***********************************************************************
Write a function `getFullName(person)` that takes in an person object
and returns a string containing their full name.


Examples:
let p1 = {firstName: 'John', lastName: 'Doe'};
getFullName(p1); // => 'John Doe'
let p2 = {firstName: 'Charlie', lastName: 'Brown', age: 9};
getFullName(p2); // => 'Charlie Brown'
***********************************************************************/

function getFullName(person) {
  //!!START
  let name = person.firstName + " " + person.lastName;
  return name;
  //!!END
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = getFullName;
