/*
  #================== Método filter() ==================#
  El método filter() devuelve un nuevo Array con todos los
  elementos que cumplan la condición de la función
  proporcionada.

  Éste método recibe una función cómo argumento, y dicha
  función recibe el elemento, índice y el array.

  - Sintaxis:
    filter((element, index, array) => {...})
*/

const estudiantes = [
  { id: 1, nombre: 'Leire', edad: 22 },
  { id: 2, nombre: 'Gorka', edad: 19 },
  { id: 3, nombre: 'José', edad: 17 },
  { id: 4, nombre: 'Amaia', edad: 16 }
]

// Obteniendo a los estudiantes mayores a 18 años
const estudiantesMayores = estudiantes.filter(estudiante => {
  return estudiante.edad > 18
})

console.log(estudiantesMayores)




// Obteniendo a todos los estudiantes, excepto Gorka.
const estSinGorka = estudiantes.filter(estudiante => estudiante.id !== 2)
console.log(estSinGorka)




// Filtrando las frutas que tengan la palabra: 'man'
const frutas = ['manzana', 'banana', 'uvas', 'mango', 'naranja']

const frutasMas = frutas.filter(fruta => {
  return fruta.indexOf('man') !== -1
})

console.log(frutasMas)
