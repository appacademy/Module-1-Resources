// let firstName = "Bill"
// let lastName = "Adams"

// // let newStr = `Hi! My name is ${firstName} ${lastName}`

// // console.log(newStr)

// let arr = [1,2,3,4,5]

// let sumNums = (...nums) => nums.reduce((sum, num) => sum + num)

// // console.log(`The sum of the numbers in the array is ${arr.reduce((sum, num) => sum + num)}`)
// //                    someCondition ? ifTrueEvaluateToThis : ifFalseBeThisInstead
// // console.log(`${arr.length > 5 ? "This is a long array" : "This is a short array"}`)
// console.log(typeof `${sumNums(10,67,42,51,88,92,100)}`)

function foo(word){
    // console.log(word)
    debugger
    baz(         bar("bazaar")         )
    debugger
    return word
}

function bar(word){
    // console.log("value of word in bar: ", word)
    debugger
    return word
}

function baz(word){
    debugger
    return word
}

foo("food")