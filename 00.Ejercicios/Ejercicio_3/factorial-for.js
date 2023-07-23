const nFactorial = 10
let resultado = 1

for (let i = 1; i <= nFactorial; i++) {
  // Primera iteracion => 1 * 1 = 1
  // Segunda iteracion => 1 * 2 = 2
  // Tercer iteracion  => 2 * 3 = 6

  resultado *= i
}

console.log('El factorial de 10 es:', resultado)
