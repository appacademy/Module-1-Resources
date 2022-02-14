# W3 D3 - Function Hoisting, IIFE

## Homework

### Function Hoisting

`Video Lecture`: 20 mins

- [Function Hoisting Lecture]
  - [Video Code](./code-it-out/function_hoisting.js)
  - Please take notes, we'll go through the code from the video together\
  with your answers

### IIFE - Immediately Invoked Function Expression

- Live Lecture
  - [Lecture Code](./code-it-out/iife.js)

### Falsy Values | [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

- Live Lecture
  - [Lecture Code](./code-it-out/falsy_values.js)

### Recursion Pt. 2

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


---

## [Morning Boost]

---

## IIFEs
```Flash Cards```: 8 minutes
- [IIFE Flash Cards]


```Quiz```: 7 minutes
- [IIFE Quiz]

--- 

## Hosting 
```Flash Cards```: 8 minutes
- [Hoisting in Javascript Flash Cards]

```Quiz```: 7 minutes
- [Function Hoisting in Javascript Quiz]

---

## Data Types
```Flash Cards```: 8 minutes
- [Falsey Values in JavaSCript Flash Cards]

```Falsey Quiz```: 7 minutes
- [Falsey Values in JavaScript Quiz]

```Primitive Quiz```: 7 minutes
- [Primitive Data Types]

```Free Response```: 5 minutes
- [First Class Objects in JavaScript Free Response]

---

## Variables
```Recall Quiz```: 7 minutes
- [Variable Quiz Recall] 

```Predicting Variable Quiz```: 7 minutes
- [Predicting Variable Evaluations Quiz]

---

## Scope and Closure
```Quiz```: 7 minutes
- [Scope Quiz Recall]

```Whiteboarding```: 20 minutes
- [WhiteBoarding Problem Closure]


<!-- Links per cohort -->

[Morning boost]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3-feb-2022-cohort-1-online/wednesday-morning-boost
[Function Hoisting Lecture]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3-feb-2022-cohort-1-online/function-hoisting-lecture
[IIFE Flash Cards]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/iife-flash-cards
[IIFE Quiz]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/iife-quiz
[Hoisting in Javascript Flash Cards]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/hoisting-in-javascript-flash-cards
[Function Hoisting in Javascript Quiz]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/function-hoisting-in-javascript-quiz
[Falsey Values in JavaSCript Flash Cards]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/falsey-values-in-javascript-flash-cards
[Falsey Values in JavaScript Quiz]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/falsey-values-in-javascript-quiz
[Primitive Data Types]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/primitive-data-types-quiz 
[First Class Objects in JavaScript Free Response]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/first-class-objects-in-javascript-free-response
[Variable Quiz Recall]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/variable-quiz-recall 
[Predicting Variable Evaluations Quiz]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/predicting-variable-evaluations-quiz
[Scope Quiz Recall]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/scope-quiz-recall
[WhiteBoarding Problem Closure]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-3---recursion--iifes--and-asynchronous-js/whiteboarding-problem-closure
<!-- Constant Links -->
