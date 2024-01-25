// nested includes, but order of nested elements matter
// testing permutations

function deepIncludesOrderMatters(subs, arr) {
  if (subs.length !== arr.length) return false;
  let matched = [];
  for (let set1 of subs) {
    let match = false;
    for (let i = 0; i < arr.length; i++) {
      if (matched.includes(i)) continue;
      const set2 = arr[i];
      if (set1.length !== set2.length) continue;
      let elementMatch = true;
      for (let j = 0; j < set1.length; j++) {
        if (set1[j] !== set2[j]) {
          elementMatch = false;
          break;
        }
      }
      if (elementMatch) {
        matched.push(i);
        match = true;
        break;
      }
    }
    if (match === false) return false;
  }
  return true;
}

module.exports = deepIncludesOrderMatters;