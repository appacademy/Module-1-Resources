function somethingSlow(){
 //this will take 4000 ms to run
}

function foo(){
    console.log("foo")
}

function bar() {
    console.log("bar")
    baz()
}

function baz() {
    console.log("baz")
}

setTimeout(foo,1500)
setTimeout(bar,1000)
somethingSlow()