

/**
 *





 ***TWO WAYS TO DEFINE A FUNCTION***

    1. Function Declaration

    defining a function with the function keyword, DOES NOT USE var, let, or const

    function foo(){
        return 'bar'
        }


    THE name and the function itself are hoisted to the top of its scope.




    2. Function Expression

    creating a variable using var, let, or const and assigning it a function

    const foo = function(){
        return 'bar'
    }


    ONLY the name is 'hosited' to the top of its scope.



    **VARIABLE HOSITING





    **PRIORITY ORDER WHEN USING VAR AND AN IDENTICALLY NAMED FUNCTION**

    variable assignment -> function declaration -> variable declaration
       var foo = 4           function foo(){              var foo
                               return 4
                           }

                           **/

//var banana //variable declaration with var
// var banana = 'variable assignment with var'
// let banana = 'variable assignment with let'

// let banana = function () {
//     return 'function expression with let'
// }


// var banana = function () {
//         return 'function expression with var'
//     }


// function banana() {
//     return 'function declaration'
// }

// console.log(banana)
