/*
  ?================== Métodos de Numbers ==================?
*/


let n1 = 2.8
let n2 = 3.9


/*
  toFixed() => limita el número de decimales dado a un valor especificado.
  Útil para redondear números.
  !NOTA: este metodo convierte el número en un string.
*/
let suma = n1 + n2
console.log('toFixed() ->', suma.toFixed(2)) // se indica que va a tener 2 decimales



/*
  toPrecision() => limita el número de cifras significativas
  !NOTA: este metodo convierte el número en un string.
*/
let n3 = 1839.1232456789
console.log('toPrecision() ->', n3.toPrecision(3))



/*
  valueOf() => devuelve el valor primitivo de un objeto de tipo Number
*/
let numObj = new Number(4)
console.log('valueOf() ->', numObj.valueOf())



/*
  isNaN() => determina si un valor en NaN (Not a number),
  devuele true si el valor dado es NaN y su tipo es Number; de lo contrario, falso.
*/
let n4 = Number('hola')
console.log('isNaN() ->', isNaN(n4))



/*
  parseInt() => convierte un string en un número entero.
*/
let n5 = '30.23'
console.log('parseInt() ->', parseInt(n5))

// Números Hexadecimales (base 16) con el método parseInt()
let numHexa = '0x3a5b7'
console.log('Número Hexadecimal ->', parseInt(numHexa, 16))



/*
  parseFloat() => convierte un string en un número de coma flotante (decimal).
*/
console.log('parseFloat() ->', parseFloat(n5))



/*
  toString() => convierte un número en un cadena de string
*/
let n6 = 232.343
console.log('toString() ->', n6.toString())
