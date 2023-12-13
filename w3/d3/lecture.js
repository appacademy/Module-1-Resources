






// anon function





(function(){
  console.log('only runs once!')
})();


(() => {
  console.log('fat arrow iffe')
})();


(function(name){
  console.log(`hello ${name}`)
})('brandon');
// hello brandon

let returnVal = (function(name){
  console.log(`hello ${name}`)
  return 'for example'
})('brandon');//hello brandon


console.log(returnVal);
console.log(returnVal);
console.log(returnVal);
console.log(returnVal);
