# W2D1

## [Morning Boost]

___

## Running Code

`Video Lectures` - On your own

- [Basic Terminal Navigation]
- [Navigating in VS Code]
- [Running NodeJS]

`Basic Commands`

- ls
  - See all files and folders in the directory(folder) you're currently in
- cd `<folder>`
  - Navigate to a directory(folder)
- mkdir `<folder_name>`
  - Make a directory(folder) in whatever directory(folder) you're in
- touch `<file_name>`
  - Create a file in whatever directory(folder) you're currently in
- pwd
  - Shows you path to the current directory(folder) you're in
- cd ../
  - Travel upwards
- cd ./
  - Don't travel

`Using Node`

- Open a node REPL with `node`
  - exit with ctrl+c (twice)
- Use `node <filename>` to run a file with node

## Array Methods

`Video Lectures`: 45 mins

- [forEach Demo]
- [map Demo]
- [filter Demo]
- [reduce Demo]

`forEach`

  ```js
  /* 
  Write a function called hello that intakes an 
  array of names and prints "Hello," plus the name, for
  each name. Must use .forEach()

  hello(['Mylo', 'Buster']) prints 'Hello, Mylo', 'Hello, Buster'
  */
  ```

`map`

  ```js
  /* 
  Write a function called timesTwo that intakes an
  array of numbers and returns a new array where all 
  of the numbers are multiplied by 2. You must use .map()

  timesTwo([1, 2, 3]) => [2, 4, 6]
  timesTwo([-1, 6, 0]) => [-2, 12, 0]
  */
  ```

`filter`

  ```js
  /* 
  Write a function called evens that intakes an
  array of numbers and returns a new array of only the
  even numbers from the original array. You must use
  .filter()

  evens([1, 2, 3]) => [2]
  events([42, 44, 45]) => [42, 44]
  */
  ```

`reduce`

  ```js
  /* 
  Write a function called sum that intakes an
  array of names and returns a string of "Names: " with
  all of the names attached after. Must use the .reduce()

  reduce(['Mylo']) => Names: Mylo 
  reduce(['Rick', 'Morty']) => Names: Rick Morty 
  */
  ```

## Mocha

- Mocha is the testing suite we will use to test our code
  - let's download today's project and see how it works

<!-- Links per cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/monday-morning-boost
[Basic Terminal Navigation]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/basic-terminal-navigation
[Navigating in VS Code]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/navigating-in-vs-code
[Running NodeJS]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/running-nodejs
[forEach Demo]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/for-each-demo
[map Demo]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/map-demo
[filter Demo]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/filter-demo
[reduce Demo]: https://open.appacademy.io/learn/js-py---apr-2021-cohort-1-online/week-2-apr-2021-cohort-1-online/reduce-demo

<!-- Constant Links -->
