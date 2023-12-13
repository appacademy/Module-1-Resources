/*

Pulled from MDN
https://developer.mozilla.org/en-US/docs/Glossary/Falsy

Falsy
A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context.

JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.

  Falsey Values
    - null
    - undefined
    - false
    - NaN
    - 0
    - -0
    - 0m
    - ''
*/


if('false'){
  console.log('will reach')
};


if (false) {
  // Not reachable
}

if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (0) {
  // Not reachable
}

if (-0) {
  // Not reachable
}

if (0n) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}

/*

https://developer.mozilla.org/en-US/docs/Glossary/Truthy

  Truthy Values
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, "", null, undefined, NaN, and document.all.


*/
//Truthy
if (true)
if ({})
if ([])
if (42)
if ("0")
if ("false")
if (new Date())
if (-42)
if (12n)
if (3.14)
if (-3.14)
if (Infinity)
if (-Infinity){};
