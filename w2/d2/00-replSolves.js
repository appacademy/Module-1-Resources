// check if value in object



// extras
const printDepthOfTwo = obj => {
    // Write your solution here.
  const firstLayer = Object.values(obj)
  firstLayer.forEach(ele => {
    if (typeof ele === 'object'){
    	Object.values(ele).forEach(thing => console.log(thing))
    }
  })
}

function isPalindrome(sentence){
    let chars = {}
    for (const char of sentence){
        if (char !== " "){
            if (chars[char]) delete chars[char]
            else chars[char] = 1
        }
    }
    return Object.keys(chars).length < 2
}

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

const { green, ...objClone } = {
    ...obj,
    yellow: "pentagon"
};
// Write your code here.

console.log(objClone);          // { red: "circle", blue: "square", yellow: "pentagon" }
console.log(green);             // hexagon