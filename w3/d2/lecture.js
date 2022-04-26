function reverse(string){ // define function, takes in string
    debugger
    if (string.length === 0) return "" // base case
    let first = string[0]
    debugger
    let recursiveCall = reverse(string.slice(1))
    debugger
    return recursiveCall + first
}
console.log(reverse("house"))

function sumToN(num){
    debugger
    if (num <= 0) return null;
  
    if (num === 1) return 1;
  
    let total = (num, num2) => {
      return num + sumToN(num2)
    }
    let sum = total(num, num-1)
    debugger
    return sum
  
  }

const sumArray = (arr, i = 0) => {
    debugger
    // if (!arr.length) return 0
    if (i >= arr.length) return null
    // find way to add all elements in our array, work towards base case
    // const first = arr.shift()
    const current = arr[i]
    debugger
    const recursiveCall = sumArray(arr, i+1)
    debugger
    // return first + recursive
    return current + recursiveCall
  }
  function iceCreamShop(flavors, favorite){
    debugger
     if (!flavors.length) return false //base case
    // const first = flavors[0]
    const last = flavors.pop()
    debugger
    if (last === favorite) return true
    // if (first === favorite) return true
    return iceCreamShop(flavors, favorite)
  }