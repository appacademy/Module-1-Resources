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

// [ [{} {2}] [{} {4} {}] [{} null ] [{}{8}] ]

const getSecondObjValues = arr => {
    // Itterate through the parent array
  	// 	 key into the second element
  	//		if out of bound, or not an object -> print null
  	// 		if object, print it's sole value
  
  	for(let i = 0; i < arr.length; i++){
      let obj = arr[i][1]
      if(obj === undefined){
       	 console.log(null)
      } else {
         let finalVal = Object.values(obj)
         let printVal = finalVal.toString()
         console.log(printVal)
      }
    }
}

getSecondObjValues(nestedArr);               // 2 4 null 8
