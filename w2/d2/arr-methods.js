/*
Array Methods w/ Braxton
  - forEach
  - map
  - filter
  - reduce
  - find
*/

// Setting up a standard for loop and the differences coming up.
// for(let i = 0; i < arr.length; i++){

// }

// array.forEach
// Definition - The forEach() method executes a provided function once for each array element.

const removeTheNumber = (arr, num) => {
  let newArr = [];
  arr.forEach((ele) => {
    if (ele !== num) {
      newArr.push(ele);
    }
  })
  return newArr;
};


// array.map
// Definition - Method creates a new array populated with the results of calling a provided function on every element in the calling array.

const multiplyNums = (arr, multiplier) => arr.map((ele) => ele * multiplier);


// array.filter
/* Definition - Method creates a shallow copy of a portion of a given array,
                filtered down to just the elements from the given array that pass the test implemented by
                the provided function.
*/


const filterByType = (arr, type) => arr.filter((animalObj, i)=> animalObj.type === type);


// array.reduce
/* Definition - Method executes a user-supplied "reducer" callback function on each element of the array,
                in order, passing in the return value from the calculation on the preceding element.
                The final result of running the reducer across all elements of the array is a single value.
*/

const reduceSum = (arr) => {
  return arr.reduce((acc, currEle) => acc + currEle, 0)
}

const reduceSumArray = (arr) => {
  return arr.reduce((acc, currEle) => {
    console.log(acc);
    // return currEle > 3 ? acc.push(currEle) : acc, acc;
    if (currEle > 3) acc.push(currEle)
    else acc;
    return acc
  }, [])
}

const reduceSumInObj = (arr) => {
  return arr.reduce((acc, currEle) => {
    return acc[currEle] ? acc[currEle]++ : acc[currEle] = 1, acc;
  }, {})
}


// array.find
/* Definition - Method returns the first element in the provided array that satisfies the provided testing function.
                If no values satisfy the testing function, undefined is returned.
*/

const findUsersName = (users, usersName, age) => {
  let foundUser = users.find(user => {
    return user.name.toLowerCase() === usersName.toLowerCase() && user.age === age;
  })
  return foundUser;
}

// const findUsersName = (users, usersName, age) => users.find(user => user.name.toLowerCase() === usersName.toLowerCase() && user.age === age)













let colors = ['red', 'blue', 'blue', 'green', 'pink', 'yellow']
let nums = [4, 2, 1, 5, 10, 3, 2];
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
  {name: 'Braxton', age: 30},
  {name: 'Braxton', age: 22},
  {name: 'Brad', age: 50},
]

// console.log(removeTheNumber(nums, 2));
// console.log(multiplyNums(nums, 3));
// console.log(filterByType(animals, 'mammal'));
// console.log(reduceSum(nums));
// console.log(reduceSumArray(nums));
// console.log(reduceSumInObj(colors));
console.log(findUsersName(users, 'braxton', 22));
