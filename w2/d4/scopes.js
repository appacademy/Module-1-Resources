// Block Scope: let and const
// Function Scope (local): var
// Global Scope: keywordless initialization

// let and var are re-assignable
// const is not re-assignable

// Hoisting is just the behavior of our compiler running
// before the execution context.

let myGlobalVar = 5;
function outer(){
    let outerVar = 10;
    inner();

    function inner(){
        // innerVar :-> compiler
        // outerVar :-> compiler
        console.log(innerVar)

        let innerVar = 15
        let outerVar =30
        innerMost()

        function innerMost(){
            console.log(myGlobalVar)
            console.log(outerVar)
            console.log(innerVar)
        }
    }
}
outer()


