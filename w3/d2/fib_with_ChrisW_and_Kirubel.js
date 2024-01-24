/*
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 etc....
// 0, 1, 2, 3, 4, 5, 6,  7,  8,  9, 10

fibonacci(n - 1) + fibonacci(n - 2)
fibonacci(8 - 1) + fibonacci(8 - 2)
  fibonacci(7)
fibonacci(7 - 1) + fibonacci(7 - 2)
  fibonacci(6)
fibonacci(6 - 1) + fibonacci(6 - 2)
  fibonacci(5)
fibonacci(5 - 1) + fibonacci(5 - 2)
  fibonacci(4)
fibonacci(4 - 1) + fibonacci(4 - 2)
  fibonacci(3)
fibonacci(3 - 1) + fibonacci(3 - 2)
  fibonacci(2)
fibonacci(2 - 1) + fibonacci(2 - 2)
  fibonacci(1)

Base Case: if(n === 1) return 1  &&  if(n === 0) return 0
            fibonacci(1) = 1     &&    fibonacci(0) = 0

when n = 2 fibonacci(2 - 1) + fibonacci(2 - 2) ===> fibonacci(1) + fibonacci(0) = 1 + 0 = 1 when n = 2:
when n = 3 fibonacci(3 - 1) + fibonacci(3 - 2) ===> fibonacci(2) + fibonacci(1) = 1 + 1 = 2 when n = 3:
when n = 4 fibonacci(4 - 1) + fibonacci(4 - 2) ===> fibonacci(3) + fibonacci(2) = 2 + 1 = 3 when n = 4:
when n = 5 fibonacci(5 - 1) + fibonacci(5 - 2) ===> fibonacci(4) + fibonacci(3) = 3 + 2 = 5 when n = 5:
when n = 6 fibonacci(6 - 1) + fibonacci(6 - 2) ===> fibonacci(5) + fibonacci(4) = 5 + 3 = 8 when n = 6:
when n = 7 fibonacci(7 - 1) + fibonacci(7 - 2) ===> fibonacci(6) + fibonacci(5) = 8 + 5 = 13 when n = 7:
when n = 8 fibonacci(8 - 1) + fibonacci(8 - 2) ===> fibonacci(7) + fibonacci(6) = 13 + 8 = 21 when n = 8:

*/
