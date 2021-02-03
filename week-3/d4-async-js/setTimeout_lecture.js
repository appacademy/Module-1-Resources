// anonymous function style
setTimeout(function() {
    console.log("time is up")
}, 1000)

console.log("end")



// function expression style
function foo(a,b){
    console.log("time is up")
    console.log(a + "")
}

setTimeout(foo, 1000)

console.log("end")









//setTimeout allows for more than 2 arguments
function foo(a,b){
    console.log("time is up")
    console.log(a + "")
}

setTimeout(foo, 1000, "potato","tomato")

console.log("end")







// what does setTimeout return?
function foo(a,b){
    console.log("time is up")
    console.log(a + "")
}

const res = setTimeout(foo, 1000, "potato","tomato")

console.log("end")




// clearing the timeout
function foo(a,b){
    console.log("time is up")
    console.log(a + "")
}

const res = setTimeout(foo, 1000, "potato","tomato")

console.log("end")