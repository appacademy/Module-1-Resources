/*


  Function
  - A function is a procedure for code that run when called
  - repeat behavior/logic over and over
  - writing a function is know as function declaration/definition

  * JavaScripts read top to bottom
  * Function will not be read, unless its called/invoked

  Three things to remember about return statements are:
  1. Every function call, evaluates to its return
  2. Every function is js, returns undefined by default unless a return is specified
  3. Once a return statement is encountered, the function will immediately stop and return the value, ignore any code below in scope

  Function naming convention
  - camelCase => functionTest
  - descriptive names
  - verb followed by a noun, CRUD: getInfo, deleteInfo, editInfo

  Creating the function and passing parameters

  - Parameters are used to represent the arguments passed

  ! creating the function functionName(param1, param2) {
    return undefined;
  }

  ! call/invoke the function and pass arguments
  ! if we dont call the function, it is never read
  functionName(argument1, argument2)

  when we pass an argument to a function
  the parameters under the hood just assign the argument to the parameter
  ! happening under the hood
  ex: let param1 = argument1
      let param2 = argument2

*/
