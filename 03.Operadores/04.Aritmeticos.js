/*
  ?============================= Operadores de Aritméticos =============================?
  Un operador aritmético toma valores numéricos (ya sean literales o variables) como sus
  operandos y devuelve un solo valor numérico.
*/

//- Suma (+)
3 + 4   // → 7

// El operador (+) también puede concatenar (unir) strings.
'Hola' + ' ' + 'mundo'  // → "Hola mundo"


//~ Resta (-)
5 - 2   // → 3


//* Multiplicación (*)
6 * 4   // → 24


//! División (/)
8 / 2   // → 4


/*
  # Residuo (%)
  Devuelve el resto de la división de dos operandos.
*/
9 % 4   // → 1



/*
  ? Incremento (++)
  Incrementa en una unidad al operando. Si es usado antes del operando (++x) devuelve el
  valor del operando después de añadirle 1, y si se usa después del operando (x++)
  devuelve el valor de este antes de añadirle 1.
*/
let x = 0
let y = 0

++x   // Incrementa x a 1, luego devuelve 1.
y++   // Devuelve 0, luego incrementa y a 1.



/*
  @ Decremento (--)
  Resta una unidad al operando. La posición con respecto al operando tiene el mismo
  comportamiento que el operador de incremento.
*/
let a = 2
let b = 2

--a   // Decrementa a a 1, luego devuelve 1.
b--   // Devuelve 2, luego decrementa b a 1.



/*
  ! Negación Unaria (-)
  Devuelve la negación de su operando.
  Al anteponer el signo -, JavaScript intenta convertir a número al operando y devolver
  su forma negativa.
*/
-'3'    // → -3
-true   // → -1



/*
  * Positivo Unario (+)
  Al anteponer el signo +, JavaScript intenta convertir a número al operando.
*/
+'3'    // → 3
+true   // → 1



/*
  ~ Exponenciación (**)
  Calcula la base a la potencia del exponente, es decir:
  x ** y devuelve x a la potencia de y.
*/
2 ** 3  // → 8
