// scope!

// let pensGoat = "lemieux";

// letsGoPens("crosby")

// // console.log("Will this print before or after?")

// function letsGoPens(cap){
//     let alt = "jagr"
//     console.log("Alt starts as:", alt)
//     if (true) {
//         alt = "letang"
//         // console.log("Alt's value in this scope:", alt)
//         for (let i = 0; i< 5; i+=5){
//             let alt = "malkin"
//             // console.log("Alt's value in this scope:", alt)
//             // let pensGoat = alt
//             // console.log("pensGoat's value in this scope:", pensGoat)
//             let cap = pensGoat
//             // console.log("cap's value in this scope:", cap)
//             console.log(pensGoat, cap, alt)
//         } // end for loop
//     }// end if block
//     // console.log("pensgoat, cap, alt, in local scope")
// }

// let i = 0
// while (i < 5){
//     console.log(i)
//     i = i + 1
// }

// function adder(arr){
//     const newArr = []
//     arr.forEach(function(num){
//         // let newArr = []
//         newArr.push(num)
//     })
//     return newArr
// }

// console.log(adder([1,2,3]))

// function windRunners(){
//     const captain = "kaladin"
//     const myArray = []
//     myArray.push(1)
//     // captain = "moash"
//     if (true){
//         let captain = "sigzil"
//         console.log(captain)
//     }
//     console.log(myArray)
//     console.log(captain)
// }

// windRunners()

// function windRunners(){
//     // var captain = "kaladin"
//     console.log(captain)
//     if (true){
//         var captain = "sigzil"
//         console.log(captain)
//     } 
//     var captain = "moash"
//     console.log(captain)
// }

// function doubler(arr){
//     let myArr = []
//     arr.forEach(function(num){
//         myArr.push(num*2)
//     })
//     return myArr
// }
// console.log(doubler([1,2,3]))


// const arrSum = function (arr){
    //     return arr.reduce(function(sum, num){
        //       return num + sum;
        //     })
        //   }
        
// const arrayOfNums = [1,2,3,4,5,6,7,8,9]
// const arrSum = (arr) => arr.reduce((sum, num) => sum + num)

// const doubler = (arr) => arr.map(num => num *2)

// console.log(doubler(arrayOfNums))

function buttonMaker(color){
    let count = 0;
    function pullTheButton(){
        count--
        console.log("The count is: ", count)
    }
    function pushTheButton(){
        console.log("count before button was pushed:", count)
        count++
        console.log("The", color,"button has been pushed", count, "times")
    }
    return {push: pushTheButton, pull:pullTheButton};
}

const redButton = buttonMaker("red")
const greenButton = buttonMaker("green")
const blueButton = buttonMaker("blue")

console.log(buttonMaker("red"))

redButton.push()
redButton.push()
redButton.pull()