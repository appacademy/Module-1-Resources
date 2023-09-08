# Week 1 Day 2

## [Morning Boost]


## Online Lecture Etiquette

- Keep the chat focused on the material
- Avoid asking questions in the middle of the lecturer presenting
  - Lecture Questions Slack channel
  - Q&A time
- Keep microphone muted at all times, unless called on
- Make sure your name in Zoom matches your PT preferred name / pronouns.
- Participate
  - Raise your hand to answer questions posed by the lecturer
  - Use the participation thread if a general question is asked.
  - Don't be afraid of saying the wrong thing
    - A SWE is `wrong` 95% of the time

---

## Live Lecture - Before you ask

1. Is my question relevant to ***everyone***?
    - Lecture questions channel
      - Give screenshots
      - Be specific
2. Will the answer help ***today***?
    - Out of scope can derail new learners
      - DM a TA, or try the lecture question channel
3. Has this been answered, but I need a different explanation?
    - Sometimes my explanations don't stick!
      - Lecture questions channel
4. Do I need verification that I'm right?
    - Lecture questions channel
      - Share your explanation

---

## LET'S BEGIN

`Video Lecture` : 15 mins

- [How to Learn]
  - [Video Code](./code-it-out/how-to-learn.js)
- [Intro to Debugging]
  - [Video Code](./code-it-out/debugging.js)

`How to Debug`

- console.log()
  - allows us to print something to the console
  - NOTHING will print to the console if you omit
  console.log()

- Comments
  - We can 'comment out' code to see if that's why we're getting an error
  - We can put explanations next to lines of code
  so we remember what it does during our study time

- Errors
  - Your BEST FRIEND as a developer
  - Reading Errors
    - Look at the type
    - Look for a file/line number
    - If you can tell a TA where an error is occurring
    in your code and what that error message says,
    you're well on your way to being an expert
    debugger.

    ```js
    console.log('hello world');
    "hello world";

    // this is a single line comment

    /* 
    This 
    is 
    a multiline
    comment    
    */
    ```

---

## Data Types in JavaScript

`Video Lectures`: 20 mins

- [Number Type Demo]
  - [Video Code](./code-it-out/number-type.js)
- [Boolean Type Lecture]
- [Boolean Type Demo]
  - [Video Code](./code-it-out/boolean-type.js)

### The Number Type

- We can have whole numbers, decimals, and negative numbers
- Order of Operations
  - P.E.M.D.A.S.
- Modulo
  - Returns the `remainder` of a division expression

### Boolean Type

- `Not` Operator (!)
  - Reverses a boolean

    | A     |   !A   |
    |:-----:|:------:|
    | true  | false  |
    | false | true   |

- The `And` Operator (&&)
  - Only true if _both_ sides are true

    | A     | B     | A && B |
    |:-----:|:-----:|:------:|
    | true  | true  | true   |
    | true  | false | false  |
    | false | true  | false  |
    | false | false | false  |

- The `Or` Operator (||)
  - True if _either_ side is true

    | A     | B     | A \|\| B |
    |:-----:|:-----:|:------:|
    | true  | true  | true   |
    | true  | false | true   |
    | false | true  | true   |
    | false | false | false  |

---

## Variables

`Video Lectures`: 15 mins

- [Variables Demo]
  - [Video Code](./code-it-out/variables.js)

### Variable Discussion

- The `=` operator is the `assignment operator`
  - Left of the `assignment operator`
    - Creates a space in memory with that name
    - Think of it like writing a name on a box
  - Right of the `assignment operator`
    - The `value` that will be assigned to the namespace
    - Think of it like the object you put in a box.
- Three parts of a variable

  ```js
    let name; // declaration (undefined)

    name = 'Leroy' // assignment / reassignment

    let name2 = "Jenkins" // initialization

    console.log(name, name2);
  ```

---

## Comparison Operators

`Video Lectures`: 15 mins

- [Comparison Operators Demo]
  - [Video Code](./code-it-out/comparison-operators.js)

### Comparison Discussion

