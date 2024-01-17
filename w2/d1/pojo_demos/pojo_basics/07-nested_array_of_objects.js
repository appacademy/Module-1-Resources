/*
Nested array of objects
Given the nested array of objects below, write a function, getSecondObjValues,
that prints the value of the second object within each nested sub-array. If there is no second object, print null.
*/

const nestedArr = [
  [{ a: 1 }, { b: 2 }],
  [{ c: 3 }, { d: 4 }, { e: 5 }],
  [{ f: 6 }],
  [{ g: 7 }, { h: 8 }],
];

const getSecondObjValues = (arr) => {
  // iterate through the array of sub arrays
  for (let i = 0; i < arr.length; i++) {
    // isolate the subArr
    let subArr = arr[i];
    // console.log(subArr[1])

    // index into 'second' object in the subArr
    let secondObj = subArr[1];

    // if the subArr does NOT have a second object in it, return null
    if (!secondObj) console.log(null);

    // iterate through the obj using for in loop to dynamically access the keys
    for (let key in secondObj) {
      // grab the val
      let val = secondObj[key];

      // print it!
      console.log(val);
    }
  }
};

getSecondObjValues(nestedArr); // 2 4 null 8
