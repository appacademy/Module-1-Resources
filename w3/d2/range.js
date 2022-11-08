
//gal solution for range
function range(start, end) {
  // Your code here
  if (start > end) return [];
  if (!Array.isArray(start)) start = [start];
  if (start.length === end - start[0]) {
    return start;
  } else {
    start.push(start[start.length - 1] + 1);
    return range(start, end);
  }
}



range(1, 5)
