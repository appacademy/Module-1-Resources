//example 1
console.log("one")
console.log("two")
console.log("three")





























//example 2 
console.log("one")

function print(){
    console.log("two")
}

print()
console.log("three")


// example 3 
console.log("start")

setTimeout(function() { // does not block execution of code that is below
    console.log("time is up")
}, 1500)

console.log("end")