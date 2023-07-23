/*
  #============================= Operadores de Comparación =============================#
  Un operador de comparación compara sus operandos y devuelve un valor lógico en función
  de si la comparación es verdadera (true) o falsa (false). Los operandos pueden ser
  valores numéricos, de cadena, lógicos u objetos.
*/

/*
  - Igualdad (==)
  Devuelve true si los operandos son iguales.
*/
'Hola' == 'Hola'  // true
2 = 2             // true
3 == '3'          // true
10 == 5           // false



/*
  * Igualdad Estricta (===)
  Devuelve true si los operandos son iguales y del mismo tipo.
*/
3 === '3'       // false



/*
  ~ Desigualdad (!=)
  Devuelve true si los operandos no son iguales (diferentes).
*/
'World!' != ''  // true
2 != 3          // true



/*
  ! Desigualdad estricta (!==)
  Devuelve true si los operandos son del mismo tipo pero no iguales,
  o son de diferente tipo.
*/
3 !== '3'           // true
null !== undefined  // true



/*
  # Mayor que (>)
  Devuelve true si el operando izquierdo es mayor que el operando derecho.
*/
10 > 5     // true
2 > 8      // false



/*
  - Mayor o igual que (>=)
  Devuelve true si el operando izquierdo es mayor o igual que el operando derecho.
*/
6 >= 6    // true



/*
  * Menor que (<)
  Devuelve true si el operando izquierdo es menor que el operando derecho.
*/
4 < 8     // true



/*
  ~ Menor o igual que (<=)
  Devuelve true si el operando izquierdo es menor o igual que el operando derecho.
*/
7 <= 7    // true
