// let pensGoat = "lemieux"

// function letsGoPens(cap){
//   let alt = "jagr"
//   if (true) {
//     alt = "letang"
//     for (let i = 0; i < 2; i +=2){
//       pensGoat = cap;
//       alt = "malkin"
//     }
//   }
//   console.log(pensGoat, cap, alt)
// }

// letsGoPens("crosby")

// let hungry = false;

// function sayHungry(){
//   hungry2 = true;
//   if (hungry2) {
//     console.log("I'm hungry!")
//   } else {
//     console.log("I'm coding!")
//   }
// }

// console.log(hungry)
// sayHungry()
// console.log(hungry2)

// windRunners();

// function windRunners() {
//   var captain = "kaladin"
//   // captain = "moash"
//   if (true) {
//     var captain = "sigzil"
//     console.log(captain)
//   }
//   console.log(captain)
// }

// windRunners();

// function windRunners() {
//   var captain = "teft"
//   // captain = "moash"
//   if (true) {
//     var captain = "Rock"
//     console.log(captain)
//   }
//   console.log(captain)
// }


// function arrSum(nums){

//   return nums.reduce(function(sum, num){
//     return sum + num;
//   })

// }

// const arrSum = nums => {
//   return nums.reduce((sum, num)=> sum + num, 5)
// }
// const arr1 = [1,2,3,4]

// console.log(arrSum(arr1))

function buttonMaker(color){ //higher order function
  let count = 0
  return function(){ //lower order function
    count++
    console.log('The', color, 'button has been pushed', count, 'times')
  }

  // return pushTheButton;
}

const redButton = buttonMaker('red');

redButton()
redButton()
redButton()
const blueButton = buttonMaker('blue');
blueButton()
buttonMaker()
blueButton()
redButton()
blueButton()
redButton()

let darkSouls = (name) => {
  const deaths = {total : 0}
  return (boss) => {
    // deaths = {total:0}
    deaths.total++
    if (deaths[boss]) deaths[boss]++
    else deaths[boss] = 1
    console.log("You have died. ", name , "has died", deaths.total, "time(s)")
    for (let boss in deaths){
      if (boss!=="total") console.log(boss, "has killed you", deaths[boss], "times")
    }
  }
}

let newGame = darkSouls("BillTheMighty")
let otherGame = darkSouls("AdamThePious")

newGame("Capra Demon")
newGame("Capra Demon")
newGame("Capra Demon")
otherGame("Gwyn")
otherGame("Gwyn")
otherGame("Gwyn")
otherGame("Gwyn")
newGame("Ornstein")
// newGame("Ornstein")
// newGame("Ornstein")
// newGame("Ornstein")
// newGame("Ornstein")
newGame("Ornstein")
newGame("Ornstein")
newGame("Smough")
newGame("Smough")
newGame("Smough")
