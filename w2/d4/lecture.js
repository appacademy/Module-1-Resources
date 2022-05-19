// let pensGoat = "lemieux";

// function letsGoPens(cap){
//     let alt = "jagr";
//     if (true) {
//         alt = "letang";
//         for (let i = 0; i <5; i+=5){
//             pensGoat = cap;
//             // alt = "malkin"

//             // cap = "carter"
//         }
//     }
//     console.log(pensGoat, cap, alt, letsGoPens)
// }
// letsGoPens("crosby")
// console.log(pensGoat)

// function windRunners(){
//     debugger
//     const captain = "kaladin"
//     // captain = "moash"
//     if (true){
//         const captain = "sigzil"
//         console.log(captain)
//     }
//     console.log(captain)
// }
// windRunners()
// console.log(windRunners())

// function windRunners() {
//     debugger
//     console.log(captain)
//     var captain = "kaladin"
//     // var captain = "moash"
//     if (true) {
//         let captain = "sigzil"
//         console.log(captain)
//     }
//     console.log(captain)
// }

// windRunners()


function buttonMaker(color) {
    let count = 0
    function pushTheButton(name){
        count++
        console.log(name, "has pushed the button!")
        console.log("The", color,"button has been pushed", count,"times")
    };
    function pullTheButton(name){
        count--
        console.log(name, "has pulled the button!")
        console.log("The", color,"button has been pushed", count,"times")
    };
    pushTheButton("tester")
    return { pushTheButton, pullTheButton }
    // return function () {
    //     count++
    //     console.log("The", color, "button has been pushed", count, "times")
    // }
}

let redButton = buttonMaker("red")
console.log(redButton)
redButton.pushTheButton("Khoi")
redButton.pushTheButton("Bill")
redButton = buttonMaker("blue")
redButton.pushTheButton("Cam")
redButton.pullTheButton("Jojo")
buttonMaker("red")


// const greenButton = buttonMaker("green")
// redButton = redButton()
// const otherRedButton = buttonMaker("other red")
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// redButton()
// redButton()
// greenButton()
// otherRedButton()