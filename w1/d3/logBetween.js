// Examples:


/*

	Understand the problem
    - we just need to print every number between the two arguments passed in including the numbers
    * we do not need a  return we just need to print to the terminal
    Input: two arguments - both numbers - -1 and 2
    Output: no return, just console.log(every number between -1 and 2) => -1,0,1,2

    Make a plan!
    1. define a function called logBetween takes in two numbers
    2. iterate! start from the lowNum, iterate up to the highNum, and do so in increments of 1
    	a. as we iterate console.log(i)

*/

let logBetween = function (lowNum, highNum){

  for(let i = lowNum; i <= highNum; i+=1) console.log(i) ;

}

