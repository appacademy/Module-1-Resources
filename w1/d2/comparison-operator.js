/*


  Comparison operators

< - less than
> - greater than
== - loose equality
=== - strict equality
<= - less than equal too
>= - greater than equal too

when using comparison operators, it will return a boolean!
*/

// console.log(2 < 3);//true
// console.log(10 > 5)//true
// console.log(10 >= 10);//true
// console.log(20 < 20);//false
// console.log('===', 10 < '11' && typeof Number);
//loose equality - ==, checking the value, not the data type
console.log(10 == '10');//true

//strict equality - ===, checks the value and the data type
console.log(10 === '10');//false - one is a string and one is a number

// let array = [1,2,3]
// console.log(array === [1,2,3])//false


/*
comparing where the letters are lexicographically
0 1 2 3 4 5
a b c d e f

*/

// console.log('a' < 'A')//false
// console.log('z' > 'a')//true


//https://web.alfredstate.edu/faculty/weimandn/miscellaneous/ascii/ascii_index.html
console.log('Z' < 'a')//true
