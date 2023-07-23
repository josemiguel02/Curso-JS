/*
  ?=================== Referencias de Objetos VS Copia ===================?
  Una de las diferencias principales entre los Objetos y los tipos de
  datos primitivos, es que los Objetos son alamacenados y copiados por
  referencia, en cambio los primitivos (string, number, etc) son
  asignados y copiados como un valor completo.

  - Revisar más en: https://es.javascript.info/object-copy
*/


// * Ejemplo con los Primitivos
let mensaje = 'Hola!'

/*
  Aquí se copia el valor completo de la variable mensaje.
  Y las dos variables son independientes, cada una almacena
  la cadena 'Hola!'.
*/
let palabra = mensaje


// Si se le cambia el valor, no afecta a la variable mensaje
palabra = 'Otra palabra'




/*
  # Con los Objetos las cosas funcionan totalmente distintas.
*/

/*
  Aquí la variable usuario no almacena el Objeto mismo, sino que
  almacena la referencia a él.
*/
let usuario = {
  nombre: 'José Miguel'
}


/*
  Aquí sólo se copia la referencia al Objeto, el Objeto
  no es duplicado.
*/
let admin = usuario


/*
  Ahora tenemos dos variables, cada una hacen referencia al
  mismo objeto.
*/
usuario
admin


/*
  Si se le cambia el valor al Objeto afecta a la variable usuario,
  ya que las dos variables hacen referencia al mismo Objeto.
*/
admin.nombre = 'Lucy'
console.log(usuario.nombre)


/*
  Es como si tuviéramos un gabinete con dos llaves y usáramos una de
  ellas (admin) para acceder a él y hacer cambios. Si más tarde usamos
  la llave (usuario), estaríamos abriendo el mismo gabinete y accediendo
  al contenido cambiado.
*/




/*
  -================== Copia o Duplicado de Objeto ==================-
  Para copiar un Objeto y no su referencia, debemos hacerlo
  de las siguientes formas:
*/


//@ 1er Forma: usando el método Object.assign()

/*
  Object.assign() => copia todas las propiedades enumerables de uno
  o más objetos fuente a un objeto destino.
  Devuelve el objeto destino.

  * Sintaxis:
    Object.assign(target, ...sources)

  El 1er argumento target es el objeto destino.
  Los siguientes argumentos ...sources (tantos como sea necesario) son objetos fuentes.
*/

const destino = { a: 1, b: 2 }
const fuente = { c: 3, d: 4 }

Object.assign(destino, fuente)
console.log(destino)



// Ahora usamos el método Object.assign() para hacer una copia de un Objeto
const sistemaO = {
  nombre: 'Ubuntu',
  version: 18.04,
  licencia: 'Open Source'
}

const nuevoSO = Object.assign({}, sistemaO)

/*
  Ahora si podemos cambiar el valor sin afectar a la otra variable,
  ya que hemos realizado una copia.
*/
nuevoSO.nombre = 'Windows'

console.log(nuevoSO.nombre)
console.log(sistemaO.nombre)



/*
  ! Problemas con el método Object.assign() al copiar Objetos.
  Si bien pudimos copiar el objeto anterior con el método
  Object.assign(), pero esto no es suficiente cuando tenemos
  un objeto anidado.

  Ejemplo:
*/
const iphone = {
  modelo: '8 plus',
  icloud: {
    nombre: 'José',
    email: 'usuario@mail.com',
    password: 12345
  }
}

const nuevoIphone = Object.assign({}, iphone)
/*
  Cuando se cambia el valor, tambien cambia de iphone.icloud, ya que
  iphone.icloud es otro objeto y en éste solo se copia la referencia.

  ~ El método Object.assign() sólo hace una copia de primer nivel (superficial) y no
  ~ una copia profunda (de objetos anidados).
*/
nuevoIphone.icloud.nombre = 'Chester'

console.log(nuevoIphone.icloud.nombre)
console.log(iphone.icloud.nombre)




/*
  #2da Forma: usando el Operador de Propagación (...)

  !NOTA: realiza una copia de primer nivel (superficial) y no una
  copia profunda (de objetos anidados).
*/
const empleado = {
	nombre: 'Jim',
  puesto: 'Desarrollador',
  salario: {
    neto: 1200
  }
}

const nuevoEmpleado = {...empleado}
nuevoEmpleado.nombre = 'Mark'

console.log(nuevoEmpleado.nombre)
console.log(empleado.nombre)

// Cambiando valores a objeto anidado
nuevoEmpleado.salario.neto = 3000

console.log(nuevoEmpleado.salario.neto)
console.log(empleado.salario.neto)




/*
  * 3era Forma: usando los métodos JSON.parse() y JSON.stringify()

  - Con esta forma si realiza una copia profunda.
*/
const factura = {
  cliente: 'Chris Cornell',
  iva: 12,
  total: 50,
  detalle: {
    articulo: 'laptop'
  }
}

const factura2 = JSON.parse(JSON.stringify(factura))
factura2.cliente = 'Corey Taylor'

console.log(factura2.cliente)
console.log(factura.cliente)

// Cambiando valores a objeto anidado
factura2.detalle.articulo = 'mouse'

console.log(factura2.detalle.articulo)
console.log(factura.detalle.articulo)
