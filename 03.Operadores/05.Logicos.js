/*
  @============================= Operadores Lógicos =============================@
  Los operadores lógicos se utilizan normalmente con valores booleanos (lógicos);
  cuando lo son, devuelven un valor booleano.
*/

/*
  - AND (&&)
  El valor producido por && no es necesariamente de tipo boolean, sino que es
  siempre el valor de uno de sus dos operandos.
    x && y;
  Si x es un valor falso (falsy), devuelve x. Si no, devuelve y.
*/
true && true                          // → true
false && true                         // → false
'Hola' && 'Mundo'                     // → 'Mundo'
'' && 'Perro'                         // → ''
0 && 1                                // → 0

true && console.log('Bienvenido!')    // → 'Bienvenido!'



/*
  * OR (||)
  El valor producido por || no es necesariamente de tipo boolean, sino que es
  siempre el valor de uno de sus dos operandos.
    x || y;
  Si x es un valor verdadero (truthy), devuelve x. Si no, devuelve y.
*/
true || true                      // → true
false || true                     // → true
'Perro' || 'Gato'                 // → 'Perro'
'' || 'Mundo'                     // → 'Mundo'
0 || 1                            // → 1

false || console.log('Adiós!')    // → 'Adiós!'



/*
  ~ NOT (!)
  Devuelve un booleano contrario al valor del operando. Si el operando es
  verdadero, devuelve false. De lo contrario, devuelve true.
    !x;
*/
!true         // → false
!false        // → true
!'Perro'      // → false
!0            // → true
!1            // → false
!undefined    // → true
!null         // → true
![]           // → false
!{}           // → false


// Un doble NOT (!!) es a veces usado para convertir un valor al tipo booleano:
!!true        // → true
!!false       // → false
!!"Perro"     // → true
!!0           // → false
!!1           // → true
!!undefined   // → false
!!null        // → false
!![]          // → true
!!{}          // → true
