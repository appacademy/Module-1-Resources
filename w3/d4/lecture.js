function somethingSlow(n) {
    if (n === 1 || n === 2) return 1

    return somethingSlow(n - 1) + somethingSlow(n - 2)
}

function foo() {
    console.log("food")
}

function bar(int) {
    // console.log("bark")
    // baz()
    somethingSlow(int)
}

function baz() {
    console.log("bazaar")
}

// console.log(setTimeout(foo, 100))
// //                     cb, delay, ...args
// console.log(setTimeout(bar, 50, 44))
// somethingSlow(44)

const func = () => {
    console.log("second")
    console.log(setTimeout(console.log, 500, "third"))
}

// console.log("first")
// setTimeout(func, 2000)
// console.log("third")

//                cb             delay in ms         ...args
// setTimeout(callBackFunction, delayGoesHere, args, for, callback, go, here)

// const custTimeout = () => console.log('The time is up')
// setTimeout(custTimeout, 500)
// console.log("end")

// const food = (food1, food2, food3) => {
//     console.log(`I love ${food1} and ${food2} and ${food3}`)
// }

const food = (food1, food2, food3) => {
    console.log(`I love ${food1} and ${food2} and ${food3}`)
}

// const int = setInterval(food, 1000, "bbq", "calzone", "pierogi")
// const res = setTimeout(food, 1000, "pizza", "tacos", "ramen")
// console.log("timeout", res)
// clearInterval(res)
// console.log("interval", int)
// clearInterval(int)

function intervalFunc(num, delay) {
    const cb = () => {
        console.log(`${num} -- Interval ran!`)
        num--
        if (num === 0) {
            console.log("Interval complete!")
            clearInterval(interval)
        }
    }
    const interval = setInterval(cb, delay)
}

// intervalFunc(10, 10)

const delays = [100, 400, 600, 800, 1000]

const recurseTimeout = (delayArr) => {
    if (!delayArr.length) return
    const currentDelay = delayArr.shift()
    console.log("Current delay", currentDelay)
    setTimeout(recurseTimeout, currentDelay, delayArr)
}

const delayCreator = () => {
    const delays = []
    for (let i = 0; i< 5; i++){
        delays.push(Math.floor(Math.random()*1000))
    }
    return delays
}

recurseTimeout(delayCreator())