# `W1D1 - Welcome!`

- Welcome Lecture
- Morning Lecture
- Solo Work!

---

## Lecture Notes

- All of the lecture notes and code from the videos can be found in [Module-1-Resources] repository!

- Link to today's notes: `https://github.com/appacademy/Module-1-Resources/tree/main/week1/d1-expressions`

---

## Typical Lecture Format

- Morning boost
- Watch videos
- Video Discussion
- `Code it out`

---

## Online Lecture Etiquette

- Keep the chat focused on the material
- Avoid asking questions in the middle of the lecturer presenting
  - Lecture Questions Slack channel
  - Q&A time
- Keep microphone muted at all times, unless asked to speak

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

## Participate

- Raise your hand to answer questions posed by the lecturer
- Use the participation thread if a general question is asked.
- Don't be afraid of saying the wrong thing
  - SWE is being `wrong` 95% of the time

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

## Data Types in JavaScript

`Video Lectures`

- [Number Type Demo]
- [Boolean Type Lecture]
- [Boolean Type Lecture]

---

## `The Number Type`

- We can have whole numbers, decimals, and negative numbers
- PEMDAS
  - Order of Operations
- Modulo
  - Returns the `remainder` of a division expression

---

## `Boolean Type`

- `Not` Operator (!)
  - Flips the value of a boolean
  - `!true` -> `false` instead of `true`

- The "And" Operator
  - Only true if both sides are true
  - `true && false` -> false

| A     | B     | A && B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | false  |
| false | true  | false  |
| false | false | false  |

- The `Or` Operator (||)
  - True if either side is true
  - `true || false` -> true

| A     | B     | A || B |
|:-----:|:-----:|:------:  |
| true  | true  | true     |
| true  | false | true     |
| false | true  | true     |
| false | false | false    |

---

## `Comparison Operators`

    ```js
        // Less than/Greater than
        console.log(5 < 9);      // true
        console.log(5 > 9);      // false
        console.log('a' < 'b');  // true (dictionary order)
        console.log('cat' < 'cats'); // true (dictionary order)

        // Inclusive comparison
        console.log(7 <= 10);    // true
        console.log(10 >= 10);   // true 

        // Equality === and !==
        console.log(2 === 2);    // true
        console.log(2 === 2.1);  // false
        console.log(2 !== 2.1);  // true

        // Two equality operators, === and ==
        console.log(5 === '5'); // false
        console.log(5 == '5');  // true (types are coerced)
        console.log([] == 0);   // true (can be unpredictable)

        // https://stackoverflow.com/questions/359494/which-equals-operator-vs-should-be-used-in-javascript-comparisons
    ```
---

## `Variables (with 'let' keyword)`

    ```js
        // initialization:
        //   - declaration, creating the space for the variable
        //   - assignment, giving a value to the variable

        let state;  // declaration using javascript 'let'
        console.log(state);
        state = 'California'; // assignment
        console.log(state);

        let city = 'Sacramento'; // both (i.e. initialized in one line)
        console.log(city);

        // more assignment
        let age = 5;
        console.log(age); // 5
        age + 5;          // no assignment used, i.e. change not permanent
        console.log(age); // 5
        age = age + 5;    // assignment is used, change is permanent
        console.log(age); // 10
        age += 5;         // assignment is used, this is shorthand
        console.log(age); // 15

        // Using ++ and -- 
        age++;
        console.log(age); // 16
        age--;
        console.log(age); // 15
    ```

---

### Asking Great Coding Questions

- When should I ask a questions?
  - Follow 15 minute rule
  - Getting paid 50$/hr

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
[How to Learn]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-1-mar-2021-cohort-1-online/how-to-learn
[Intro to Debugging]: https://open.appacademy.io/learn/js-py---mar-2021-cohort-1-online/week-1-mar-2021-cohort-1-online/intro-to-debugging

<!-- constant links -->
[Module-1-Resources]: https://github.com/appacademy/Module-1-Resources
