/*
  ?===================== Funciones Flecha =====================?
  Las Funciones Flecha o Arrow Functions son una nueva sintaxis
  de ES6 (ECMAScript 6) para definir funciones anónimas en
  JavaScript de un modo más conciso.

  Para definir una Función Flecha utilizamos el símbolo '=>'
  entre los paréntesis y el corchete de apertura, no es
  necesario escribir la palabra function.

  Las funciones flecha pueden definirse en una sola línea, o
  pueden ser multilinea.

  @ Sintaxis:
    param => expression

    (param1, param2) => {...}
*/



//- Declarando una Función flecha
const saludar = () => {
  console.log('Hola desde una función flecha')
}

saludar()



/*
  # Función flecha con un solo parámetro
  Si la función flecha tiene un solo parámetro no es necesario escribir
  los paréntesis.
*/
const cuadrado = numero => {
  return numero * numero
}

console.log(cuadrado(6))



/*
  * Función flecha con varios parámetros.
  Cuando la función flecha tenga más de un parámetro es necesario envolver
  el nombre de estos entre paréntesis.

  !NOTA: Cuando la función no reciba parámetros también son necesarios
  los paréntesis.
*/
const sumar = (num1, num2) => {
  return num1 + num2
}

console.log(sumar(30, 10))



/*
  ~ Función flecha con return implícito
  Si la función flecha tiene solamente una sentencia que devuelve un valor,
  podemos eliminar las llaves y la palabra clave return ya que el return
  estará implícito.
*/
const doble = valor => valor * 2
console.log(doble(5))



/*
  ? Retornando un objeto con una Función flecha
  Si en la función flecha queremos devolver un objeto directamente, vamos a
  tener que envolver el cuerpo de la función entre paréntesis.
*/
const obtenerUsuario = () => ({ nombre: 'Kurt', apellido: 'Cobain' })
console.log(obtenerUsuario())
