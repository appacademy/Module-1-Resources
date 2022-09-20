# W2D1

## [Morning Boost]

## Arrow Functions

`Video Lectures and Quiz`: 10 mins

- [Arrow Functions Demo]

`Overview`

- Arrow Functions are always anonymous

`Syntax`

- Parenthesis and/or single parameter
- An 'arrow' `=>`
- Multiline?
  - Code block
  - Optional `return`
- Single Line?
  - `implicit return`
- Named?
  - Assign to a variable

  ```js
  // Multiline
  let printName = (name) => {
    let str = 'My name is '
    console.log(str + name);
  };

  printName('Bill');
  // Single Line
  let returnName = name => 'My name is ' + name;

  console.log(returnName('Jojo'));

`Arrow Functions Discussion`

---
## Objects (Plain Old JavaScript Objects [POJO])
`Video Lectures`: 8 minutes

- [Object Lecture]

`Review`

```js
let obj = {
  name: "Mylo",
  age: 1000,
  game: {
    name: "Dota 2",
    position: 5,
    favHero: "Dazzle"
  }
}

//How would I print Mylo's name from the object?
//
//How would I add his location, Chicago?
//
//How would I change his age to 1001?
```

`Dot notation`

- Since keys are usually strings, and we'd hate to have to write [''] all the time\
we have dot notation.

```js
let obj = {
  first: 'a',
  second: 'b',
  third: 'c'
}

console.log(obj.first, obj['first']) // a a
```

`Using a variable`

```js
let someVariable = "firstName";
let some = "second";
let variable = "Name";
let time = "FrEQUENcY";

let obj = {
  firstName: "Oscar",
  secondName: "Mayer",
  frequency: "everyday",
};

console.log(obj[someVariable]); // Oscar
console.log(obj[some + variable]); // Mayer
console.log(obj[time.toLowerCase()]);
```

`Checking if a key exists`

- obj[key] !== undefined
- key in obj

`Iterating over an Object`

- for in loop
- Object.keys
- Object.values
- Object.entries

`Why objects`

- Instant look up time.
- Allows us a term/definition (key-value)
- Groups `like` information together



- Live Lecture

<!-- Links per cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/monday-morning-boost
[Arrow Functions Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---objects--callbacks--scope--and-closure/arrow-functions-code-demo
[Arrow Functions Quiz]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---objects--callbacks--scope--and-closure/arrow-functions-quiz
[Object Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---objects--callbacks--scope--and-closure/object-lecture
[map Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/map-demo
[filter Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/filter-demo
[reduce Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/reduce-demo

<!-- Constant Links -->
