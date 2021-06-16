function sum(num1 = 6, num2 = "No num2") {
  if (typeof num2 === "string") {
    return num2
  }
  return num1 + num2;
  
}

console.log(sum(1, 2));
