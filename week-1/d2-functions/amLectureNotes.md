# `String Type`
- Single quotes or Double quotes
  - Be consistent
    - 'hello'
    - "hello"
    - "hello' -> BAD!
- Length
  - The `.length` method returns the number of characters in a string:
    - `'code'.length` -> 4
- Indexing Strings
  - Think of an "`Index`" as the positioning of elements 
  - Indices start at 0

# `Functions`
- input (aka Arguments), output (aka return value), 
- "Invoking a function" --> calling your function into action
- blocks of code that we can invoke multiple times
- prevent us from having to rewrite code

  ### The `return` keyword
  - By default, js functions will return `undefined`.
  - This, we need to use the `return` keyword:
    ```js
    function addTwo(num1, num2) {
      return num1 + num2;
    }
    console.log(addtwo(1, 2)); // 3
    ```
  - The `return` keyword stops executing code, nothing else below is run
    ```js
