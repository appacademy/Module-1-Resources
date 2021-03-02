function reverse_rec(string) {
  debugger
  if (string.length === 0) {
    return "";
  }
  debugger
  let sub_str = reverse_rec(string.slice(0,string.length - 1));
  debugger
  return string[string.length-1] + sub_str;
}
debugger
reverse_rec("lr")

