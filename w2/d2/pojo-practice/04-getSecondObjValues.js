const nestedArr = [
  [
    { a: 1 },
    { b: 2 }
  ],
  [
    { c: 3 },
    { d: 4 },
    { e: 5 }
  ],
  [
    { f: 6 }
  ],
  [
    { g: 7 },
    { h: 8 }
  ]
];

const getSecondObjValues = arr => {
  //iterate through arr
  //for each subArray, check length >= 2
  //if at least 2, print second value
  //else print null
  for (let sub of arr) {
    if (sub.length >= 2) {
      let secondObj = sub[1]
      let secondObjValues = Object.values(secondObj) //array of 1 value
      let value = secondObjValues[0]
      console.log(value)

      //console.log(Object.values(sub[1])[0]) //equivalent to above
    } else {
      console.log(null)
    }
  }

}

getSecondObjValues(nestedArr);               // 2 4 null 8
