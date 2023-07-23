/*
**	José Domínguez Pérez
**	Created	7/21/2022
*/

function fibonacci(num) {
  const fib = [1, 1]

  if (num < 3) return fib.slice(0, num)

  for (let i = 2; i < num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2]
  }

  return fib
}

console.log(fibonacci(6))
