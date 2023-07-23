/*
  -============================= Operadores Relacionales =============================-
  Los operadores relacionales comparan sus operandos y retorna un booleano como
  resultado.
*/

/*
  * in
  Devuelve true si la propiedad especificada se encuentra en el objeto.
    propiedad in objeto;
*/
'PI' in Math            // → true
'length' in []          // → true

const usuario = { nombre: 'José' }
'nombre' in usuario     // → true
'apellido' in usuario   // → false



/*
  ! instanceof
  Devuelve true si el objeto especificado como primer operando es del tipo especificado
  en el segundo operando.
    objeto instanceof TipoDeObjeto;
*/
[1, 2, 3] instanceof Array     // → true
({ a: 1 }) instanceof Object   // → true
