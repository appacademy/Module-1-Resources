/*
Array Methods w/ Braxton
  - forEach()
  - map()
  - filter()
  - reduce()
  - find()
*/

/* Setting up a standard for loop and the differences coming up. */
// for(let i = 0; i < array.length; i++){

// }

/* What is a callback function?
  A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
*/

/* Array.forEach */// ***Do NOT return in your forEach***
// Definition - Method executes a provided function once for each array element.

const myForEach = (arr) => {
  const myObj = {
    isEven: {},
    isPrime: {},
  }
  arr.forEach( ele => {
    //checking if num is even
    if (ele % 2 === 0) myObj.isEven[ele] = true;
    else myObj.isEven[ele] = false;

    // checking if num is prime
    let prime = true;
    for(let i = 2; i < ele; i++){
      if (ele % i === 0) {
        prime = false;
        break;
      }
    }
    if (ele > 1) myObj.isPrime[ele] = prime;
  });

  // console.log(myObj);
  return myObj;
};


/* Array.map */
// Definition - Method creates a new array populated with the results of calling a provided function on every element in the calling array. */

const multiplyNums = (arr, multiplier) => {
  // let newArr = [];
  return arr.map((ele) => {
    return ele * multiplier;
  });
  // console.log(newArr);
  // return newArr;
}

/* Array.filter */
// Definition - Method creates a shallow copy of a portion of a given array,
//              filtered down to just the elements from the given array that pass the test implemented by
//              the provided function.


const filterByType = (arr, type) => {
  let res = arr.filter(ele => {
    return ele.type !== type;
  })
  return res;
};


/* Array.reduce */
// Definition - Method executes a user-supplied "reducer" callback function on each element of the array,
//              in order, passing in the return value from the calculation on the preceding element.
//              The final result of running the reducer across all elements of the array is a single value.


const reduceSum = (arr) => {
  // console.log(arr);
  return arr.reduce((prev, curr) => {
    // console.log(prev, curr);
    return prev + curr;
  }, 0)
};

const reduceSumArray = (arr) => arr.reduce((newArr, curr) => {
    if (curr > 5) newArr.push(curr);
    return newArr;
  }, []);

const reduceSumInObj = (arr) => {
  // console.log(arr);
  let res = arr.reduce((obj, curr) => {
    // obj[curr] ? obj[curr]++ : obj[curr] = 1;
    if (obj[curr]) obj[curr]++;
    else obj[curr] = 1;
    return obj;
  }, {});
  // console.log(res);
  return res;
};


/* Array.find */
// Definition - Method returns the first element in the provided array that satisfies the provided testing function.
//              If no values satisfy the testing function, undefined is returned.


const findUsersName = (users, usersName, age) => {
  let user = users.find(user => {
    return user.name.toLowerCase() === usersName.toLowerCase() && user.age === age;
  })
  return user;
};













let colors = ['red', 'blue', 'blue', 'green', 'pink', 'yellow']
let nums = [2, 4, 1, 7, 5, 10, 3, 2, 34, 19];
let animals = [
  {animal: 'monkey', type: 'mammal'},
  {animal: 'parrot', type: 'bird'},
  {animal: 'zebra', type: 'mammal'},
  {animal: 'shark', type: 'fish'},
  {animal: 'bass', type: 'fish'},
  {animal: 'chicken', type: 'bird'},
]
let users = [
  {name: 'Jill', age: 39},
  {name: 'Alex', age: 26},
  {name: 'Braxton', age: 22},
  {name: 'Braxton', age: 30},
  {name: 'Brad', age: 50},
]

myForEach(nums);
multiplyNums(nums, 3);
filterByType(animals, 'mammal');
reduceSum(nums);
reduceSumArray(nums);
reduceSumInObj(colors);
findUsersName(users, 'bRaXtOn', 30);
