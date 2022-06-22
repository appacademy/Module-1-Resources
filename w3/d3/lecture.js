// what is an IIFE?
// -- Function that is immediately invoked and maintains privacy of variables
// Before let and const, there was NO block scope
// {let pizza = "hawaiian"}

function colorChooser() {
    var colors = []
    var choice = (() => {
        var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
        return colors[Math.floor(Math.random() * 10000 * colors.length) % colors.length]
    })()
    // var picker = () => {
    //     var colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
    //     return colors[Math.floor(Math.random() * 100) % colors.length]
    // }
    // var choice = picker()
    console.log("It really is: ", choice)
    console.log(colors)
    // console.log(picker)
    return choice
}

colorChooser()