/*
  @================== Estructuras condicionales ===================@
  Las estructuras condicionales en Javascript nos sirven para tomar
  decisiones en función de una condición que nosotros establecemos.

  Las más utilizadas son: if, else, switch.
*/


/*
  # if
*/
if (true) {
  /*
    Bloque de instrucciones que se ejecuta
    si se cumple la condición
  */
  console.log('Es verdadero')
} else {
  console.log('No es verdadero') // Caso contrario se ejecuta éste
}

/*
  * Ejemplo con variables
*/
let saldo = 50
let efectivo = 120

if (efectivo < saldo) {
  console.log('Puedes sacar dinero')
} else {
  console.log('Saldo insuficiente')
}


/*
  - if else + else if
*/
let nota = 4

if (nota === 5) {
  console.log('Aprobado')
} else if (nota === 4) {
  console.log('Has obtenido lo suficiente')
} else if (nota === 3) {
  console.log('Supletorio')
} else {
  console.log('Reprobado')
}


/*
  ~ Switch
*/
let dia = new Date().getDay()

// dia es la variable a evaluar
switch(dia) {
  case 1:
    console.log('Lunes')
    break

  case 2:
    console.log('Martes')
    break

  case 3:
    console.log('Miercoles')

    // Se usa break para que no continue el flujo
    break

  case 4:
    console.log('Jueves')
    break

  case 5:
    /*
      # NOTA: Si se utiliza return, ya no es necesario colocar el break.
    */
   return console.log('Viernes')

  case 6:
    console.log('Sábado')
    break

  case 7:
    console.log('Domingo')
    break

  default:
    console.log('Día incorrecto') // Valor por defecto
}
