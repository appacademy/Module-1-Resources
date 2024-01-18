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
// console.log(arr)
for(let i = 0; i < arr.length; i++) {
 let subArr = arr[i];
 // console.log(subArr)
 if(subArr[1]) {
  let obj = subArr[1]
  console.log(obj)
  for(let key in obj) {
   let value = obj[key]
   // console.log(value)
  }
 } else {
  console.log(null)
 }
}
}

getSecondObjValues(nestedArr);               // 2 4 null 8
