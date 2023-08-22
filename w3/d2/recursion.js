/*



  Recursion

  What is recursion?
    * When a function calls itself

  What are the use cases for recursion?
    * For issues tha can be broken down in to several pieces, sub problems
    * Traversing Nested data structures(objects/arrays)
    * traverse tree/graph like data structures
    * ex: rm -rf - recursively delete sub directories
    * search algorithms

  Two cases:
    1. Base case - tells our function when to stop recursing; can also be know as the terminating case
      * ex: if(n === 0); if(array.length === 0);
      * goal is to work towards the base case, we do this by using the recursive step
      * you can have more than one base case

    2. Recursive case - area of code in which the function recurses, usually the opposite of the base case
      * ex: if(n > 0); if(array.length > 0)
      * does not have to be explicity written out, usually just have the base case

    Recursive step
      * step towards reaching the base case
      * ask ourselves, how do we get to the base case?
        * ex: n--;
          * decrementing the number till its hit 0
        * array.pop(), array.slice(1), array.shift()
          * shorting the array till the length is 0
      * Recursive stop towards the base case

    Default params
      * Default parameters allow our variables to have default values if a argument is not passed, if an argument is passed the default is not used

*/
