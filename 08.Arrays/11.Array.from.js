/*
  *===================== Método Array.from() =====================*
  El método Array.from() crea un Array a partir de un objeto
  iterable.

  - Sintaxis
    Array.from(arrayLike, (element, index) => {...})
*/

const nombre = 'José Miguel'

/*
  Una cadena de string es un objeto iterable, ya que se puede acceder
  a partes de la cadena mediante sus índices.

  Ejemplo:
*/
console.log(nombre[0])




/*
  Se indica que cree una nueva instancia de un Array a partir de la
  variable nombre.
*/
const nombreArray = Array.from(nombre)
console.log(nombreArray)
