/*
  ?====================================== Clase ======================================?
  Una Clase es una especie de "plantilla o molde" en la que se definen los atributos y
  métodos predeterminados de un objeto.

  !¿Qué es una Instancia en POO?!
  Es cuando se crea un objeto a partir de una clase.

  !¿Qué es un Objeto en POO?!
  Es una Instancia de una clase. Entidad provista de un conjunto de atributos y de
  métodos.
  Se corresponden con los objetos reales del mundo que nos rodea, o con objetos
  internos del programa.

  Una clase está formada por:
    * Atributos => son las caracterísiticas de un objeto y determinan su apariencia,
    estado u otras cualidades.
    ~ Ejemplo: El atributo de una Persona sería su nombre, apellido, edad, etc.

    * Métodos => son las acciones o comportamientos que puede tener un objeto.
    ~ Ejemplo: Los métodos de un Carro sería arrancar, frenar, acelerar, etc.
*/


/*
  - Declaración de una Clase
  Para declarar una clase usamos la palabra reservada class, seguido de un nombre.
*/
class Persona {
  // Declaramos los atributos de la Clase
  nombre
  edad


  /*
    También podemos declarar los atributos directamente en el método constructor.
    El método Constructor se llama cuando se crea una instancia de la clase.
  */
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }


  // Declaramos sus Métodos
  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años!`)
  }
}


// Instanciamos la clase Persona
const persona1 = new Persona('José Miguel', 22)

// Llamamos al método saludar()
persona1.saludar()



// Creamos una segunda instancia de la clase Persona
const persona2 = new Persona('Kurt', 27)
persona2.saludar()
