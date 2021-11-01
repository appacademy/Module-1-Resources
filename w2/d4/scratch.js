//Scope

// let pensGoat = "lemieux"
// let alt = "malkin"

// function letsGoPens(cap) {
//     alt = "jagr"
//     if (true) {
//         alt = "letang"
//         for (let i = 0; i < 2; i += 2) {
//             let pensGoat = cap;
//             let alt = pensGoat 
//             {
//                alt = "guentzel"    
//             }
//         }

//     }
//     console.log(pensGoat, cap, alt)
// }

// letsGoPens("crosby")

// for (let i = 0; i  < 3; i++){
//     console.log("outer", i)
//     for (let j = 0; j <2; j++){
//         console.log("inner", j)
//     }
//     console.log(i)
// }

// console.log(j)


// let hungry = false;

// function sayHungry(){
//     hungry2 = true;
//     if (hungry){
//         console.log("I'm Hungry!")
//     } else {
//         console.log("I'm coding!")
//     } 
// }
// sayHungry()
// // hungry2 = "new string"
// // console.log(hungry2)

// function hungryTest(){
//     console.log(hungry2)
// }
// hungryTest()


// windRunners()

// function windRunners(){
//     const captain = ["kaladin"]
//     captain.push("moash")
//     if (true) {
//         let captain = "sigzil"
//         console.log(captain)
//     }
//     console.log(captain)
// }

// // console.log(captain)

// arow syntax

// function arrSum(nums) {
//     return nums.reduce(function(accum, ele){
//         return accum + ele
//     })
//     // return sum;
// }

// const arrSum = nums => nums.reduce((accum, ele) => accum + ele)

// console.log(arrSum([1, 2, 3, 4]))


// Closure

// const buttonMaker = (color) => {
//     let count = 0;
//     return function lof () {
//         count++
//         console.log('The', color, 'button has been pushed', count, 'times')
//     }
//     // return pushTheButton;
// }

// const redButton = buttonMaker("red");
// // console.log(redButton)

// redButton()
// redButton()
// const greenButton = buttonMaker("green")
// redButton()
// greenButton()
// redButton()
// redButton()

// console.log(greenButton)
// console.log(redButton)

// object closure example

// const bagOfHolding = (name) => {
//     const bag = {}
//     return (item) => {
//         if (bag[item] === undefined) bag[item] = 1
//         else bag[item]++
//         const numDiffItems = Object.keys(bag).length
//         const totalNumItems = Object.values(bag).reduce((accum, ele) => accum + ele)
//         console.log('Added', item, 'to bag belonging to', name)
//         console.log('Their bag now contains', numDiffItems, 'different items')
//         console.log('Totalling ', totalNumItems, 'individual pieces')
//         console.log('Bag intentory:')
//         console.log(bag)
//     }
// }

// const orpheus = bagOfHolding("Orpheus Alan-a-Dale")
// orpheus("Scroll of Fireball")

// const gorgonzola = bagOfHolding("Gorgonzola")
// gorgonzola("Wand of Magic Missile")
// gorgonzola("Gold Pieces")
// gorgonzola("Gold Pieces")
// gorgonzola("Gold Pieces")
// gorgonzola("Gold Pieces")
// gorgonzola("Gold Pieces")

// orpheus("Copper Pieces")
// orpheus("Copper Pieces")
// orpheus("Copper Pieces")


//Refactor to handle remove

const bagOfHolding = (name) => {
    const bag = {}
    return (action, item) => {
        if (action = 'add') {
            if (bag[item] === undefined) bag[item] = 1
            else bag[item]++
        } else {
            if (bag[item] === undefined) return "Unable to find item"
            bag[item]--
            if (bag[item] <= 0) delete bag[item]
            console.log('Removed', item, 'to bag belonging to', name)
        }
        const numDiffItems = Object.keys(bag).length
        const totalNumItems = Object.values(bag).reduce((accum, ele) => accum + ele)
        console.log('Their bag now contains', numDiffItems, 'different items')
        console.log('Totalling ', totalNumItems, 'individual pieces')
        console.log('Bag intentory:')
        console.log(bag)
    }
}


const orpheus = bagOfHolding("Orpheus Alan-a-Dale")
orpheus("add","Scroll of Fireball")

const gorgonzola = bagOfHolding("Gorgonzola")
gorgonzola("add","Wand of Magic Missile")
gorgonzola("add","Gold Pieces")
gorgonzola("add","Gold Pieces")
gorgonzola("add","Gold Pieces")
gorgonzola("remove","Gold Pieces")
gorgonzola("remove","Gold Pieces")

orpheus("add","Copper Pieces")
orpheus("add","Copper Pieces")
orpheus("add","Copper Pieces")