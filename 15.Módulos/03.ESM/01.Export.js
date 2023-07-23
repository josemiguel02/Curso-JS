/*
  -============================== Exportando Módulos ESM ==============================-
  Existen dos tipos de exportaciones:
    Exportaciones Nombradas: Pueden haber múltiples exportaciones con nombre en un
    solo archivo. Tiene que ser importado con el nombre tal cual lo exportamos.

    Exportaciones por Defecto: Solo puede haber una exportación por defecto en un
    solo archivo, además que una exportación por defecto puede ser importado con
    cualquier nombre.

  !NOTA: Se pueden tener varias exportaciones nombradas por módulo pero sólo una
  !exportación por defecto.
*/


/*
  * Exportaciones nombradas
  Para exportar un valor como una exportación nombrada, lo hacemos
  mediante la declaración export, seguido de lo que queremos exportar.
  Puede ser variables, funciones, clases, arrays, objetos, etc.
*/
export const PI = 3.14159

export const getArea = (base, height) => {
  return (base * height) / 2
}

export const cubo = (n) => {
  return n * n * n
}


let mensaje = 'Hola Mundo!'
const usuario = { id: 1, nombre: 'Kurt Cobain' }
let nombre = 'José Miguel'


// También podemos exportar en una línea separada
export { mensaje, usuario }

// Exportando con un alias
export { nombre as miNombre }




/*
  # Exportaciones por Defecto
  Para declarar una exportación por defecto, agregamos la palabra clave
  export default, seguido de lo que queremos exportar.

  Otra cosa a tener en cuenta es que la palabra clave export default no
  puede ir antes de la declaración de una variable como esta:
*/
let array = [1, 2, 3, 4, 5, 6]


/*
  Tenemos que usar la palabra clave export default en una línea separada
  de esta forma:
*/
export default array
