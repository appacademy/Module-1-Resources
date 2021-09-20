# W3 D3 - Function Hoisting, IIFE

## [Morning Boost]

## Function Hoisting

`Video Lecture`: 20 mins

- [Function Hoisting Lecture]
  - [Video Code](./code-it-out/function_hoisting.js)
  - Please take notes, we'll go through the code from the video together\
  with your answers

## IIFE - Immediately Invoked Function Expression

- Live Lecture
  - [Lecture Code](./code-it-out/iife.js)

## Falsy Values | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- Live Lecture
  - [Lecture Code](./code-it-out/falsy_values.js)

## Recursion Pt. 2

- Default Parameters

```js
  const hello = (greeting = "Hello") => console.log(greeting);
  hello();
  hello("Howdy, y'all");

```

With RECURSION #powerful

```js
const mapper = (arr, cb, res = []) => {
  if (!arr.length) return res;
  const el = arr[0];
  res.push(cb(el));
  return mapper(arr.slice(1), cb, res);
};

console.log(mapper([1, 2, 3], (x) => x * 200)); // [ 200, 400, 600 ]
```

- Today you'll work on quizzes over the lecture content, then you'll be\
practicing more recursion. Recursion is a tough concept so make sure if you're\
working on a problem for more than 15 mins, call in a TA.

<!-- Links per cohort -->

[Morning boost]: https://open.appacademy.io/learn/js-py---spet-2021-cohort-1-online/week-3-spet-2021-cohort-1-online/wednesday-morning-boost
[Function Hoisting Lecture]: https://open.appacademy.io/learn/js-py---spet-2021-cohort-1-online/week-3-spet-2021-cohort-1-online/function-hoisting-lecture

<!-- Constant Links -->
