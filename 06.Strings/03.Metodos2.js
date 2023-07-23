/*
  @================== Métodos de Strings 2 ==================@
*/

/*
 * concat() => concatena una cadena de string con otra.
 */
let str2 = 'Hola, soy'
let str3 = 'José Miguel'
let concatStr = str2.concat(' ', str3)
console.log('concat() ->', concatStr)


/*
  ? Otras formas de concatenar cadenas de strings
*/
//# Con +
let conPlus = str2 + ' ' + str3
console.log('con + ->', conPlus)


//- Con template string o backticks
let backticks = `${str2} ${str3}`
console.log('con template string ->', backticks)



/*
  @ trim() => quita el espacio en blanco de ambos extremos (inicio, final) de una cadena.
  !NOTA: es muy útil para validar string vacíos.
*/
let mensaje = '   Hello World   '
let msjSinEspacio = mensaje.trim()
console.log('trim() ->', msjSinEspacio)



/*
  - charAt() => obtiene un solo caracter que hay en cierta posición.
  - Acepta un valor que es el index del caracter del string.
*/
let str4 = 'Str de un solo caracter'
let unCaracter = str4.charAt(7)
console.log('charAt() ->', unCaracter)



/*
  ~ indexOf() => busca en toda la cadena de string y devuelve el indice (index)
  ~ de la primera cadena encontrada.
  ~ Recibe la cadena a buscar.
*/
let parrafo = 'El veloz zorro marrón salta sobre el perro perezoso. Si el perro ladró, ¿era realmente perezoso?'
let indexPrimero = parrafo.indexOf('perro')
console.log('indexOf() ->', indexPrimero)

//# Y luego se obtiene la cadena con el index -> parrafo[37]



/*
  ? lastIndexOf() => hace lo mismo que indexOf(), con la diferencia que devuelve
  ? el index de la ultima cadena encontrada.
*/
let indexUltimo = parrafo.lastIndexOf('perro')
console.log('lastIndexOf() ->', indexUltimo)



/*
 * split() => divide una cadena de string en un Array (lista) basándose
 * en un separador dado como valor.
*/
let frutas = 'Manzana,Pera,Banana,Uva'
let arrStr = frutas.split(',') //- Separa basándose en las comas
console.log('split() ->', arrStr)

//# O tambien puede separar palabra por palabra
let str5 = 'mucho texto'
let arrStr2 = str5.split(' ') //! Se basa en el espacio en blanco
console.log('split() ->', arrStr2)

//- O tambien puede separar letra por letra
let str6 = 'letraporletra'
let arrStr3 = str6.split('')
console.log('split() ->', arrStr3)



/*
  ? match() => recupera el resultado al coincidir una cadena
  ? de string con una expresión regular y devuelve un Array con las
  ? cadenas de string coincidentes
*/

let cadenaCoincidente = parrafo.match(/el/g)
console.log('match() ->', cadenaCoincidente)



/*
  - includes() => realiza una busqueda en una cadena de string y devuelve
  - true o false si encuentra o no la cadena de string.
*/

let estaIncluido = parrafo.includes('veloz')

console.log('includes() ->', estaIncluido)



/*
  ! startsWith() => determina si una cadena comienza con los caracteres
  ! de una cadena especificada, devolviendo true o false según corresponda.
*/
let comienzaCon = parrafo.startsWith('El')
console.log('startsWith() ->', comienzaCon)



/*
  * endsWith() => es similar al metodo startsWith(), con la diferencia que
  * determina si una cadena termina con los caracteres de una
  * cadena especificada
*/
let terminaCon = parrafo.endsWith('.')
console.log('endsWith() ->', terminaCon)
