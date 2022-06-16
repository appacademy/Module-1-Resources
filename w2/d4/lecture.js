// your code here

// let mod = "bill"; // Globally scoped variable

// function letsGoApp(cohort) { // function that creates local scope
//   let circle = "jojo";
//   // let mod;
//   if (true) { // if statement creates block scope
//     circle = "peter"
//     for (let i = 0; i < 7; i++) { // for loop creats another block scope
//       console.log("top of outer loop i:", i)
//       for (i = i + 1; i < 5; i++){
//       mod = cohort;
//       cohort = circle
//       circle = "braxton"
//       console.log("inner i:", i)
//       }
//       console.log("outer i:", i)
//     }

//   }
//   console.log(mod, cohort, circle)
// }

// letsGoApp("david")
// console.log(mod)

let hungry = false

// function sayHungry() {

//     {let hungry = true}

//     {let temp = "Some value"}

//     console.log(temp)

//     if (hungry) {
//         console.log("I'm hungry!")
//     } else {
//         console.log("I'm coding!")
//     }
// }
// sayHungry()

// console.log("Value of hungry:", hungry)

// function windRunners(){
//     const bridge4 = {}
//     const captain = "kaladin"
//     console.log(bridge4)
//     bridge4.captain = captain
//     // captain = "moash"
//     console.log(bridge4)
//     delete bridge4.captain
//     console.log(bridge4)
//     {
//         const bridge4 = "Radiants"
//         console.log(bridge4)
//         const captain = "sigzil"
//         console.log(captain)
//     }
// }

// windRunners()

// const myVariable


// function windRunners() {
//     var bridge4 = {}
//     var captain = "kaladin"
//     // console.log(bridge4)
//     bridge4.captain = captain
//     // captain = "moash"
//     // console.log(bridge4)
//     delete bridge4.captain
//     // console.log(bridge4)
//     {
//     var bridge4 = "Radiants"
//     // console.log(bridge4)
//     var captain = "sigzil"
//     // console.log(captain)
//     }
//     console.log(bridge4, captain)
// }
// windRunners()

function buttonMaker(color) {
    let count = 0;
    const pushTheButton = () => {
        count++
        console.log("The " + color + " button has been pushed " + count + " times")
        return pushTheButton
    }
    function pullTheButton() {
        count--
        console.log("The " + color + " button has been pushed " + count + " times")
        return pullTheButton
    }
    function whatIsCount() {
        console.log("The " + color + " button has currently been pushed " + count + " times")
    }
    const props = {
        "pushTheButton": pushTheButton,
        "pullTheButton": pullTheButton,
        "what": whatIsCount,
    }
    
    return props
}

const redButton = buttonMaker("red")
console.log(redButton)
redButton.what()
redButton.pushTheButton()
redButton.pushTheButton()
redButton.pushTheButton()
redButton.pullTheButton()
redButton.pullTheButton()
redButton.pullTheButton()
redButton.pullTheButton()
redButton.pullTheButton()
redButton.pullTheButton()
redButton.pushTheButton()
// redButton.pushTheButton()
// redButton.pushTheButton()
// redButton.pushTheButton()
// buttonMaker("green")
// buttonMaker("green")
// buttonMaker("green")
// buttonMaker("green")
// buttonMaker("green")
// buttonMaker("green")
// buttonMaker("green")
// redButton.pushTheButton()
const blueButton = buttonMaker("blue")
blueButton.pushTheButton()()()
// redButton.pushTheButton()()()()()()()()()()()()()()()()()()()()()()()()()()()()()()
// redButton.pushTheButton()
blueButton.what()
redButton.what()
