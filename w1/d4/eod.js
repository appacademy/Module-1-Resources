/*


Write a function uncompress(str) that takes in a "compressed" string as an arg.
A compressed string consists of a character immediately followed by the number of times it appears in the "uncompressed" form.
The function should return the uncompressed version of the string. See the examples.

Hint: you can use the built-in Number function should convert a numeric string into the number type. For example. Number("4") // => 4

input: string
output: also a string


1. define the function asked
2. declare a variable res to represent the return - ""
3. iterate through the string
4. isolate each char in the string
5. isolate the number followed by the current char and turn that into a number Num using Num function // +
6. implement a nested loop.
7. concat to res
8. return the
*/

function uncompress(string){
    let res = "";

    for (let i = 0; i < string.length; i+=2){
        let char = string[i];
        // console.log(char)
        // let num = Number(string[i+1])
        let num = string[i+1]
        console.log(typeof num)

        for (let j = 0; j < num; j++){
            res += char
            // console.log('---->',res)
        }
    }
    return res;
}


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'


//----------------------------------------//

/*

Write a function hasThreeVowels that accepts a string as an argument. The
function should return a boolean indicating whether or not the string contains
at least three different vowels.

* Use a Helper Function

input: string
output: boolean

1. write the function
2. iterate through the string - check if curr char is a vowel
    3. use helper function to determine is this char is a vowel
4. create a var = [];
5. check if the vowel is already in there, if its not, then push it inside
6. If the length of this array is less than 3, we know that it does not have enough vowels

*/

function isVowel(char) {
    let vowels = "aeiou"
    if(vowels.includes(char)) return true
    else return false
}

// console.log(isVowel('t'))

function hasThreeVowels(string){

    let vArr = [];
    for (let i =0; i < string.length; i++){
        let char = string[i]

        // console.log(char)
        if (isVowel(char)) {
            if(!vArr.includes(char)) {
                vArr.push(char)
            }
        }
    }
    // console.log(vArr)
    return vArr.length >= 3
}


console.log(hasThreeVowels("delicious"));     //  true
console.log(hasThreeVowels("bootcamp prep")); //  true
console.log(hasThreeVowels("bootcamp"));      //  false
console.log(hasThreeVowels("dog"));           //  false
console.log(hasThreeVowels("go back"));       //  false
