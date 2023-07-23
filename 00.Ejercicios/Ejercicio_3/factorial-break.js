const nFactorial = 10
let resultado = 1

let i = 1

while (i <= nFactorial) {
  if (i === 0) {
    break
  }

  resultado *= i
  i++
}

console.log('El factorial de 10 es:', resultado)
