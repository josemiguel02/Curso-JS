/*
  ?====================== Date (Fechas) ======================?
*/

// Declarando una Fecha
const miFecha = new Date()
console.log(miFecha)


// Utilizando milisegundos
const fechaMilisegundos = new Date(20)
console.log(fechaMilisegundos)


// Utilizando cadena de fecha
const fechaCadena = new Date('february 24 2000')
console.log(fechaCadena)


// Utilizando valores en numeros, los meses inician en 0
const fechaValores = new Date(2022, 5, 17)
console.log(fechaValores)


// Obtniendo dia, mes, año
const dia = miFecha.getDate()
const mes = miFecha.getMonth() + 1
const anio = miFecha.getFullYear()
console.log(dia, mes, anio)



//* Para comparar fechas hay que usar el método getTime()
const fecha1 = new Date(2010, 1, 24)
const fecha2 = new Date(2010, 1, 24)

console.log(fecha1.getTime() === fecha2.getTime())



//# Formateando Fechas
/*
  toLocaleString() => devuelve un cadena con la representación al
  idioma de la fecha especificada.
*/
const fecha3 = new Date()
console.log('toLocaleString() ->', fecha3.toLocaleString())



/*
  toLocaleDateString() => devuelve una cadena con una representación
  sensible al idioma de la parte de la fecha especificada en la
  zona horaria del agente de usuario.
*/
console.log('toLocaleDateString() ->', fecha3.toLocaleDateString())



/*
  toDateString() => devuelve la porción de la fecha de un objeto
  Date en formato humano legible en Inglés Americano.
*/
console.log('toDateString() ->', fecha3.toDateString())
