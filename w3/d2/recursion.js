/*


  What is recursion?
   * When a function calls itself

  When are the use cases for recursion?
   * We can use recursion to break down problems into sub problems
    * smaller chunks that are more digestible
    * repeating behavior
   * Whenever we need to traverse a deeply nested objects or array
   * Create different algorithms
    * searching algos
   * rm -rf: recursively deleting sub directories
   * traversing tree/graphs like data structures

  Two cases:
  1. base case - tells our function when to stop recursing; can also be known as the terminating case
    * ex: if(n === 0), if(array.length === 0), if(!string.length)
    * goal: is to work towards the base case; we do this using the recursive step
    * you can have more than one base case

  2. recursive case - area of code in which the function recurses, usually the opposite of the base case
    * does not have to be explicitly written out, usually just use the base case
    * ex: if(n > 0), if(array.length > 0), if(string.length > 0)

  Recursive step:
    * step towards reaching the base case
    * ask ourselves; how do we get to the base case?
      * ex: n--(decrement a number till its 0)
      * array.slice(1) shorten the array till the length is 0

  Default Params
    * allows us to default a parameters value if a arguments is not passed
    * if an argument is passed, then js will use the argument

  Lets code it out!
  * What happens when a functions calls itself in relation to the call stack
  * Recursive problems risk place extra load on the call stack

*/
