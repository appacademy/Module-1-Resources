

function freezeFunc(value){
    // let value = value // -> This happens in our parameters

    function closureCreator(){
        let someVarible = "something"
        
        function nestedFunc(){
            return value
        }
        console.log(nestedFunc)
        return nestedFunc;
    }

    return closureCreator();
}


let globalVar = 5;
let returnedFunction = freezeFunc(globalVar);
globalVar = 10;
// console.log(globalVar)
// console.log("Closure1: ", returnedFunction())

let returnedFunction2 = freezeFunc(globalVar);
globalVar = 20;
// console.log(globalVar)
// console.log("Closure2: ", returnedFunction2())

let alias = returnedFunction
console.log(alias)
console.log(returnedFunction === alias)
console.log(returnedFunction === returnedFunction2)