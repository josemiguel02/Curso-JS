/*
  *============================== Promise.all() ===============================*
  Devuelve una promesa que termina correctamente cuando todas las promesas en
  el argumento iterable se cumplan con éxito.

  Si alguna de las promesas se rechaza, Promise.all() también lo hace.

  !Sintaxis:
    Promise.all(iterable);
*/


const promesa1 = Promise.resolve(1)
const promesa2 = Promise.resolve(2)
const promesa3 = Promise.resolve(3)

Promise.all([promesa1, promesa2, promesa3])
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));



/*
  Si una de las promesas es rechazada, automáticamente Promise.all() también
  y pasa directo al catch().
*/
Promise.all([
  Promise.resolve('Valor 1'),
  Promise.resolve('Valor 2'),
  Promise.reject('Se ha rechazado :c')
])
  .then(valores => console.log(valores))
  .catch(error => console.error(error));



/*
  Usando Promise.all() con map() y Async/Await
*/
const usernames = ['midudev', 'josemiguel02', 'posva']

Promise.all(
  usernames.map(async (user) => {
    const res = await fetch(`https://api.github.com/users/${user}`)
    return res.json()
  })
)
  .then(data => {
    for (const user of data) {
      console.log(user.name)
    }
  })
  .catch(error => console.error(error));
