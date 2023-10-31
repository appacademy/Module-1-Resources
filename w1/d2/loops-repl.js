/* GUIDED PRACTICE */

/* 1. Write a loop that logs the numbers 1-10. */
for(let i = 1; i <= 10; i++) {
  // console.log(i)
 }


 /* 2. Write a loop that iterates through a string, and logs each character. */
 let string = 'function';//
 // console.log(string.length)
 for(let i = 0; i < string.length; i++) {
   // console.log(i, string[i])
   let letter = string[i];
   // console.log(letter, string[i])
 }


 /* 3. Write a while loop that performs a certain task, and then write a for loop
 that accomplishes the same task. */
 let j = 0;
 while( j < string.length) {
   let letter = string[j];
   // console.log(letter, j);
   j++
 }


 /* 4. Create and invoke a function that logs every number from 0 to a given
 number. */
 function logNumbers(num) {
   // console.log(num)
   for(let i = 0; i <= num; i++) {
      // console.log(i)
      // if(i === 3) {
      // return i
      // }
   };
   // return
 };

 // console.log(logNumbers(5));



 /* 5. Create and invoke a function that iterates through a string and prints
 every character. */
 function logNumbers (number) {
    for (let x = 0; x <= number; x++) {
      console.log('loook here==>',x)
    };
   return true;
  }

 // console.log(logNumbers(22));


 /* 6. Rewrite the last two functions to iterate backwards instead of forwards. */
 function reverse(string) {

   for(let i = string.length - 1 ; i >= 0; i-= 2) {
     let letter = string[i];
     console.log(letter)
   }
 };

 console.log(reverse('spider'))

 /* 7. Rewrite the two functions to print EVERY OTHER number or character,
 instead of EVERY number or character. */
