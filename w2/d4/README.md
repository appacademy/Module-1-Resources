# W2D4 - Scope, Closures, Arrow Functions

## [Morning Boost]

`Vocabulary`

- Scope | MDN: [Scope]
  - The set of variables that we have access to at a given location.
- Closure | MDN: [Closures]
  - An inner function that uses or changes variables that were initialized\
  in an outer function.

---

## Scope

`Video Lectures`: 45 minutes

- [Scope Lecture]
  - [Code Along](./code-it-out/scope_lecture.js)
- [Variables & Scope Code Demo Part 1]
  - [Code Along](./code-it-out/variable_scope1.js)
- [Variables & Scope Code Demo Part 2]
  - [Code Along](./code-it-out/variable_scope2.js)

`Overview`

- Three types of scope
  - `Global` - Variables defined in the global scope.
  - `Local or Function` - Global, Parameters, Variables in the function
  - `Block`- Global, Local, Variables in the block

  ```js
  let car = 'vroom';
  function makeSounds(dogSound){
    let cow = 'moo';
  
    if (true) {
      let turkey = 'gobble';
      
      for (let i = 0; i < 2; i++) {
      console.log(car, dogSound, cow, turkey, i)
      }
    }
  }
  makeSounds('woof');
  ```

- Scope Chaining
  - JS will search through scopes, working upwards until it finds a match

  ```js
  let hungry = false;

  function sayHungry(){
    let hungry = true;
    if(hungry) {
      console.log("I'm hungry!");
    } else {
      console.log("I'm coding");
    }
  }

  sayHungry();
  ```

`Let, Const, and Var`

  1. Let is block scoped and CAN be reassigned.
  2. Const is also block scoped, but CANNOT be reassigned.
    1. reassign !== mutable
  3. Var is function scoped, and CAN be reassigned.

  |  | declaration | assignment | initialization | scope | hoisting |
  |:-:|:-:|:-:|:-:|:-:|:-:|
  | var | var x; | x = 'Toby'; | var x = 'Tom'; | function | declared; not assigned |
  | let | let x; | x = 'Toby'; | let x = 'Tom'; | block | Temporal Dead Zone |
  | const |  | | const x = 'Tom'; | block | Temporal Dead Zone |

---

## Closures

`Video Lectures`: 30 mins

- [Closure Lecture]
  - [Code Along](./code-it-out/closures_lecture.js)
- [Closure Code Demo]
  - [Code Along](./code-it-out/closure_code_demo.js)

`Overview`

- We can manipulate a Higher Order Functions' variables with a closure
- We can create multiple "instances" of a function's variables with closures

```js
function HOF (){
  let count = 0;
  return function(num) {
      count+=num
      console.log(count)
  }
}

let JanToJune = HOF();
let JulyToDec = HOF();

JanToJune(0);
JulyToDec(0);
```

---

<!-- Links for each cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/thursday-morning-boost
[Scope Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/scope-lecture
[Variables & Scope Code Demo Part 1]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/variables---scope-code-demo-part-1
[Variables & Scope Code Demo Part 2]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/variables---scope-code-demo-part-2
[Closure Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/closure-lecture
[Closure Code Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/closure-code-demo
[Arrow Functions Code Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-2---intro-to-javascript/arrow-functions-code-demo

<!-- Constant Links -->
[Scope]: https://developer.mozilla.org/en-US/docs/Glossary/Scope
[Closures]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
