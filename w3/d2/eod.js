// Fibonacci with debuggers:
function fibonacci(n, fibs=[0,1]){
    debugger
    if (typeof fibs[n] === 'number') return fibs[n]
    else {
      const fib1 = fibonacci(n-1, fibs)
      debugger
      const fib2 = fibonacci(n-2, fibs)
      debugger
      fibs[n] = fib1 + fib2
    } 
    debugger
    return fibs[n]
  }