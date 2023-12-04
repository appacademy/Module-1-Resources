//Write a function uncompress(str) that takes in a "compressed" string as an arg.
//A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form.
//The function should return the uncompressed version of the string. See the examples.

//Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4
// your code here

/*
1. write a function uncompress takes in a string
2. create a res variable = ""
3. iterate through the string
4. isolate the current char
5. isolate the number followed by the current char turn it a Numeric type using Number
6. implement a nested loop. the condition will be the number that we got from step 5
7. concat to res
8. return the res

*/

function uncompress(string){
    let res = ""

    for (let i = 0; i < string.length; i+= 2){
        let char = string[i]
        let num = +(string[i + 1])
        // console.log(num)

        for(let j = 0; j < num; j++){
            res += char
            console.log(res)
        }
        // console.log(char)
    }
}

// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'


//helper function

/*
Write a function hasThreeVowels that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
at least three different vowels.

1. write a function hasThreeVowels takes in a string
2. create a count variable
3. iterate through the string
    - isolate the current char
4. use our helper function to determine if the current char is a vowel
    - if it is a vowel increment the count
    - when the count is three, return true

5. return false
*/

// check for vowels
function isVowel(char){
    vowels = 'aeiou';
    if(vowels.includes(char)) return true
}


function hasThreeVowels(string){
    let count = 0;
    for(let i = 0; i < string.length; i++){
        let char = string[i]
        // console.log(char)
        if(isVowel(char)) {
            count++
        }
        if(count === 3) {
            return true
        }
    }
    // console.log(count)
    return false

}

console.log(hasThreeVowels("delicious"));     //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp"));      //  true
console.log(hasThreeVowels("dog"));           //  false
console.log(hasThreeVowels("go back"));       //  false
