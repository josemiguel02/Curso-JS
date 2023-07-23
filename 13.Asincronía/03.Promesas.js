/*
  @============================== Promise ==============================@
  Una promesa es un objeto que representa la finalización o error de una
  Operación Asíncrona y su valor resultante, tiene 3 estados posibles:

    1.Pending (pendiente): estado inicial, ni cumplido ni rechazado.
    2.Fulfilled (cumplida o resuelta): lo que significa que la operación se
    completó con éxito.
    3.Rejected (rechazada): lo que significa que la operación falló.

  Una promesa pendiente puede cumplirse con un valor o rechazarse con un
  motivo (error). Cuando ocurre cualquiera de estas opciones, se llama a
  los controladores asociados en cola por el método then() de una promesa.

  Tienen la particularidad de que se pueden anidar los métodos then(),
  siendo el resultado de una promesa, los datos de entrada de otra posible
  función.

  Además tienen un mecanismo para la detección de errores (reject) manejado por
  el método catch().

  !Revisar más en:
  https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
  https://jonmircha.com/javascript-asincrono
*/


/*
  Para crear una promesa tenemos que instanciar la clase Promise.
  En el constructor de la clase Promise recibe un callback con 2 parámetros que son:
    * resolve => resuelve la Promesa. Llamamos a resolve() cuando lo que estábamos
    haciendo de forma asíncrona fue exitoso.

    * reject => rechaza la Promesa. Llamamos a reject() cuando falle.
*/
const miPromesa = new Promise((resolve, reject) => {
  resolve('Promesa resuelta! 🎉')
})

// Controlamos la Promesa con el método then()
miPromesa.then(valor => console.log(valor));




/*
  Creando una promesa con los métodos estáticos
  Promise.resolve()
*/
const promesa2 = Promise.resolve('Segunda promesa resuelta! 🎊')

promesa2.then(valor => console.log(valor));




/*
  Promesa con un delay al obtener datos.
*/
const peliculas = [
  {
    titulo: 'Spider Man',
    director: 'Sam Raimi',
    fecha: new Date(2002, 4, 17)
  },
  {
    titulo: '8 Millas',
    director: 'Curtis Hanson',
    fecha: new Date(2002, 10, 6)
  },
  {
    titulo: 'Avengers: Infinity War',
    director: 'Anthony Russo',
    fecha: new Date(2018, 3, 23)
  }
]

function obtenerPeliculas(){
  return new Promise((resolve, reject) => {

    // Validando si el array está vacío para rechazar la Promesa.
    if(!peliculas.length) {
      reject('Error al obtener las peliculas 😢')
      return
    }

    // Sino resolvemos la Promesa mandando el array con un delay de 3s.
    setTimeout(() => {
      resolve(peliculas)
    }, 3000)
  })
}

// Llamando a la función y controlando la Promesa retornada con then() y catch()
obtenerPeliculas()
  .then(datos => console.log(datos))
  .catch(error => console.log(error));




/*
  Anidando Promesas.
*/
const promesa4 = Promise.resolve(5)

// Se puede usar tantos then() cuantos sean necesarios
promesa4
  .then(valor => Promise.resolve(valor * 2)) // 10
  .then(valor2 => Promise.resolve(valor2 + 10)) // 20
  .then(valor3 => Promise.resolve(valor3 * 3)) // 60
  .then(valor4 => console.log(valor4));




/*
  finally() => Cuando la promesa finalmente se resuelve, sea exitosa
  o rechazada, la función de callback específicada será ejecutada.
  Esto ofrece una forma de ejecutar código sin importar como se
  haya resuelto la promesa, esto es muy útil para mostrar
  loadings (indicadores de carga).
*/
const promesa5 = new Promise((resolve, reject) => {
  const numero = Math.floor(Math.random() * 2)

  if (numero !== 0) {
    resolve()
    return
  }

  reject()
})

promesa5
  .then(() => console.log('Resuelto! 🚀'))
  .catch(() => console.log('Error al resolver, rechazado 😢'))
  .finally(() => console.log('Ha finalizado! 🎉'));
