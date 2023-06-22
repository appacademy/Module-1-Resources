/*


      Closures
      - when a inner function uses or changes the values of the outer function
      - when a parent function cant access data in the child, but the child can access the parent
      - closure have access to any variables withing its scope as well as any outer functions
      - a closure will keep references to all its variables defined even if its outer function has returned
      - inner function is closing over the outer function

      Advantages of closures
      1. private state
      2. data encapsulation
      3. currying

      Disadvantages to closures
      1. Memory intensive - variables are not garbage collected because they are stored in the lexical environment

      Lexical environment
        * anytime a function is defined a lexical environment is created
        * Lexical environments consist of all the variable defined and where they were defined
        



*/
