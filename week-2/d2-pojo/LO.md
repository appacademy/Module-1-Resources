## Review of Week 2 Day 2 Learning Objectives

## POJOs
### 1. Label variables as either Primitive vs. Reference


Javascript considers most data types to be 'primitive', these data types are immutable, and are passed by value. The more complex data types: Array and Object are mutable, are considered 'reference' data types, and are passed by reference.


 * Boolean - Primitive
 * Null - Primitive
 * Undefined - Primitive
 * Number - Primitive
 * String - Primitive
 * Array - Reference
 * Object - Reference
 * Function - Reference

### 2. Identify when to use . vs [] when accessing values of an object

```js
let obj = { "one": 1, "two": 2 };

// Choose the square brackets property accessor when the property name is determined at
// runtime, or if the property name is not a valid identifier
let myKey = "one";
console.log(obj[myKey]);

// Choose the dot property accessor when the property name is known ahead of time.
console.log(obj.two);
```

### 3. Write an object literal with a variable key using interpolation

```js
let keyName = "two";

// If the key is not known, you can use an alternative `[]` syntax for
// object initialization only
let obj2 = { [keyName]: 2 }
console.log(obj2);
```

### 4. Use the obj[key] !== undefined pattern to check if a given variable that contains a key exists in an object

```js
function doesKeyExist(obj, key) {
  // obj[key] !== undefined
  // or:
  return key in obj;
}

let course = { bootcamp: 'App Academy', course: 'Bootcamp Prep' }
console.log(doesKeyExist(course, 'course')); // => true
console.log(doesKeyExist(course, 'name')); // => false
```
### 5. Utilize Object.keys and Object.values in a function

```js
function printKeys(object) {
  return Object.keys(object);
}

function printValues(object) {
  return Object.values(object);
}

console.log(printKeys({ dog: "Strelka", dog2: "Belka" }));
console.log(printValues({ dog: "Strelka", dog2: "Belka" }));
```
### 6. Iterate through an object using a for in loop


```js
let player = { name: "Sergey", skill: "hockey" };

for (let key in player) {
   console.log(key, player[key]);
}

console.log(Object.entries(player));
```
### 7. Define a function that utilizes ...rest syntax to accept an arbitrary number of arguments

```js
function restSum(...otherNums) {
  let sum = 0;
  console.log(otherNums);
  otherNums.forEach(function (num) {
    sum += num;
  });

  return sum;
}

console.log(restSum(3, 5, 6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0
```

### 8. Use ...spread syntax for Object literals and Array literals

```js
let numArray = [1, 2, 3];
let moreNums = [...numArray, 4, 5, 6]

console.log(moreNums);

let shoe = { color: "red", size: 10 };
let newShoe = { ...shoe, brand: "Nike", size: 12 };
console.log(newShoe);
newShoe.color = "black";
console.log(newShoe);

console.log(shoe);

```

### 9. Destructure an array to reference specific elements

```js
let arr = ['one', 'two', 'three'];

let [first] = arr;
console.log(first);
```

### 10. Destructure an object to reference specific values

```js
let me = {
    name: "Ian",
    instruments: ['bass', 'synth', 'guitar'],
    siblings: {
        brothers: ['Alistair'],
        sisters: ['Meghan']
    }
}

let { name, instruments: musical_instruments, siblings: {sisters}} = me;

console.log(name);
console.log(musical_instruments);
console.log(sisters);

```

### 11. Write a function that accepts a string as an argument and returns an object representing the count of each character in the array

```js
function charCount(inputString) {

    let res = inputString.split("").reduce(function(accum, el) {
        if (el in accum) {
            accum[el] = accum[el] + 1;
        } else {
            accum[el] = 1;
        }
        return accum;
    }, {})
    return res;

}

console.log(charCount('aaabbbeebbcdkjfalksdfjlkasdfasdfiiidkkdingds'));
``