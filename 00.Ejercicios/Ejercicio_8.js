/**
 * @Author: José Domínguez Pérez
*/

// Función sin parámetros que devuelva siempre "true"
const miFuncion = () => true


// Función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const funcionAsync = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hola soy una promesa')
  }, 5000)
})

funcionAsync.then(mensaje => {
  console.log(mensaje)
})



// Función generadora de índices pares automáticos
function* generarPares() {
  let indice = 0

  while(true) {
    indice += 2

    if (indice === 10) {
      return indice
    }

    yield indice
  }
}

const resultado = generarPares()

console.log(resultado.next())
console.log(resultado.next())
console.log(resultado.next())
console.log(resultado.next())
console.log(resultado.next())
