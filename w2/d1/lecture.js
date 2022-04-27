let nums = [1, 3, 4, 5, 8]

let addOne = function (el) {
    return el + 1
}

let numsPlusOne = nums.map(addOne)

console.log(numsPlusOne)
