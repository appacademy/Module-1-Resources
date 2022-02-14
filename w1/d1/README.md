# `W1D1 - Welcome!`

- Welcome Lecture
- Morning Lecture
- Solo Work!

---

## Lecture Notes

- All of the lecture notes and code from the videos can be found in the\
 [Module-1-Resources] repository!

How to use:

- `cd` - change directory
- `ls` - list files/folders
- `code .` - opens vsCode

1. Run the following command (Once)

    ```bash
    curl -s https://raw.githubusercontent.com/appacademy/Module-1-Resources/main/additional_resources/scripts/folder_structure.sh | bash
    ```

2. Restart your terminal
3. Every morning run...

    ```bash
    aa_update
    ```

4. Follow prompts
5. Run `aa_update` again after lecture to get live lecture notes

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
[How to Learn]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/how-to-learn
[Intro to Debugging]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/intro-to-debugging
[Number Type Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/number-type-demo
[Boolean Type Lecture]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/boolean-type-lecture
[Boolean Type Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/boolean-type-demo
[Variables Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/variables-demo
[Asking Great coding Questions]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/asking-great-coding-questions
[Comparison Operators Demo]: https://open.appacademy.io/learn/js-py---feb-2022-cohort-1-online/week-1-feb-2022-cohort-1-online/comparison-operators-demo

<!-- constant links -->
[Module-1-Resources]: https://github.com/appacademy/Module-1-Resources
