/*
  !======================== Excepciones y Manejo de Errores ========================!
*/


// Manejando Errores con Condicionales
function doble(numero) {
  if (typeof numero === 'number') {
    return numero * 2
  } else {
    return false
  }
}

console.log(doble(7))


// Validando que el valor sea de tipo number y sea par
function cuadrado(valor) {
  switch (typeof valor) {
    case 'number':
      // Validando si es un número par
      if (valor % 2 === 0) {
        return valor * valor
      }

      return 'El número debe ser par'

    default:
      return 'El valor debe ser un número'
  }
}

console.log(cuadrado(3))



/*
  * Expresiones de Manejo de Excepciones
  Puedes lanzar excepciones usando la instrucción throw y manejarlas usando
  las declaraciones try...catch.
*/

/*
  throw => lanza una excepción. Una expresión throw especifíca el valor que
  se lanzará.
  - Sintaxis:
    throw expression;
*/
throw 'Error'

// Se puede lanzar cualquier tipo de Expresión.
throw 42;
throw false;
throw { mensaje: 'Error' }




/*
  # Declaración try...catch
  La declaración try...catch señala un bloque de instrucciones a intentar (try),
  y especifica una respuesta si se produce una excepción (catch).
  Funciona de la siguiente manera:
    1.Ejecuta el código en try {...}
    2.Si no hubo errores, se ignora el catch(e). La ejecución llega al final de try y
    continúa, omitiendo catch.
    3.Si se produce un error (excepción), la ejecución de try se detiene y el control
    fluye al comienzo del catch(e).
    El parámetro e (se puede usar cualquier nombre) del catch contiene un objeto de
    error con detalles sobre la excepción.

  Por lo tanto, un error dentro del bloque try {...} no mata el script; tenemos la
  oportunidad de manejarlo en catch.

  !NOTA: try...catch es muy utilizado con funciones asíncronas.
*/


// Sin Excepciones
try {
  console.log('Se ejecutó exitosamente')
} catch (e) {
  console.error(e)
}



// Con Excepciones
try {
  // Se va directo al catch porque no está definida la función.
  noExisteFuncion()
} catch(e) {
  // Aquí se captura el Error.
  console.error(e)
}



// Lanzando nuestras propias Excepciones
try {
  throw 'Error lanzado :('
} catch(e) {
  console.error(e)
}



// Lanzando excepción con una instancia de la clase Error.
try {
  throw new Error('Error lanzado desde clase')
} catch (e) {
  console.error(e)
}



/*
  Propiedades del objeto error del catch.
  Tiene 2 propiedades principales que son:
    - name => nombre del error.
    - message => mensaje sobre detalle del error.
*/
try {
  throw new Error('Error 404!')
} catch (e) {
  // Accediendo directamente a la propiedad message
  console.error(e.message)
}



/*
  finally => el bloque finally contiene instrucciones que se ejecutarán después
  que se ejecuten los bloques try y catch.
  Útil para mostrar loadings (indicadores de carga).

  !NOTA: se ejecuta sin importar si una excepción es o no lanzada.
*/
try {
  throw new Error('Error 🚫')
} catch (e) {
  console.error(e.message)
} finally {
  console.log('Me ejecuto siempre, al finalizar try...catch')
}



// try...catch con Funciones Asíncronas.
const obtenerPromesa = async () => {
  const promesa = Promise.reject('Error 🚫')

  try {
    /*
      Aquí se lanza la excepción, porque la promesa fue rechazada
      por lo tanto pasa directamente al catch.
    */
    let resultado = await promesa
  } catch (e) {
    console.error(e)
  }
}

obtenerPromesa()
