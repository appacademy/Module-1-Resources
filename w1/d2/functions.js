/*


  Functions
    * A function is a procedure of code that will run when its called
    * Writing a function is know as a function declaration or function definition
    * create reusable logic - do not have repeat writing the same lines of code
    * Contains logic to be ran to output a value
    * JavaScript reads top to bottom
    * Function is not read till its called/invoked

  So three things to remember about return statements are:
    * Every function call evaluates to its return value
    * Every function is js returns undefined unless a return is specified
    * Once a return statement is encountered, the function will immediately stop and return the value; anything below the return is ignored

  Function naming convention
    * camelCase => myFunc
    * descriptive names
    * verb followed by a noun: CRUD - getInfo, deleteInfo, editMessage
    * If the return value is a boolean; you could name is checkBoolean

  Declaring/Defining a function
    * Where function is declared/created.
    * where parameters are used to represent the argument passed
    function functionName(param1, param2) {
      return undefined;
    }

  Calling/invoking a function
    * How we tell js to call/use this function.
    * Where we pass the arguments the function
    * A function will not run unless its called/invoked
    * A function call evaluates to return value
    functionName(arg1, arg2);

  If you want to see what a function evaluates too; its return value.
    * You would wrap the function call/invocation in a console.log
    * console.log(functionName());// undefined
    * we are logging what the function evaluates too
    * which is its return value

*/
