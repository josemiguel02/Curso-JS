/*
  ?================== Métodos de Strings ==================?
*/

let str = 'Hola soy un string'

//# Obtener longitud de un string
console.log('length ->', str.length)


//! Obtener partes de una cadena de string.
/*
  * slice() => acepta 2 numeros.
  - 1ero valor es donde va a empezar el carácter.
  - 2do valor es donde termina el carácter.
*/
let strSlice = str.slice(0, 10)
console.log('slice() ->', strSlice)

/*
  # Uso con índices negativos => cuando se usa un numero negativo se indica
  # que va a obtener partes de una cadena desde el final hasta el inicio.
*/
let strSlice2 = str.slice(-1) //! Se indica que obtiene desde el final
console.log('slice(-n) ->', strSlice2)



/*
  @ substring() => es igual a slice(), acepta 2 numeros que son uno de incio y final
*/
let strSubstring = str.substring(5, 10)
console.log('substring() ->', strSubstring)


/*
  # substr() => acepta 2 numeros.
  - 1ero valor => donde va a empezar el carácter.
  - 2do valor => longitud de carácteres que se van a extraer.

  !NOTA: este método está deprecated (obsoleto).
*/
let strSubstr = str.substr(0, 4)
console.log('substr() ->', strSubstr)



//* Reemplazar parte del contenido de una cadena de string
/*
  ? replace() => acepta 2 valores.
  - 1er valor => carácter que se quiere reemplazar.
  - 2do valor => el valor por el cuál se va a reemplazar.
*/
let cadena = 'Hola, mi nombre es José'
let reemplazo = cadena.replace('José', 'Random')
console.log('replace() ->', reemplazo)

/*
  !NOTA: al utilizar string en el 1er valor del método solo se reemplaza
  el primer carácter que encuentra.
*/


//# Utilizando una expresión regular para que reemplace todos los carácteres.
let textoLargo = 'Texto largo que se repite. Texto largo que se repite.'

const reemExp = textoLargo.replace(/largo/g, 'corto')
console.log('replace(expReg) ->', reemExp)



//* O más fácil utilizando el método replaceAll()
const reemp2 = textoLargo.replaceAll('largo', 'corto')
console.log('replaceAll() ->', reemp2)



/*
  - toLowerCase() => convierte una cadena de string en minúsculas.
*/
// Convertir string a Minusculas
let texto = 'TEXTO EN MINUSCULA'
let txtMinu = texto.toLowerCase()
console.log('toLowerCase() ->', txtMinu)


/*
  # toUpperCase() => convierte una cadena de string en mayúsculas.
*/
let texto2 = 'texto en mayuscula'
let txtMay = texto2.toUpperCase()
console.log('toUpperCase() ->', txtMay)
