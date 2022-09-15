
function somethingSlow(n) {
    if (n <= 2) return 1
    return somethingSlow(n - 1) + somethingSlow(n - 2)
}

// function foo() {
//     console.log("food")
// }

// function bar() {
//     console.log("bark")
//     baz()
// }

// function baz() {
//     console.log("bazaar")
// }

// let fooTime = (setTimeout(foo, 0))

// // console.log(fooTime)

// // clearTimeout(fooTime)
// setTimeout(somethingSlow, 0, 42)

// // console.log(fooTime)

// setTimeout(bar, 0)

// somethingSlow(45)
// // for (let i = 0; i < 10000; i++) {

// //     console.log("FINISHED!")
// // }

// const food = (...foods) => console.log(`I love ${foods.join(" and ")}!`)

// setTimeout(food, 500, "pizza", "tacos", "ramen", "pad kee mao", "curry", "gyros")

// setTimeout(() => {
//     food("pizza", "tacos", "ramen", "pad kee mao", "curry", "gyros")
// }, 500)

// function delayedPrinter(delays){
//     if (!delays.length) return
//     const currentDelay = delays.shift()
//     console.log(`Waiting for  ${currentDelay}ms`)
//     setTimeout(delayedPrinter, currentDelay, delays)
// }

function delayedPrinter(delays) {
    // let totalDelay = 0
    delays.forEach(delay => {
        // totalDelay += delay
        setTimeout(() => {
            console.log(`Waiting for ${delay}ms`)
        }, 
        // totalDelay)
        delay)
    })
}

const delaysArr = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]

delayedPrinter(delaysArr)

// setTimeout(console.log, 20, "first")
// setTimeout(console.log, 30, "second")

// setTimeout((n)=>{
//     console.log("TIMEOUT FUNCTION ADDED TO STACK")
//     somethingSlow(n)
//     console.log("STACK CLEAR")
// }, 3, 45)
// console.log("TIMEOUT CREATED")
// setTimeout(console.log, 5, "ALL DONE!")
// somethingSlow(45)
// console.log("SYNCHRONOUS CODE FINISHED")

// setInterval(console.log, 350, "FOREVER")

// function intervalFunc(n, delay){
//     const interval = setInterval(()=>{
//         console.log(`INTERVAL HAPPENING! ${n > 1 ? n + " ITERATIONS REMAINING" : "LAST ITERATION"}`)
//         n--
//         if (n <= 0){
//             clearInterval(interval)
//         }
//     }, delay)
// }

// intervalFunc(25, 500)