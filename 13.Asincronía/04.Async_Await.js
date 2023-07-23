/*
  -============================== Async / Await ===============================-
  * async
  La palabra clave async define una función como asíncrona, la cual siempre
  devolverá una promesa.
  Si el valor devuelto de una función asíncrona no es explícitamente una
  promesa, se envolverá implícitamente en una promesa.

  Podemos declarar como async funciones con nombre, anónimas o funciones flecha.

  ! Sintaxis:
    async function name() {...}
    const name = async () => {...}
    async () => {...}


  * await
  La palabra clave await debe ser usada siempre dentro de una función declarada
  como async y esperará de forma asíncrona y no bloqueante a que una promesa se
  resuelva o rechace.
*/


// Declarando una función Asíncrona
async function saludar() {
  return 'Hola!'
}


// Controlando la función Asíncrona, ya que siempre devolverá una promesa.
saludar()
  .then(mensaje => console.log(mensaje))




// Declarando una función Asíncrona de tipo flecha
const sumar = async (n1) => {
  return n1 + 4
}

sumar(6)
  .then(valor => console.log(valor));




// Usando await
const obtenerUsuario = async () => {
  const usuarioPromesa = Promise.resolve({ id: 1, nombre: 'Kurt' })

  /*
    Espera hasta que la promesa se resuelva y luego
    asigna el valor a la variable usuario.
  */
  let usuario =  await usuarioPromesa
  console.log(usuario)
}

obtenerUsuario()



// await con una promesa con un delay de 4s
const productosPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['laptop', 'mouse', 'teclado', 'monitor'])
  }, 4000)
})

const obtenerProductos = async () => {
  console.log('Cargando productos.. ⌚')
  let productos = await productosPromesa
  console.log(productos)
}

obtenerProductos()
