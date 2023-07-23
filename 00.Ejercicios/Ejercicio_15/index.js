/*
 **	José Domínguez Pérez
 **	Created	7/24/2022
 */
let nombre = 'José Miguel'
let apellido = 'Domínguez'

const objeto = {
  nombre,
  apellido
}

// sessionStorage.setItem('usuario', JSON.stringify(objeto))
// localStorage.setItem('usuario', JSON.stringify(objeto))

const now = new Date().getTime()
const expiryTime = new Date(now + 2 * 60 * 1000).toUTCString()
// document.cookie = `usuario=${JSON.stringify(objeto)};expires=${expiryTime}`
