var colors  = [];

var choice = (function(){
    var colors = ["red", "orange","yellow","green","blue","indigo","violet"];
    var color = colors[Math.floor(Math.random()*100) % colors.length];
    console.log("the color is:", color);
    var colors = ["This is a test!"];
    return color;
})()

if (false){
    console.log("Hello!")
}

// console.log("value of colors var: ", colors)
// console.log("value of choice var: ", choice)
// // console.log("Color var:", color)
// function greet(){
//     return "Hello!"
// }
// console.log(greet)
// console.log(greet())