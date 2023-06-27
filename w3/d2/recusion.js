/*



? What is recursion?
- A function calling itself

! Use cases
- when you need access to nested data structure
  ex: json files
      rm -rf recursively deleting sub directories
- solving sub problems, repeat logic over and over
- fib, factorials,
- traversing tree/graph like data structure

Two cases!
- Base case and recursive case

1. Base case - tells our function when to stop recursing, call also be know as the terminating case.
  * you can have more than one base case
ex: if(n === 0); if(array.length === 0), if(!string.length);
  * goal is to work towards the base case, we do this by using the recursive step

2. Recursive case - situation/code in which the function recurses
  * opposite of the base case
  * portion of code, where the function recurses
  * does not have to explicitly be written out, usually using the base case
  * if(n > 0); if(array.length > 0); if(string.length > 0);

3. Recursive step - step towards reaching the base case
* ask ourselves, how do we get to the base case?
  ex: n--(decrement till we hit 0); array.slice(1)(shorten the array till its length is 0)
  * base case - (!arr.length) - stop when array is empty
    * recursive step - array.pop()/array.shift() - any method to shorten the array will work
    * we are shortening the array and working towards empty array

  * Usually youll need a base case/recursive case and a recursive step
  * if we dont have a base/recursive case or a recursive step, we will end up with a stack overflow
  * recursive function risk placing extra load on the call stack

*/
