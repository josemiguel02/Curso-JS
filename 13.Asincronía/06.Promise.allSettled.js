/*
  ~============================== Promise.allSettled() ===============================~
  Devuelve una promesa que se cumple después de que todas las promesas dadas se hayan
  cumplido o rechazado, con una serie de objetos que describen el resultado de cada
  promesa.

  Por lo general, se usa cuando tiene varias tareas asincrónas que no dependen unas de
  otras para completarse con éxito.
*/


Promise.allSettled([
  Promise.resolve('Valor 1'),
  Promise.resolve('Valor 2'),
  Promise.reject('Rechazado')
])
  .then(valores => console.log(valores))
  .catch(error => console.error(error));



Promise.allSettled([
  Promise.resolve('Mensaje 1'),
  new Promise((_, reject) => setTimeout(() => reject('Ha sido rechazado 🚫'), 3000)),
  Promise.resolve('Mensaje 2')
])
  .then(resultado => console.log(resultado))
  .catch(error => console.error(error));
