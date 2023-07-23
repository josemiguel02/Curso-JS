/*
  -======================= Desestructuración =======================-
  La sintaxis de Desestructuración es una expresión de JavaScript que
  permite extraer valores de Arrays o propiedades de Objetos en
  distintas variables.

  Es decir, podemos extraer datos de Arrays u Objetos y
  asignarlos a variables.
*/


/*
  # Desestructuración de Arrays
*/
const frutas = ['manzana', 'pera', 'uva', 'piña']

/*
  Usamos la siguiente sintaxis para extraer los valores del Array y
  asignarlos a las variables.

  !Nota: se extrae dependiendo del índice del elemento del Array
  Ejemplo la variable fruta1 extrae el valor del elemento 0 del Array,
  y la variable fruta2 extrae el valor del elemento 1.
*/
let [fruta1, fruta2] = frutas

console.log(fruta1)
console.log(fruta2)


/*
  * Omitiendo elementos del Array para extraer un valor específico
  Si queremos extraer sólo el valor del 3er elemento del Array
  hay que utilizar comas para omitir los dos primeros elementos.
*/
let [, , fruta3] = frutas

console.log(fruta3)



// Asignando el resto del Array con el Operador de Propagación
const numeros = [10, 20, 30, 40]

let [n1, ...resto] = numeros
console.log(resto)



/*
  Valores Predeterminados
  Los valores predeterminados se pueden asignar a las variables
  en caso de que el valor extraído del Array sea undefined.
*/
const lista = ['A']

let [letra1, letra2 = 'B'] = lista
console.log(letra2)





/*
  ? Desestructuración de Objetos
  Al hacer la desestructuración de Objetos las variables deben tener
  el mismo nombre al de la propiedad del Objeto.
*/
const publicacion = {
  titulo: 'Hola',
  descripcion: 'Mundo',
  link: 'https://www.blogger.com',
  detalle: {
    imagen: 'https://picsum.photos/200/300'
  }
}

let { titulo, descripcion } = publicacion
console.log(titulo)
console.log(descripcion)



// Asignando un nuevo nombre de variable
let { link: miEnlace } = publicacion
console.log(miEnlace)



// Desestructuración de Objetos Anidados
let { detalle: { imagen } } = publicacion
console.log(imagen)



// Asignando el resto del Objeto
const sistemaO = {
  nombre: 'Ubuntu',
  version: 22.04,
  licencia: 'Open Source'
}

let { nombre, ...elResto } = sistemaO
console.log(elResto)



// Valores Predeterminados
let { entorno = 'Cinnamon' } = sistemaO
console.log(entorno)
