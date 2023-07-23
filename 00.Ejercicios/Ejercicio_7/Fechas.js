/*
**	José Domínguez Pérez
**	Created	6/30/2022
*/

const fechaActual = new Date()
const fechaNacimiento = new Date(2000, 1, 24)

const esTarde = fechaActual.getTime() > fechaNacimiento.getTime()

const diaNacimiento = fechaNacimiento.getDate()
const mesNacimiento = fechaNacimiento.getMonth() + 1
const anioNacimiento = fechaNacimiento.getFullYear()

console.log(anioNacimiento)
