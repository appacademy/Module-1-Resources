// nested includes and nested elements order doesn't matter
// testing subsets

function deepIncludes(subs, arr) {
  if (subs.length !== arr.length) return false;
  let matched = [];
  for (let set1 of subs) {
    let match = false;
    for (let i = 0; i < arr.length; i++) {
      if (matched.includes(i)) continue;
      const set2 = arr[i];
      if (set1.length !== set2.length) continue;
      const included = [];
      for (let j = 0; j < set1.length; j++) {
        for (let k = 0; k < set2.length; k++) {
          if (included.includes(k)) continue;
          if (set1[j] === set2[k]) included.push(k);
        }
      }
      if (included.length === set1.length) {
        matched.push(i);
        match = true;
        break;
      }
    }
    if (match === false) return false;
  }
  return true;
}

module.exports = deepIncludes;