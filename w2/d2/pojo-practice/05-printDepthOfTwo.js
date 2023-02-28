const nestedObj = {
  a: "aloe",
  b: {
    c: "cello",
    d: "dello"
  },
  e: {
    f: "fellow",
    g: {
      h: "hello",
      i: "io"
    },
    j: "jello"
  }
}

const printDepthOfTwo = obj => {
  //iterate through obj values
  //check if each value is a nested obj
  //if nested obj, add values to our return arr
  let ans = []

  for (let key in obj) {
    let value = obj[key]
    if (typeof value === 'object') { //if value is a nestedObj
      console.log(Object.values(value))
      //ans.push(...Object.values(value))
      //console.log('ans: ', ans)

      ans = ans.concat(Object.values(value))
    }
  }

  return ans
}

console.log(...printDepthOfTwo(nestedObj));               // cello dello fellow { h: "hello", i: "io" } jello
