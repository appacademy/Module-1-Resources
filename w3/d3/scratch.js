const mapper = (arr, cb, res = []) => {
  if (!arr.length) return res;
  const el = arr[0];
  res.push(cb(el));
  return mapper(arr.slice(1), cb, res);
};

console.log(mapper([1, 2, 3], (x) => x * 200)); // [ 200, 400, 600 ]