- Compares two elements and evaluates to a boolean

  ```js
      // Less than/Greater than
      console.log(5 < 9);      // true
      console.log(5 > 9);      // false
      console.log('a' < 'b');  // true (dictionary order)
      console.log('cat' < 'cats'); // true (dictionary order)

      // Inclusive comparison (... or equal to)
      console.log(7 <= 10);    // true
      console.log(10 >= 10);   // true 

  ```

- Equality
  - `=` is an assignment operator
  - `==` coerces data to check equality, hard to predict; **do not use**
  - `===` strict equality
  - `!==` strict NOT equal

  ```js
    // Equality === and !==
    console.log(2 === 2);    // true
    console.log(2 === 2.1);  // false
    console.log(2 !== 2.1);  // true

    // Two equality operators, === and ==
    console.log(5 === '5'); // false
    console.log(5 == '5');  // true (types are coerced)
    console.log([] == 0);   // true (can be unpredictable)
  ```

---

## Project Time

### [Asking Great Coding Questions]

- When should I ask a questions?
  - Follow 15 minute rule
  - Pretend you're a Jr. Dev getting paid $50/hr

---

### What Makes a Good Questions?

- It's Specific
- It's Clear and Concise
- It Shows that You've Put Work Into It

---

### Utilizing Online Resources and Documentation

- Google it!
- Use MDN Docs
  - Will be allowed to use MDN Docs on assessment

