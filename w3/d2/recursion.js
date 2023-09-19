/*





  What is recursion?
    * When a function calls itself from within itself

  What are the use cases for recursion?
    * Traversing Data structure
      * tree/graphs
    * Deep nested loop
      * Elegant and quicker!
    * rm -rf: recursively delete sub directories
    * solve a sub problem that will in turn solve the bigger problem.

  Two cases:
    1. base case: - tells our function when to stop recursing; can also known as the terminating case
      ex: if(n === 0); if(array.length === 0), if(!string.length)
      * goal is to work towards the base case, we do this using the recursive step
      * you can have more than one base case

    2. recursive case - area of code in which the function recurses, usually the opposite of the base case
      * does not have to be explicity written out; usually implied
      ex: if(n > 0); if(array.length > 0); if(string.length > 0)

      if(condition){
        return true
      } else {
        return false
      }

      if(condition){
        return true
      }
        return false


    Recursive step:
      * step towards reaching the base case
      * ask yourself, how do we get to the base case
        * ex: n - 1(decrement till it hits 0)
        * ex: array.slice(1)(shorten the array till it hits an array of zero)
        * We can use any method to shorten the array - pop, shift
        * we are shorting the array and working towards an empty array

    Default params
      * Default function parameters allow parameters to be initialized to a default value if an argument is not passed, if it an argument is passed; it will use that argument
        ex: function name(arr, n = 1){}


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
