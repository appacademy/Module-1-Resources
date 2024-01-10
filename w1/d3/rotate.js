// your code here
// let rotateRight =  (array, num) => array.slice(-num).concat(array.slice(0, -num))
  // console.log(test);
  //      2. create a copy of the array - use slice??
  let rotate =  function(array, num) {

    // let res = num > 0 ? num : -(num);
     let res;
     if(num > 0) {
      res = num;
     } else {
      res = -num
     };

    for(let i = 0; i < num; i++) {
     if(num > 0) {

       let removedEle = array.pop();
       array.unshift(removedEle)

     } else {

       let removedEle = array.shift();
       array.push(removedEle)

     }
    }
       return array;
   }



   let arr = ['a', 'b', 'c', 'd', 'e'];
   console.log(rotate(arr, 2));
   console.log(arr); // [ 'd', 'e', 'a', 'b', 'c' ]

   let animals = ['wombat', 'koala', 'opossum', 'kangaroo'];
   rotate(animals, -1);
   console.log(animals); // [ 'koala', 'opossum', 'kangaroo', 'wombat' ]


   let rotateRight =  (array, num) => array.slice(-num).concat(array.slice(0, -num))
  // console.log(test);
  //      2. create a copy of the array - use slice??

  let copy = array.slice();

  //      3. iterate up the the number passed in -  do some action twice
  for(let i = 0; i < num; i++) {
   // a. we need remove the last element - .pop
    let removedEle = copy.pop();
    copy.unshift(removedEle)
  //  b. and move that element to the front of the copy - .unshift

  };

//      4. after completing the loop; return the copy
  return copy;
// }
