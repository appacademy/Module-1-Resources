// Multiline
let printName = (name) => {
  let str = 'My name is '
  console.log(str + name);
};

printName('Mylo');
// Single Line
let returnName = (name) => 'My name is ' + name;

console.log(returnName('Mylo'));

// Anonymous callback
let arr = [1, 2, 3];

let addOne = arr.map((num) => num + 1);

console.log(addOne);