---
<!-- link per cohort -->
[How to Learn]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/how-to-learn
[Intro to Debugging]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/intro-to-debugging
[Number Type Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/number-type-demo
[Boolean Type Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/boolean-type-lecture
[Boolean Type Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/boolean-type-demo
[Variables Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/variables-demo
[Asking Great coding Questions]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/asking-great-coding-questions
[Comparison Operators Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/comparison-operators-demo

<!-- constant links -->
[Module-1-Resources]: https://github.com/appacademy/Module-1-Resources


## String Type

`Video Lectures`: 20 mins

- [String Type Lecture]
- [String Type Demo]

`Syntax`

- Must use single-quotes (') or double quotes (")

  ```js
  'hello'
  "hello"
  "What's up?"
  'We said "goodbye" to them.'
  // escape character (\)
  'What\'s up?' // <- valid string
  // be consistent
  'hello" <- not a valid string
  ```

`Length`

- The `.length` method returns the number of characters in a string:

  ```js
  console.log("kale".length);   // 
  console.log("potato".length); // 
  console.log("".length);       // 
  ```

`Indexing`

- `Index`: position of an element
  - **Indices start at 0**

      | index | 0 | 1 | 2 | 3 |
      |-------|---|---|---|---|
      | char  | d | o | g | s |

- Refer to a singe character of sting using `bracket notation`
  - Often a TA will say something like, "console.log the string **at** 3"
    - this means `console.log(string[3])`

  ```js
  console.log("dogs"[0]); // 
  console.log("dogs"[1]); // 
  console.log("dogs"[2]); // 
  console.log("dogs"[3]); // 
  ```

- Find the index of _the first_ given character with `indexOf`

  ```js
  console.log("doggos".indexOf("d")); // 
  console.log("doggos".indexOf("s")); // 
  console.log("doggos".indexOf("x")); //
  console.log("doggos".indexOf("g")); //
  console.log("doggos".indexOf("o")); // 
  ```

`Concatenate`

- Use `+` to concatenate (join) strings together

  ```js
  let str1 = 'hello_';
  let str2 = 'world';
  let str3 = str1 + str2
  console.log(str3); // 'hello_world' 
  ```

## Functions

`Video Lectures`: 20 mins

- [Function Lecture]
- [Average Walkthrough]

`Vocabulary`

- `function declaration` - writing a function (once)
- `function call` / `invoking` - using a function (once or many times)
- `parameter(s)` - input(s) to a function when _writing_ a function
- `argument(s)` - input(s) to a function when  _calling_ a function
- `return` what a function 'equals'

`Syntax`

- `declaring` a function
  - blueprint

    ```js
    function aName (optionalParams) {
      // may have a return value
    }
    ```

  - Some notes on return
    - sets the function equal to the return
      - By default, functions will return `undefined`
    - stops the rest of your code from running

    ```js
    function addTwo(num1, num2) {
      return num1 + num2;
      console.log("This code will not run!");
    }
    ```

- `invoking` a function
  - blueprint
  
  ```js
    aName(optionalArgs)
    // if no args
    aName();
  ```

`Why Functions?`

- Blocks of code that we can invoke multiple times
- Prevent us from having to rewrite code
- console.log() vs return `**WEE-WOO-WEE-WOO**`
      - console.log we call a SIDE EFFECT, it doesn't effect the VALUE
      - return makes the function's VALUE equal to something when it's invoked

## Conditionals

`Video Lectures`: 12 mins

- [Conditionals Demo]

`Syntax`

- a keyword: `if` `else if` `else`
- `if` & `else if` require a condition inside of parenthesis
  - these will evaluate the `truthy-ness` of what is inside of the parentheses
  - [Falsy Values]
- a `code block` to run if the conditional is `truthy` or, with `else`,\
if other conditionals are `falsy`

  ```js
  let c = 'turtle';

  if (c === 'dog') {
      console.log("I'm a dog!");
  } else if (c === "turtle") {
      console.log("I'm a turtle!");
  } else if (c === "potato") {
      console.log("I'm a potato");
  } else {
      console.log("I don't know what I am");
  }
  ```

## Loops

`Video Lectures`: 12 mins

- [Loop Demo]

`While Loop`

- Syntax
  - an `initial expression` (like a counter)
  - the `while` keyword
  - parenthesis with a conditional of when to run the loop
    - if truthy, the loop with run
  - a step case leading to the conditional being falsy.

  ```js
  let i = 0;

  while(i < 5) {
      console.log('hello world');
      i++
  }
  ```

`For Loop`

- Syntax
  - `for` keyword
  - parenthesis that has ... separated by a semi-colon
    - an `initial expression` (like a counter)
    - a conditional of when to run the loop
    - if truthy, the loop will run.
    - a step case leading to the conditional being falsy.

  ```js
  for (let i = 0; i < 5; i++) {
    console.log('hello world');
  }
  ```

## Array Data Type

`Video Lectures`: 15 mins

- [Array Lecture]

`Info to know`

- An array holds a `ORDERED LIST` of data
- We can call each item in an array an `element`
- Index starts at 0

`Syntax`

- An array is written with square brackets [] with each element separated by a comma

  ```js
  let arr = [1, "hello", false, NaN, [1, 2, 3]]
  ```

`Indexing`

- Just like strings we can get a specific index with `bracket notation`

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array[1]) // "cat"
  console.log(array[array.length - 1]) // finds last element // "turtle"
  ```

- `.indexOf(element)` - finds the index of the first given element in an\
 array. If not found, returns -1.

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.indexOf("dog")) // 0
  console.log(array.indexOf("elephant")) // -1
  ```

`Properties / Methods`

- `.length` - returns the number of elements in an array

  ```js
  let array = ["dog", "cat", "turtle"]

  console.log(array.length) // 3
  ```

- `.concat(arr)` - allows us to join arrays together.

  ```js
  let array1 = [1, 2, 3]
  let array2 = [4, 5, 6]
  let array3 = [7]

  let array4 = array1.concat(array2, array3)

  console.log(array4) // [1, 2, 3, 4, 5, 6, 7]
  ```

`More Methods`

Other common methods you will use often: (Not needed _today_, but why not\
 take a look at them on MDN)

- Array.prototype.push
- Array.prototype.pop
- Array.prototype.shift
- Array.prototype.unshift
- Array.prototype.slice
- Array.prototype.splice

<!-- Links to change for each cohort -->
[Morning Boost]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/tuesday-morning-boost
[String Type Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/string-type-lecture
[String Type Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/string-type-demo
[Function Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/function-lecture
[Average Walkthrough]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/average-walkthrough
[Conditionals Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/conditionals-demo
[Loop Demo]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/loops-demo
[Array Lecture]: https://open.appacademy.io/learn/js-py---sep-2022-cohort-1-online/week-1---intro-to-javascript/array-lecture

<!-- Constant Links -->
[Falsy Values]: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
