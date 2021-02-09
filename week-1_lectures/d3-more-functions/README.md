# Week 1 Day 2

## Morning Boost

- [Morning Boost]

## Function Expression Syntax

`Video Lectures`

- [Function Expression Syntax Demo]

`First Class Objects`

- First Class Objects can be
  1. Stored in a variable, object, or array (objects later)
  2. passed as an argument to a function (next week - callback)
  3. returned from a function (next week - callback)

- Functions are first class objects!

    ```js
    // examples of what can be saved to a variable

    let name = 'Alvin'
    let age = 1000;
    let getAvg = function(num1, num2) {
        return (num1 + num2)/2
    };

    let anotherAvg = getAvg;
    console.log(name, age, anotherAvg(4, 2)) // "Alvin", 1000, 3

    const arr = [getAvg, name, age];
    const avg2 = arr[0];

    console.log(avg2(6, 4)); // 5
    ```

`Syntax`

- variable assignment (`name`)
- `function` keyword
- parenthesis with the function's `parameter(s)`
- `code block`
- `semi-colon`

    ```js
    // function declaration syntax
    function sayHello1() {
    console.log('hello');
    console.log('bye');
    }
    // function expression syntax
    let sayHello2 = function() {
    console.log('hello');
    console.log('bye');
    };
    ```

`Code it out`

- [sum]

## Mutability

`Video Lectures`

- [Function Expression Syntax Demo]

`Immutable Types`

- Cannot be mutated (changed)
- Examples
  - Number, e.g. `122`
  - `NaN`
  - `undefined`
  - `null`
  - String, e.g. `abc`

  ```js
  let str = abc

  str[1] = 'x';

  console.log(str) // 'abc';
  ```

- re-assignable != mutable

    ```js
    let str = 'abc';
    str += 'd'; // str = str + 'd';
    console.log(str) // 'abcd'
    ```

`Mutable Types`

- Can be mutated
- Examples
  - Arrays, e.g. `['a', 'b', 'c']`
  - Objects (we will see this later)

      ```js
      let arr = ["a", "b", "c"];

      arr[1] = "x";

      console.log(arr) // [1, 2, 3];
      ```

## Array Methods

`Array#push` | MDN: [Array.prototype.push]

- Syntax

  ```js
   arr.push(ele1, ele2) // how ever many elements you want to add
  ```

- Description
  - Adds one or more elements to the end of an array and returns the new length of the array.
  - **mutates the array it is called on**
- Parameters
  - The element(s) to add to the end of the array.
- Return value
  - The new length property of the object upon which the method was called.

    ```js
    let animals = ["elephant", "bear", "dog"];

    animals.push("mouse") // appends "mouse"
    const animalLength = animals.push("cat"); // appends "cat" returns length

    console.log(animals, animalLength); // ["elephant", "bear", "dog", "mouse", "cat"], 5
    ```

`Array#pop` ||  MDN: [Array.prototype.pop]

- Description
  - Removes the last element from an array and returns that element. This method changes the length of the array.
  - **mutates the array it is called on**
- Parameters
  - None
- Return value
  - The removed element from the array; undefined if the array is empty.

```js
let dogs = ['Fido', 'Rover'];
debugger

dogs.pop(); // removes Rover from array
debugger

let lastDog = dogs.pop() // removed Fido from array, returns Fido
debugger

lastDog = dogs.pop()
```

`Array.prototype.shift` or `Array#shift`

- doesn't take any arguments and removes the first element in the array
- mutates the array it is called on
- returns the removed element

```javascript
let cats = ['Paprika', 'Whiskers', 'Garfield'];

let firstCat = cats.shift();

console.log(firstCat); // 'Paprika'
console.log(cats); // ['Whiskers', 'Garfield']
```

`Array.prototype.unshift` or `Array#unshift`

- takes a single argument and adds the argument to the beginning of the array
- mutates the array it is called on
- returns the length of the mutated array

```javascript
let cats = ['Whiskers', 'Garfield']

cats.unshift('Sennacy');

console.log(cats); // ['Sennacy', 'Whiskers', 'Garfield']
console.log(beforeUnshift === cats);
```

## [Nested Loops]

```javascript
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 4; j++) {
    console.log(i, j);
  }
}
```

## [Pairs In Arrays]

- Nested loops with arrays

### Pairs In Arrays

![Pairs In Arrays](./images/pairs_in_arrays.png)

### Unique Pairs In Arrays

![Unique Pairs In Arrays](./images/unique_pairs_in_arrays.png)

[Morning Boost]: https://open.appacademy.io/learn/js-py---feb-2021-cohort-1-online/week-1-feb-2021-cohort-1-online/wednesday-morning-boost
[Function Expression Syntax Demo]: https://open.appacademy.io/learn/js-py---feb-2021-cohort-1-online/week-1-feb-2021-cohort-1-online/function-expression-syntax-demo
[sum]: ./snippets/sum.js
[Array.prototype.push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[Array.prototype.pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
