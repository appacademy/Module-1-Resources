function reverse(string) { // define function
  if (!string) return string;
  return `${reverse(string.slice(1))}${string[0]}`
}

function betterReverse(string) { // define function
  if (string.length === 0) return ""; // base case
  let first = string[0]; // pull out first letter
  let result = betterReverse(string.slice(1)) + first; //recursive step:
  // initialize new variable that will hold what we get back from our recursive call with our first letter added to the end
  return result;
}

//Call Stack:
// function call => evaluation
// betterReverse('') => '' //base case
// betterReverse('') + e => '' + 'e' => 'e'
// betterReverse('e') + s => 'e' + 's' => 'es'
// betterReverse('se') + u => 'es' + 'u' => 'esu'
// betterReverse('use') + o => 'esu' + 'o' => 'esuo'
// betterReverse('ouse') + h => 'esuo'+ 'h' => 'esuoh'
// betterReverse('house') //=> 'esuoh' //initial call

function debuggedReverse(string) {
  debugger
  if (string.length === 0) return "";
  let first = string[0]
  debugger
  let result = debuggedReverse(string.slice(1)) + first;
  debugger
  return result
}

// console.log(debuggedReverse('house'))


function logReverse(string) {
  console.log(string)
  if (string.length === 0) return "";
  let first = string[0]
  console.log(first, string)
  let result = logReverse(string.slice(1)) + first;
  console.log(result)
  return result
}

logReverse('house')
