// const somethingSlow2 = require("./scratch")

// const food = setTimeout(foo, 0)
// const bark = setTimeout(bar, 0)
// // Asynchronous vs Synchronous!

// function somethingSlow(n) {
//     if (n <= 2) return 1
//     return somethingSlow(n - 1) + somethingSlow(n - 2)
// }

// function foo() {
//     console.log("food")
// }

// function bar() {
//     console.log("bark")
// }

// function baz() {
//     console.log("bazaar")
// }

// console.log(Date.now())
// // console.log(food)
// somethingSlow(45)
// console.log("Finished!")


// const foodLogger = (...foods) => console.log(`I'm having ${foods} for lunch today!`)
// //              cb,      delayms, ...args
// setTimeout(foodLogger, 2500, "tomatoes", "carrots", "steak", "noodles")
// // setTimeout(() => {
// //     foodLogger("tomatoes", "carrots", "steak", "noodles")
// // }, 2500)


// setInterval
// const foodLogger = (...foods) => console.log(`I'm having ${foods} for lunch today!`)

// function intervalFunc(number, delay,){
//     const interval = setInterval(()=>{
//         foodLogger("Tacos", "pickles", "cheese", "dumplings", "sushi", "burger", "hot cheetos")
//         number--
//         if (number === 0) clearInterval(interval)
//     },delay)
// }
// intervalFunc(4, 500)

const delays = [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000]

function recursiveTimeouts(delayArr) {
    if (delayArr.length === 0) return
    const currentDelay = delayArr[0]
    console.log(`RECURSIVE!! Waiting for ${currentDelay} ms...`)
    setTimeout(recursiveTimeouts, currentDelay, delayArr.slice(1))
}
function synchronousTimeouts(delayArr) {
    // for (const delay of delayArr){
    //     // console.log(`Creating timeout with ${delay}...`)
    //     // setTimeout(console.log, delay, `SYNCHRONOUS!! Waiting for ${delay} ms...`)
    // }
    delayArr.forEach(delay => {
        console.log(`Creating timeout with ${delay}...`)
        setTimeout(console.log, delay, `SYNCHRONOUS!! Waiting for ${delay} ms...`)
    })
}

recursiveTimeouts(delays)
synchronousTimeouts(delays)



// const int = setInterval(foodLogger, 2500, "bbq", "calzone", "pierogies")
// const timeout = setTimeout(foodLogger, 2500, "bbq", "calzone", "pierogies")
// console.log(timeout)
// clearTimeout(timeout)
// console.log(timeout)