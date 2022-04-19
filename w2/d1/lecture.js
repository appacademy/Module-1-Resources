// let fruits = ['Apple', 'Watermelon', 'Orange', 'Pear', 'Cherry', 'Strawberry', 'Grape',
//  'Mango', 'Blueberry', 'Pomegranate', 'Plum', 'Banana', 'Raspberry', 'Grapefruit',
//  'Melon', 'Coconut',
//     'Peach']

 //SAMPLE ITERATIVE LOOP


    // for (let i = 0; i < fruits.length; i++) {
        //     let el = fruits[i]
        //     console.log(fruits[i])
        // }


//FOR EACH
//no return value


    // fruits.forEach(
         //     function (el, i, array) {
                //         console.log(el, i, array)
                //     }
                // )




//MAP
//returns updated element, assign to an outut

// let firstLetterArray = fruits.map(
//     function (el, i, arr) {
//         return el[0]
//     }
// )

// let lowercase = function(el){
//     return el.toLowerCase()
// }

// console.log(lowercase)

// let lowercaseArray = fruits.map(lowercase)




//FILTER
//assign output to variable, return boolean for including or excluding specific items

// let fruitsThatContainA = fruits.filter(
    //     function (el, i, arr) {
        //         // if (el.includes('a') || el.includes('A')) {
            //         //     return true
            //         // } else {
                //         //     return false
                //         // }

                //         return el.toLowerCase().includes('a')
                //     }
                // )

                // console.log(fruitsThatContainA)

                // let values = [NaN, 0, 45, 'apple', [2, 4, 5], undefined]

                // let result = values.filter(
                    //     function (el) {
                        //         return el
                        //     }
                        // )

                        // console.log(result)


// let evenFruits = fruits.filter(
//     function (el, i, arr) {
//         return i % 2 === 0
//     }
// )

// console.log(evenFruits)





//REDUCE
//assign output to variable, return updated accumulator

// let longestNamedFruit = fruits.reduce(
//     function (acc, el, i, arr) {
//         if (el.length > acc.length) {
//             return el
//         } else {
//             return acc
//         }
//     }
// )

// let totalLetter = fruits.reduce(
    //     function (acc, el, i, arr) {
        //         // console.log(acc)
        //         // console.log('current accumulator is ' + acc + ' plus the lenght of ' + el + ' which has ' + el.length + ' letters')
        //         return acc + el.length
        //     },
        //     0
        // )

// console.log(totalLetter)
//         let container = [
//             [], // container[0] less than 6 letters
//             [], // container[1] 6 to 8 letters
//             [], // container[2] 9 or more letters
//         ]

// let sortIntoContainers = function (acc, el, i, arr) {

//     console.log(acc)
//     console.log('----------------------------------------------')

//     if (el.length < 6) {
//         acc[0].push(el)
//     } else if (el.length >= 6 && el.length <= 8) {
//         acc[1].push(el)
//     } else {
//         acc[2].push(el)
//     }

//     return acc
// }

// let organizedFruit = fruits.reduce(sortIntoContainers, container)

// console.log(organizedFruit)
