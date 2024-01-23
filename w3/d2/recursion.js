/*


  Recursion

  What is recursion?
    * recursion is when a function calls itself
      * recursion is when a function calls itself
        * recursion is when a function calls itself

  What are the use cases for recursion?
    * For issues that can be broken down into several, smaller pieces, sub problems
      * fibonacci, factorial
      * search algorithms
      * rm -rf: recursively delete sub directories
      * traversing tree/graph like data structures

  Two cases:
    1. base case - tells our function when to stop recursing; can also be known as terminating case
      * ex: if(n === 0); if(array.length === 0), if(!string.length);
      * goal is to work towards the base case, we do this by using the recursive step
      * you can have more than one base case!

    2. recursive case - area of code in which the function recurses, usually the opposite of the base case
      * does not have to explicitly be written out, usually just use the base case
      * if(n > 0); if(array.length > 0); if(string.length > 0);


  Recursive step:
    * step towards reaching the base case
    * ask ourselves, how do we get to the base case?
      ex: n--(decrement till we hit 0); array.slice(1)(shorten the array till its length is 0)
    * base case - (!arr.length) - stop when array is empty
    * recursive step - array.pop()/array.shift() - any method to shorten the array will work
    * we are shortening the array and working towards empty array

  Default params
    * Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed

  Lets see what happens when a function calls itself in relation to the call stack
    * If we don't tell the function to stop recursing, we will get a stack overflow! Infinite Loop
    * Recursive functions risk placing extra load on the call stack.


  Helpful for students
  * Visualizers
    https://recursion.vercel.app/
    https://pythontutor.com/visualize.html#mode=edit
    https://ui.dev/javascript-visualizer
  * Extra Recursion problems
    https://github.com/JS-Challenges/recursion-prompts
  * Helpful videos
    https://www.youtube.com/watch?v=FVZ-A_Akros&list=PL7mu5NfYICcGphu5CaYj52Ex2nrcCUFZV&index=1&t=110s

*/


