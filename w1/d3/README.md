# Week 1 Day 3

## Morning Boost

- [Morning Boost]

## Function Expression Syntax

`Video Lectures`: 12 mins

- [Function Expression Syntax Demo]

`First Class Functions`

- First Class Functions can be
  1. Stored in a variable
  2. passed as an argument to a function (next week)
  3. returned from a function (next week)

- Functions are first class objects!

    ```js
    let name = 'Alvin'
    let age = 1000;
    let getAvg = function(num1, num2) {
        return (num1 + num2)/2
    };

    console.log(name, age, getAvg(4, 2)) // "Alvin", 1000, 3

    const arr = [getAvg, name, age];
   
    console.log(arr[0](6,4)); // 5
    ```

`Function Expression Syntax`

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

## Mutability

`Video Lectures`: 9 mins

- [Mutability Demo]

`Mutable Types`

- Can be mutated (changed)
- Examples
  - Objects (we will see this later)
    - Arrays, e.g. `['a', 'b', 'c']`

      ```js
      let arr = ["a", "b", "c"];

      arr[1] = "x";

      console.log(arr) // ["a", "x", "c"];
      ```

`Immutable Types`

- Cannot be mutated (changed)
- Examples
  - Number, e.g. `122`
  - `NaN`
  - `undefined`
  - `null`
  - String, e.g. `abc`

  ```js
  let str = "abc"

  str[1] = 'x';

  console.log(str) // 'abc';
  ```

- re-assignable != mutable

    ```js
    let str = 'abc';
    str += 'd'; // str = str + 'd';
    console.log(str) // 'abcd'
    ```

## Array Methods

`Video Lectures`: 20 mins

- [Array Push, Pop, Shift, Unshift Demo]

`Array#push` | MDN: [Array.prototype.push]

- Syntax

  ```js
  arr.push(ele1, ele2) // n amount of elements
  ```

- Description
  - Adds one or more elements to the _end_ of an array and returns the new\
   length of the array.
  - **mutates the array it is called on**
- Arguments
  - The element(s) to add to the end of the array.
- Return value
  - The new length property of the object upon which the method was called.

    ```js
    let animals = ["ant", "bear", "dog"];

    // appends "cat" to animals && returns length
    let animalLength = animals.push("cat"); 

    console.log(animals); // ["ant", "bear", "dog", "cat"]
    console.log(animalLength); // 4
    ```

`Array#pop` |  MDN: [Array.prototype.pop]

- Syntax

  ```js
  arr.pop()
  ```

- Description
  - Removes the _last_ element from an array and returns that element. \
  This method changes the length of the array.
  - **mutates the array it is called on**
- Arguments
  - None
- Return value
  - The removed element from the array; undefined if the array is empty.

  ```js
  let dogs = ['Fido', 'Rover'];

  //removes Rover from dogs and returns Rover
  let lastDog = dogs.pop();

  console.log(dogs); // ['Fido']
  console.log(lastDog); // 'Rover'
  ```

`Array#unshift` | MDN: [Array.prototype.unshift]

- Syntax

  ```js
  arr.unshift(ele1, ele2) // n amount of elements
  ```

- Description
  - Adds one or more elements to the _beginning_ of an array and returns the\
   new length of the array.
  - **mutates the array it is called on**
- Arguments
  - The element(s) to add to the beginning of the array.
- Return value
  - The new length property of the object upon which the method was called.

  ```js
  let cats = ['Whiskers', 'Garfield']

  // adds Jasper to cats && returns length
  let catsLength = cats.unshift('Jasper');

  console.log(cats); // ['Jasper', 'Whiskers', 'Garfield']
  console.log(catsLength) // 3
  ```

`Array#shift` | MDN: [Array.prototype.shift]

- Syntax

  ```js
  arr.shift()
  ```

- Description
  - Removes the _first_ element from an array and returns that element. \
  This method changes the length of the array.
  - **mutates the array it is called on**
- Arguments
  - None
- Return value
  - The removed element from the array; undefined if the array is empty.

  ```js
  let cats = ['Paprika', 'Whiskers', 'Garfield'];
  //removes 'Paprika' from cats and returns 'Paprika'
  let firstCat = cats.shift();

  console.log(firstCat); // 'Paprika'
  console.log(cats); // ['Whiskers', 'Garfield']
  ```

## Nested Loops

`Video Lectures`: 30 mins

- [Nested Loops] - THIS ONE FIRST
- [Pairs in Array]
- [Unique Pairs in Array]

`Nested Loops`

```js
for (let i = 0; i < 4; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}
```

`Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik']

for(let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for(let j = 0; j < dogs.length; j++) {
    let dog2 = dogs[j]
    console.log(dog1, dog2)
  }
}
```

![Pairs In Arrays]

`Unique Pairs In Arrays`

```js
let dogs = ['belka', 'strelka', 'laika', 'dezik']

for(let i = 0; i < dogs.length; i++) {
  let dog1 = dogs[i];
  for(let j = i + 1; j < dogs.length; j++) {
    let dog2 = dogs[j]
    console.log(dog1, dog2)
  }
}
```

![Unique Pairs In Arrays]

<!-- Change per cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/wednesday-morning-boost
[Function Expression Syntax Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/function-expression-syntax-demo
[Mutability Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/mutability-demo
[Array Push, Pop, Shift, Unshift Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/array-push--pop--shift--unshift-demo
[Nested Loops]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/nested-loops
[Pairs in Array]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/pairs-in-array
[Unique Pairs in Array]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/unique-pairs-in-array
<!-- Constant Links -->
[Array.prototype.push]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
[Array.prototype.pop]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
[Array.prototype.shift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
[Array.prototype.unshift]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
[Unique Pairs In Arrays]: ./images/unique_pairs_in_arrays.png
[Pairs In Arrays]: ./images/pairs_in_arrays.png
