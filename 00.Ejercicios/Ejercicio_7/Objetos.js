/*
**	José Domínguez Pérez
**	Created	6/30/2022
*/

const datos = {
  nombre: 'José',
  apellido: 'Domínguez Pérez',
  edad: 22,
  altura: 1.73,
  eresDesarrollador: true
}

const edad = datos.edad

const lista = [
  { ...datos },
  {
    nombre: 'Richard',
    apellido: 'Burgos',
    edad: 23,
    altura: 1.75,
    eresDesarrollador: false
  },
  {
    nombre: 'Carlos',
    apellido: 'Cumbe',
    edad: 22,
    altura: 1.66,
    eresDesarrollador: false
  }
]


const listaOrdenada = lista.sort((p1, p2) => p2.edad - p1.edad)
console.log(listaOrdenada)
