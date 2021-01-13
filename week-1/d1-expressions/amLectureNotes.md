# `W1D1 - Welcome!`
    - Welcome Lecture
    - Morning Lecture
    - Solo Work!

# `How To Learn`
- Passive
    - Readings, Flashcards, Videos, Discussions
- Active
    - Coding, Quizzes, Assessments
- Desirable Difficulty
    - You should `feel challenged` throughout the course
    - At the same time, we aren't asking you to build a full app this week
    - Difficulty and complexity will increase throughout the course
-  Repetition:
    - You'll notice repeating information throughout the course...
    - `This is intentional! `

<br></br>
<br></br>

# `What is 'Debugging'?`
- The process of both identifying an error (aka 'Bug') in your code 
as well as the process of fixing it. 

<br></br>
<br></br>

# `Data Types in Java Script`
- Even broader, all programming languages have ways of identifying types of information, or data. 
- In JS, data falls into the following general categories:
  - `Numbers` - (1, 2, 3, ... )
  - `Booleans` - true / false
  - `Strings` - "Hello World!"
  - `Arrays` - [ 0, 1, 2 ]
  - `Objects` - { key1: "value1", key2: "value2" }
- Today we'll talk about the first two above. 

<br></br>
<br></br>

# `The Number Type`  
- NOTE: `console.log` is a function in javascript which 'prints' or 'logs' the return value of the inputted code to your console.

```javascript
    console.log(1 + 1);   // 2
    console.log(2.5 - 2); // 0.5
    console.log(3 * 4);   // 12 
    console.log(10 / 2);  // 5

    // Modulo (%) calculates remainder 
    console.log(25 % 5); //5r0 -> 0
    console.log(26 % 5); //5r1 -> 1
    console.log(27 % 5); //4r2 -> 2
```
<br></br>
<br></br>

# `Boolean Type`
- What is it?
    - `true` or `false` 

- Not Operator (!)
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


- The "Or" Operator (||)
    - True if either side is true
    - `true || false` -> true
    

| A     | B     | A \|\| B |
|:-----:|:-----:|:------:|
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |
    
<br></br>
<br></br>

# `Comparison Operators`

```javascript
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
```
<br></br>
<br></br>

# `Variables (with 'let' keyword)`

```javascript
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
