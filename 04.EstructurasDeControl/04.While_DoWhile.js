/*
  !================== Bucles While, Do While ==================!
*/

/*
  * while => crea un bucle que ejecuta una instrucción
  mientras que la condición se evalúe como true.

  La condición se evalúa antes de ejecutar la instrucción.
*/
let i = 0

while (i < 10) {
  console.log(i)

  /*
    - NOTA: Incrementar la variable i para que no
    - entre en un bucle infinito.
  */
  i++
}




/*
  # do while => crea un bucle que ejecuta una instrucción
  hasta que la condición se evalúe como false.

  La condición se evalúa después de ejecutar la instrucción, lo que
  hace que la instrucción se ejecute al menos una vez.
*/
let i2 = 0

do {
  // Primero se ejecuta
  console.log('Se ejecuta al menos 1 vez')
} while (i2 > 5)  // Luego se evalúa
